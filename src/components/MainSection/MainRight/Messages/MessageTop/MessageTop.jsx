import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function MessageTop({title, icon}){
    return (
        <div className="message-top">
            <h4>{title}</h4> <FontAwesomeIcon style={{ height: '1.5rem' }} icon={icon} />
        </div>
    )
}