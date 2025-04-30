export default function MessageCategories({active, geral, requests, number}){
    return (
        <div className="message-categories">
            <h6 className="active">{active}</h6>
            <h6>{geral}</h6>
            <h6 className="message-request">{requests} ({number})</h6>
        </div>
    )
}