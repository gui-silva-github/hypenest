import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";
import { faLink, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import pontos from "../../../../../images/svg/three-dots.svg"
import { faCommentDots, faHeart, faBookmark } from "@fortawesome/free-regular-svg-icons";

export default function Feed({handleProfilePopUp, mine = false, perfil, img, content, name, place, date, like1, like2, like3, title, tag, liked, and, commenter, comment}){
    
    const [likedH, setLikedH] = useState(false)
    const [marked, setMarked] = useState(false)
    const [commented, setCommented] = useState(false)

    function handleClick(type){
        if(type === "like"){
            setLikedH((prevState)=> !prevState)
        } else if(type === "mark"){
            setMarked((prevState)=> !prevState)
        } else if(type === "commented"){
            setCommented((prevState)=> !prevState)
        } else if(type === "share"){
            alert("Compartilhado com sucesso!")
        }
    }

    return (
        <>
            {mine &&
                <div className="feed myfeed">
                    <div className="feed-top">
                        <div className="user">
                            <div className="profile-picture" id="my-profile-picture">
                                <img src={perfil} alt="perfil" onClick={handleProfilePopUp}/>
                            </div>
                            <div className="info">
                                <h3>{name}</h3>
                                <div className="time text-gry">
                                    <small>{place}, <span>{date}</span></small>
                                </div>
                            </div>
                        </div>
                        <span className="edit">
                            <img src={pontos} alt="pontos"/>
                
                            <ul className="edit-menu">
                                <li><FontAwesomeIcon icon={faPen}/>Editar</li>
                                <li><FontAwesomeIcon icon={faTrash}/>Deletar</li>
                            </ul>
                        </span>
                    </div>
                    <div className="feed-img">
                        {!content ? <img src={img} alt="feed" /> : content}
                    </div>
                    <div className="action-button">
                        <div className="interaction-button">
                            <span onClick={()=> handleClick('like')}><FontAwesomeIcon style={{ color: likedH ? 'red' : '', transform: likedH ? "scale(1.1)" : "scale(1)", transition: "transform 0.2s ease" }} icon={faHeart}/></span>
                            <span onClick={()=> handleClick('commented')}><FontAwesomeIcon style={{ color: commented ? 'blue' : '', transform: commented ? "scale(1.1)" : "scale(1)", transition: "transform 0.2s ease"}} icon={faCommentDots}/></span>
                            <span onClick={()=> handleClick('share')}><FontAwesomeIcon icon={faLink} /></span>
                        </div>
                        <div className="bookmark" onClick={()=> handleClick('mark')}>
                            <FontAwesomeIcon style={{ color: marked ? 'yellow' : '', transform: marked ? "scale(1.1)" : "scale(1)", transition: "transform 0.2s ease" }} icon={faBookmark}/>
                        </div>
                    </div>
                    <div className="liked-by">
                        <span><img src={like1} alt="like1"/></span>
                        <span><img src={like2} alt="like2"/></span>
                        <span><img src={like3} alt="like3"/></span>
                        <p>Curtido por <b>{liked}</b> e <b>{and}</b></p>
                    </div>
                    <div className="caption">
                        <div className="title">{title}</div>
                        <p><b>{commenter} </b>{comment}
                        <span className="hars-tag"> #{tag}</span></p>
                    </div>
                    <div className="comments text-gry">
                        Ver todos comentários
                    </div>
                </div>
            }

            {!mine &&
                <div className="feed">
                    <div className="feed-top">
                        <div className="user">
                            <div className="profile-picture">
                                <img src={perfil} alt="perfil"/>
                            </div>
                            <div className="info">
                                <h3>{name}</h3>
                                <div className="time text-gry">
                                    <small>{place}, <span>{date}</span></small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="feed-img">
                        {!content ? <img src={img} alt="feed" /> : content}
                    </div>
                    <div className="action-button">
                        <div className="interaction-button">
                            <span onClick={()=> handleClick('like')}><FontAwesomeIcon style={{ color: likedH ? 'red' : '', transform: likedH ? "scale(1.1)" : "scale(1)", transition: "transform 0.2s ease" }} icon={faHeart}/></span>
                            <span onClick={()=> handleClick('commented')}><FontAwesomeIcon style={{ color: commented ? 'blue' : '', transform: commented ? "scale(1.1)" : "scale(1)", transition: "transform 0.2s ease"}} icon={faCommentDots}/></span>
                            <span onClick={()=> handleClick('share')}><FontAwesomeIcon icon={faLink}/></span>
                        </div>
                        <div className="bookmark" onClick={()=> handleClick('mark')}>
                            <FontAwesomeIcon style={{ color: marked ? 'yellow' : '', transform: marked ? "scale(1.1)" : "scale(1)", transition: "transform 0.2s ease" }} icon={faBookmark}/>
                        </div>
                    </div>
                    <div className="liked-by">
                        <span><img src={like1} alt="like1"/></span>
                        <span><img src={like2} alt="like2"/></span>
                        <span><img src={like3} alt="like3"/></span>
                        <p>Curtido por <b>{liked}</b> and  <b>{and}</b></p>
                    </div>
                    <div className="caption">
                        <div className="title">{title}</div>
                        <p><b>{commenter} </b>{comment}
                        <span className="hars-tag"> #{tag}</span></p>
                    </div>
                    <div className="comments text-gry">
                        Ver todos comentários
                    </div>
                </div>
            }
        </>
    )
}