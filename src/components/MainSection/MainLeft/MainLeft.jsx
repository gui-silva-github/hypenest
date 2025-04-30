import './MainLeft.sass'

import { useState } from 'react'

import Profile from "./Profile/Profile.jsx"

import Aside from './Aside/Aside.jsx'

import Link from './Aside/Link/Link.jsx'
import house from "../../../images/svg/house-door.svg"
import joy from "../../../images/svg/joystick.svg"
import bell from "../../../images/svg/bell.svg"
import chat from "../../../images/svg/chat-left-dots.svg"
import bookmark from "../../../images/svg/bookmarks.svg"
import graph from "../../../images/svg/graph-up-arrow.svg"
import palette from "../../../images/svg/palette.svg"
import gear from "../../../images/svg/gear.svg"

import NotificationBox from './Aside/NotificationBox/NotificationBox.jsx'

import Notification from './Aside/NotificationBox/Notification/Notification.jsx'
import n1 from "../../../images/img/n1.jpg"
import n3 from "../../../images/img/n3.png"
import n4 from "../../../images/img/n4.png"
import n5 from "../../../images/img/n5.png"

import AddPost from '../../AddPost/AddPost.jsx'

export default function MainLeft({setShowMessageShadow, handleProfilePopUp, name, nick, perfil, handlePostPopUp, handleColorPopUp, bgColor}) {
    
    const [active, setActive] = useState("Home")
    const [notify, setNotify] = useState(false)
    const [notifications, setNotifications] = useState(false)
    const [messages, setMessages] = useState(false)
    
    function showNotifications() {
        setNotifications(true)
        setNotify(true)
    }

    function showMessages() {
        setNotifications(false)
        setMessages(true)
        setShowMessageShadow(true)
    }

    const bgStyle = bgColor === 'bg2'

    return (
        <>
            <div className="main-left">

                <Profile handleProfilePopUp={handleProfilePopUp} perfil={perfil} name={name} nick={nick} />
                
                <Aside>
                    <Link setNotifications={setNotifications} bgStyle={bgStyle} icon={house} name="Home" active={active} setActive={setActive} />

                    <Link setNotifications={setNotifications} bgStyle={bgStyle} icon={joy} name="Explorar" active={active} setActive={setActive} />

                    <a className={`menu-item ${active === "Notificações" ? "active" : ""}`} onClick={()=> setActive("Notificações")} onMouseDown={showNotifications} id="notify-box">
                        <span><img style={{ background: bgStyle ? 'white' : '', padding: bgStyle ? '0.2rem' : '', borderRadius: bgStyle ? '.2rem' : '' }} src={bell} alt="bell"/></span>
                        <small className="notify-counter nt" id="ntCounter1" style={{ display: notify ? 'none' : 'block' }} >7+</small>
                        <h3>Notificações</h3>

                        <NotificationBox notifications={notifications}>
                            <Notification perfil={n1} name="Maria Mili" message="aceitou sua solicitação de amizade" date="1 DIA ATRÁS"/>
                            
                            <Notification perfil={n3} name="Emaliy Benjamin" message="curtiu seu post" date="AGORA"/>

                            <Notification perfil={n4} name="Mark Trump e outros 10" message="curtiram seu post" date="HOJE"/>
                            
                            <Notification perfil={n5} name="Evrahim Alli e outros 5" message="comentaram em seu post" date="3 DIAS ATRÁS"/>
                        </NotificationBox>                            
                    </a>

                    <a className={`menu-item ${active === "Mensagens" ? "active" : ""}`} id="messageMenu" onClick={()=> setActive("Mensagens")} onMouseDown={showMessages}>
                        <span><img style={{ background: bgStyle ? 'white' : '', padding: bgStyle ? '0.2rem' : '', borderRadius: bgStyle ? '.2rem' : '' }} src={chat} alt="chat"/></span>
                        <small className="notify-counter" id="notifyCounter2" style={{ display: messages ? 'none' : 'block' }}>3</small>
                        <h3>Mensagens</h3>
                    </a>

                    <Link setNotifications={setNotifications} bgStyle={bgStyle} icon={bookmark} name="Favoritos" active={active} setActive={setActive} />

                    <Link setNotifications={setNotifications} bgStyle={bgStyle} icon={graph} name="Estatísticas" active={active} setActive={setActive} />

                    <Link setNotifications={setNotifications} bgStyle={bgStyle} icon={palette} name="Temas" active={active} handleColorPopUp={handleColorPopUp} setActive={setActive} />

                    <Link setNotifications={setNotifications} bgStyle={bgStyle} icon={gear} name="Configurações" active={active} setActive={setActive} />

                    <AddPost title="Criar um post" left={true} handlePostPopUp={handlePostPopUp} />
                </Aside>
            </div>
        </>
    )
}