import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Stories({story, showStory, perfil, icon, title, handleProfilePopUp}) {

    return (
        <>
            <div className="stories">
                <div className="stories-wrapper swiper">
                    <div className="swiper-wrapper">
                            <div className="story swiper-slide">
                                <img src={story} alt="stories"/>
                                <div className="profile-picture my-profile-picture" id="my-profile-picture">
                                    <img src={perfil} alt="perfil" onClick={handleProfilePopUp}/>
                                </div>
                                {!story && (
                                    <label htmlFor="add-story" className="add-story">
                                        <FontAwesomeIcon className='iconAwesome' icon={icon} id="upload" />
                                        <p>{title}<br/> story</p>
                                    </label>
                                )}
                                <input type="file" onChange={showStory} accept="image/jpg, image/png, image/jpeg" name="" id="add-story"/>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}