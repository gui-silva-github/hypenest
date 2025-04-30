export default function Link({setNotifications, icon, name, handleColorPopUp, active, setActive, bgStyle = false}) {

    function handleClick(){
        setActive(name)
        if(name !== "Notificações"){
            setNotifications(false)
        }
        if(handleColorPopUp && name === "Temas"){
            handleColorPopUp()
        }
    }

    return(
        <>
            <a className={`menu-item ${active === name ? "active" : ""}`} onClick={handleClick}>
                <span><img style={{ background: bgStyle ? 'white' : '', padding: bgStyle ? '0.2rem' : '', borderRadius: bgStyle ? '.2rem' : '' }} src={icon} alt="icon"/></span><h3>{name}</h3>
            </a>
        </>
    )
}