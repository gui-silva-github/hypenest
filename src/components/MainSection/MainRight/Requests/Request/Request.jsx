import Info from "./Info/Info.jsx";
import Action from "./Action/Action.jsx";

export default function Request({accepted, deleted, onAccept, onDelete, perfil, name, friends, alertMsg, accept, dele}){
    return (
        <>
            {
            !deleted ?  
            <div className="request">
                <Info perfil={perfil} name={name} friends={friends} alertMsg={alertMsg} accepted={accepted} />
                {!accepted && (
                    <Action
                        accept={accept}
                        dele={dele}
                        onAccept={onAccept}
                        onDelete={onDelete}
                    />
                )}
            </div> : null
            }
        </>
    )
}