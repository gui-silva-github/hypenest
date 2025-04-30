export default function Profile({perfil, name, nick, handleProfilePopUp}) {
    return (
        <>
            <a className="profile">
                <div className="profile-picture" id="my-profile-picture">
                    <img src={perfil} alt="perfil" onClick={handleProfilePopUp}/>
                </div>
                <div className="profile-handle">
                    <h4>{name}</h4>
                    <p className="text-gry">
                        @{nick}
                    </p>
                </div>
            </a>
        </>
    )
}