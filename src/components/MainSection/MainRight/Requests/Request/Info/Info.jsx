export default function Info({perfil, name, friends, alertMsg, accepted}){

    function friendsCont(friends){
        return friends > 1 ? `${friends} amigos` : `${friends} amigo`;
    }

    return (
        <div className="info">
            <div className="profile-picture">
                <img src={perfil} alt="perfil"/>
            </div>
            <div>
                <h5>{name}</h5>
                <p className="text-gry" >
                    {friendsCont(friends)} em comum
                </p>
                {accepted ? (
                    <small style={{ display: "block" }} className="text-gry alert">{alertMsg}</small>
                ) : null}
            </div>
        </div>
    )
}