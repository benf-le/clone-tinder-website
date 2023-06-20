import ChatHeader from "../components/ChatHeader"
import MatchesDisplay from "../components/MatchesDisplay"
import ChatDisplay from "../components/ChatDisplay"
import {useState} from "react";



const ChatContainer = ({user}) => {

    const [clickUser, setClickUser] = useState(null)

    console.log('clickUser', clickUser)

    return (
        <div className="chat-container">
            <ChatHeader user={user}/>

            <div>
                <button className="option" onClick={()=> setClickUser(null)}>Matches</button>
                <button className="option" disabled={!clickUser}>Chat</button>
            </div>

            {!clickUser && <MatchesDisplay matches={user.matches} setClickUser={setClickUser}/>}

            {clickUser && <ChatDisplay user={user} clickUser={clickUser}/>}

        </div>
    )
}

export default ChatContainer