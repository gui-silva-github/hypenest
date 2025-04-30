export default function Info({accept, dele, onAccept, onDelete}){
    return (
        <div className="action">
            <div className="btn btn-primary" id="accept" onClick={onAccept}>
                {accept}
            </div>
            <div className="btn btn-danger" id="delete" onClick={onDelete}>
                {dele}
            </div>
        </div>
    )
}