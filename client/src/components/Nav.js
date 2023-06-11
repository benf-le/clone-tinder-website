
const Nav = ({minimal, setIsSignUp, setShowModel}) => {

    const handleClick = () => {
        setIsSignUp(false)
        setShowModel(true)
    };

    const authToken = false

    return(
        <div>
            <nav className="navbar">
                <a className="logo">Amour</a>
                <div className="links-navbar">
                    <ul>
                        <li>
                            <a href="#">Contact Us</a>
                        </li>
                        <li><a href="#">Q&A ?</a></li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            {!authToken && !minimal && <button className="login-button" onClick={handleClick}>Login</button>}
                        </li>
                    </ul>
                </div>
                <div className="menu-hamburger">
                    <div className="button-burger-menu"></div>
                </div>

            </nav>
        </div>
    )
}
export default Nav
