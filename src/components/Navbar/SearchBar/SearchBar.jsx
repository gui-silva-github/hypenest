import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SearchBar({icon, placeholder}){
    return(
        <>
            <div className="search-bar">
                <FontAwesomeIcon icon={icon} />
                <input type="search" placeholder={placeholder}/>
            </div>
        </>
    )
}