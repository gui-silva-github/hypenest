export default function Message({ perfil, name, message, active = true }) {
    return (
        <div className="message">
            <div className="profile-picture">
                <img src={perfil} alt="perfil"/>
                {
                active ? <div className="green-active"></div> : null
                } 
            </div>
            <div className="message-body">
                <h5>{name}</h5>
                <p className="text-gry">
                    {message}
                </p>
            </div>
        </div>
    )
}