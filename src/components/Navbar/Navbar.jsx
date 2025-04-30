import './Navbar.sass'

import Logo from './Logo/Logo.jsx'

import SearchBar from './SearchBar/SearchBar.jsx'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import AddPost from '../AddPost/AddPost.jsx'

export default function Navbar({handleProfilePopUp, perfil, setShowShadow, handlePostPopUp}) {
    return (
        <>
            <nav>
                <div className="container nav-container">
                    <Logo h3="Rede" logo="Social" />
                    <SearchBar icon={faSearch} placeholder="Procurar por pessoas" />
                    <AddPost setShowShadow={setShowShadow} title="Adicionar Post" perfil={perfil} handleProfilePopUp={handleProfilePopUp} handlePostPopUp={handlePostPopUp} />
                </div>
            </nav>
        </>
    )
}
