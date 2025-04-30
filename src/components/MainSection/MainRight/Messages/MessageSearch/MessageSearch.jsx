import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function MessageSearch({icon, placeholder}){
    return (
        <div className="message-search-bar">
            <FontAwesomeIcon icon={icon} />
            <input type="search" placeholder={placeholder} id="message-search"/>
        </div>
    )
}