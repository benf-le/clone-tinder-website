import Nav from "../components/Nav";
import AuthModel from "../components/AuthModel";
import {useState} from "react";

const Home = () => {

    const [showModel, setShowModel] = useState(false)
    const [isSignUp, setIsSignUp] = useState(true)


    const authToken = false
    const handleClick = () => {
        console.log("clicked")
        setShowModel(true)
        setIsSignUp(true)
    }
    return (
        <div className="screen">
            <Nav
                minimal={false}
                authToken={authToken}
                setIsSignUp={setIsSignUp}
                setShowModel={setShowModel}/>
            <div className="home">
                <h1 className="primary-title">Swipe Right</h1>
                <button className="primary-button" onClick={handleClick}>
                    {authToken ? 'Signout' : 'Create Account'}
                </button>

                {showModel && (
                    <AuthModel setShowModel={setShowModel}  isSignUp={isSignUp}/>
                )}
            </div>
        </div>
    )
}
export default Home
