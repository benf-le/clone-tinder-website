import Nav from "../components/Nav";
import AuthModel from "../components/AuthModel";
import { useState } from "react";

const Home = () => {

    const [showModel, setShowModel] = useState(false)
    const authToken = false
    const handleClick = () => {
        console.log("clicked")
        setShowModel(true)
    }
    return (
        <>
            <Nav authToken={authToken}/>
            <div className="screen">
            <div className="home">
                <h1>Swipe Right</h1>
                <button className="primary-button" onClick={handleClick}>
                    {authToken ? 'Signout' : 'Create Account'}
                </button>

                {showModel &&(
                    <AuthModel setShowModel={setShowModel}/>
                )}
            </div>
            </div>
        </>
    )
}
export default Home
