const AuthModel = ({setShowModel}) => {
    
    const handleClick = () => {
      setShowModel(false)
    }
    
    return(
        <div>
            <div onClick={handleClick}>❌</div>
        </div>
    )
}
export default AuthModel

