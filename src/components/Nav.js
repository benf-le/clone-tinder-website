
const Nav = ({setIsSignUp}) => {

    const handleClick = () => {
        setIsSignUp(false)
    };

    const authToken = true

    return(
        <div>
            <nav className="navbar">
                <a className="logo" href="index.html">Amour</a>
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
                            {/*<a href="login.html" className="secondary-button">Login</a>*/}
                            {!authToken && <button className="login-button" onClick={handleClick}> Login</button>}
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
