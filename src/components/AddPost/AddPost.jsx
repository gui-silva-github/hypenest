import { useRef } from "react"

export default function AddPost({shadow = false, left = false, middle = false, title, perfil, handleProfilePopUp, handlePostPopUp, setShowShadow = false}) {
    
    const inputRef = useRef()

    const handlePost = ()=> {
        const value = inputRef.current.value
        if(value.trim() !== ''){
            alert("Postagem feita!!!")
            inputRef.current.value = ''
        }
    }

    return(
        <>  
            {left && 
                <label htmlFor="add-post" className="btn btn-primary btn-lg" id="create-lg" onClick={handlePostPopUp}>{title}</label>               
            }

            {!left && !middle &&
                <div className="add-post input-post">
                    <label htmlFor="add-post" className="btn btn-primary mini-button" onClick={setShowShadow} onDoubleClick={handlePostPopUp}>{title}</label>
                    <div className="profile-picture" id="my-profile-picture">
                        <img src={perfil} alt="perfil" onClick={handleProfilePopUp}/>
                    </div>
                </div>
            }

            {middle &&
                <form className={`add-post input-post ${shadow ? "boxshadow1" : ""}`}>
                    <div className="profile-picture" id="my-profile-picture">
                        <img src={perfil} alt="perfil" onClick={handleProfilePopUp}/>
                    </div>
                    <input type="text" ref={inputRef} placeholder={title} id="add-post"/>
                    <div className="btn btn-primary" id="form" onClick={handlePost}>postar</div>
                </form>
            }
        </>
    )
}