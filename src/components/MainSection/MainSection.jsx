import './MainSection.sass';

import MainLeft from './MainLeft/MainLeft';
import MainMiddle from './MainMiddle/MainMiddle';
import MainRight from './MainRight/MainRight';

export default function MainSection({story, showStory, showMessageShadow, setShowMessageShadow, shadow, handleProfilePopUp, name, nick, perfil, handlePostPopUp, handleColorPopUp, bgColor}) {
    return (
        <main>
            <div className="container main-container">
                <MainLeft setShowMessageShadow={setShowMessageShadow} name={name} nick={nick} perfil={perfil} handleProfilePopUp={handleProfilePopUp} handlePostPopUp={handlePostPopUp} handleColorPopUp={handleColorPopUp} bgColor={bgColor}/>
                <MainMiddle story={story} showStory={showStory} shadow={shadow} name={name} perfil={perfil} handleProfilePopUp={handleProfilePopUp}/>
                <MainRight showMessageShadow={showMessageShadow} />
            </div>
        </main>
    )
}