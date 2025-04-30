export default function Notification({perfil, name, message, date}){
    return (
        <div>
            <div className="profile-picture">
                <img src={perfil} alt="perfil"/>
            </div>
            <div className="notification-body">
                <b>{name} </b>{message}
                <small className="text-gry">{date}</small>
            </div>
        </div>
    )
}