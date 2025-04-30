import './MainRight.sass';

import { useState } from 'react';

import m1 from "../../../images/img/m1.jpg"
import m3 from "../../../images/img/m3.jpg"
import m5 from "../../../images/img/m5.jpg"
import m7 from "../../../images/img/m (7).png"
import f1 from "../../../images/img/f1.jpg"
import f2 from "../../../images/img/f2.jpg"
import f3 from "../../../images/img/f3.jpg"
import f4 from "../../../images/img/f4.jpg"
import team from "../../../images/img/team2.png"
import profile4 from "../../../images/img/profile-4.jpg"

import { faSearch, faEdit } from '@fortawesome/free-solid-svg-icons';

import Messages from './Messages/Messages.jsx'

import MessageTop from './Messages/MessageTop/MessageTop.jsx'
import MessageSearch from './Messages/MessageSearch/MessageSearch.jsx'
import MessageCategories from './Messages/MessageCategories/MessageCategories.jsx'

import Message from './Messages/Message/Message.jsx'

import Requests from './Requests/Requests.jsx'
import Request from './Requests/Request/Request.jsx'

export default function MainRight({showMessageShadow}) {

    const initialRequests = [
        { id: 1, perfil: f1, name: "Mark Danele", friends: 4, accepted: false, deleted: false },
        { id: 2, perfil: m7, name: "Hija Bent", friends: 2, accepted: false, deleted: false },
        { id: 3, perfil: m1, name: "Even Loise", friends: 1, accepted: false, deleted: false },
        { id: 4, perfil: profile4, name: "Ravi Irina", friends: 6, accepted: false, deleted: false },
        { id: 5, perfil: team, name: "Maromb Jumiap", friends: 9, accepted: false, deleted: false }
    ]

    const [requests, setRequests] = useState(initialRequests);

    const handleAccept = (id) => {
        setRequests(prev => 
            prev.map(req => 
                req.id === id ? {...req, accepted: true } : req
            )
        )
    }

    const handleDelete = (id) => {
        setRequests(prev => 
            prev.map(req => 
                req.id === id ? {...req, deleted: true } : req

            )
        )
    }

    return (
        <>
            <div className="main-right">

                <Messages showMessageShadow={showMessageShadow}>
                    <MessageTop title="Mensagens" icon={faEdit}/>

                    <MessageSearch icon={faSearch} placeholder="Pesquisar mensagens"/>

                    <MessageCategories active="Primário" geral="Geral" requests="Pedidos" number="2" />

                    <Message perfil={m1} name="Alexa Lisa" message="Lorem ipsum dolor sit, amet." />
                    <Message active={false} perfil={f2} name="Elika Majo" message="Lorem ipsum dolor sit, amet." />
                    <Message perfil={f3} name="Alejandro Balbo" message="Lorem ipsum dolor sit, amet." />
                    <Message perfil={f4} name="Arriba Lemar" message="Lorem ipsum dolor sit, amet." />
                    <Message active={false} perfil={m3} name="Xande Felbur" message="Lorem ipsum dolor sit, amet." />
                    <Message perfil={m5} name="Zazu Alibaba" message="Lorem ipsum dolor sit, amet." />
                </Messages>

                <Requests>
                    {
                        requests.map((req) => {
                            const { perfil, name, friends, accepted, deleted, id } = req;
                            return (
                                <Request 
                                    key={id}
                                    perfil={perfil} name={name} friends={friends}
                                    alertMsg="Você aceitou o pedido de amizade"
                                    accepted={accepted} deleted={deleted}
                                    onAccept={() => handleAccept(id)} onDelete={() => handleDelete(id)}
                                    accept="Aceitar" dele="Deletar"
                                />
                            );
                        })
                    }
                </Requests>

                </div>
        </>
    )
}