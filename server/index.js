PORT = 8000

const express = require('express')
const {MongoClient} = require('mongodb')
const { v4: uuidv4 } = require('uuid');
const uri = 'mongodb+srv://tinder_clone:tinder_clone@database.vlxw9u4.mongodb.net/Database?retryWrites=true&w=majority'
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt");
const cors = require('cors');

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.json('Hello, World')
})

app.post('/signup', async (req, res) => {
    const client = new MongoClient(uri)
    // console.log(req.body)
    const {email, password} = req.body

    const generatedUserId = uuidv4()
    const hashedPassword = await bcrypt.hash(password, 10)

    try {
        await client.connect()
        const database = client.db('app-data')
        const users = database.collection('users')

        const existingUsers = await users.findOne({email})

        if (existingUsers) {
            return res.status(409).send('User already exists. Please Login')
        }

        const sanitizedEmail = email.toLowerCase()

        const data = {
            user_id: generatedUserId,
            email: sanitizedEmail,
            hashed_password: hashedPassword
        }

        const insertUsers = await users.insertOne(data)

        const token = jwt.sign(insertUsers, sanitizedEmail, {
            expiresIn: 60 * 24
        })

        res.status(201).json({token, userId: generatedUserId, email: sanitizedEmail})
    } catch (err) {
        console.log(err)
    }

})

app.post('/login', async (req, res) => {
    const client = new MongoClient(uri)
    // console.log(req.body)
    const {email, password} = req.body


    try {
        await client.connect()
        const database = client.db('app-data')
        const users = database.collection('users')

        // tìm ra user thông qua email được trỏ trực tiếp tới database thông qua phương thức findOne
        const user = await users.findOne({email})


        // so sánh mật khẩu đang nhập trong form với user.hashed_password thông qua phương thức bcrypt.compare
        const correctPassword = await bcrypt.compare(password, user.hashed_password)

        //nếu user và mật khẩu khớp với nhau
        if (user && correctPassword){

        }
    }
})



app.get('/users', async (req, res) => {
    const client = new MongoClient(uri)

    try {
        await client.connect()
        const database = client.db('app-data')
        const users = database.collection('users')

        const returnedUsers = await users.find().toArray()
        res.json(returnedUsers)
    } finally {
        await client.close()
    }
})
app.listen(PORT, () => console.log('Server listening on port ' + PORT))