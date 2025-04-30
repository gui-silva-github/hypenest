import './App.sass'

import { useEffect, useState } from 'react'

import Navbar from './components/Navbar/Navbar'
import MainSection from './components/MainSection/MainSection'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faClose } from '@fortawesome/free-solid-svg-icons'

function App({name, setName, nick, setNick, perfil, setProfile, picture, setPicture, story, setStory, fontSize, setFontSize, hue, setHue, bgColor, setBgColor}) {

  const [popUp, setPopUp] = useState(false)
  const [postUp, setPostUp] = useState(false)
  const [colorUp, setColorUp] = useState(false)
  const [showShadow, setShowShadow] = useState(false)
  const [showMessageShadow, setShowMessageShadow] = useState(false)

  useEffect(()=>{
    if(showShadow){
      const timer = setTimeout(() => {
        setShowShadow(false)
      }, 3000);

      return ()=> clearTimeout(timer)
    }
  }, [showShadow])

  useEffect(()=>{
    if(showMessageShadow){
      const timer = setTimeout(() => {
        setShowMessageShadow(false)
      }, 3000);

      return ()=> clearTimeout(timer)
    }
  }, [showMessageShadow])

  useEffect(()=>{
    document.documentElement.style.fontSize = fontSize
  }, [fontSize])

  useEffect(()=>{
    document.documentElement.style.setProperty('--primary-color-hue', hue)
  }, [hue])

  useEffect(()=>{
    if (bgColor === 'bg2') {
      document.documentElement.style.setProperty('--color-dark-light-theme', '95%')
      document.documentElement.style.setProperty('--color-light-light-theme', '5%')
      document.documentElement.style.setProperty('--color-white-light-theme', '10%')
    } else {
      document.documentElement.style.setProperty('--color-dark-light-theme', '17%')
      document.documentElement.style.setProperty('--color-light-light-theme', '95%')
      document.documentElement.style.setProperty('--color-white-light-theme', '100%')
    }
  }, [bgColor])

  function handleProfilePopUp(){
    setPopUp((prevPopUp) => !prevPopUp)
  }

  function handlePostPopUp(){
    setPostUp((prevPostUp) => !prevPostUp)
  }

  function handleColorPopUp(){
    setColorUp((prevColorUp) => !prevColorUp)
  }

  function handleShadow(){
    setShowShadow((prevShadow) => !prevShadow)
  }

  function handleProfileChange(e){
    const file = e.target.files[0]
    if(file){
      const imageUrl = URL.createObjectURL(file)
      setProfile(imageUrl)
    }
  }

  function handlePostChange(e){
    const file = e.target.files[0]
    if(file){
      const imageUrl = URL.createObjectURL(file)
      setPicture(imageUrl)
    }
  }

  function handleStoryChange(e){
    const file = e.target.files[0]
    if(file){
      const imageUrl = URL.createObjectURL(file)
      setStory(imageUrl)
    }
  }

  let contentProfile = popUp ? <div className="popup profile-popup" style={{display: popUp ? "flex" : "none"}}>
                            <div>
                                <div className="popup-box profile-popup-box">
                                    <h1>{name}</h1>
                                    <input type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
                                    <p>@{nick}</p>
                                    <input type="text" value={nick} onChange={(e)=> setNick(e.target.value)}/>
                                    <div id="my-profile-picture">
                                        <img src={perfil} alt="perfil"/>
                                    </div>
                                    <label htmlFor="profile-upload" className="btn btn-primary btn-lg">Atualizar Foto de Perfil</label>
                                    <input type="file" accept="image/jpg, image/png, image/jpeg" id="profile-upload" onChange={handleProfileChange}/>
                                    <button onClick={handleProfilePopUp} className="btn btn-primary btn-lg">Sair</button>
                                </div>
                                <span className="close" onClick={handleProfilePopUp}><FontAwesomeIcon style={{ color: bgColor === 'bg2' ? 'white' : ''}} icon={faClose}/></span>
                            </div>
                        </div> : null
  
  let contentPost = postUp ? <div className="popup add-post-popup" style={{display: postUp ? "flex" : "none"}}>
                      <div>
                          <form className="popup-box add-post-popup">
                              <h1>Adicionar Novo Post</h1>
                              <div className="row post-title">
                                  <label htmlFor="">Título</label>
                                  <input type="text" placeholder="O que tem em mente?" id="add-post"/>
                              </div>
                              <div className="row post-img">
                                  <img src={picture} alt="post" id="postImg" />
                                  <label htmlFor="feed-pic-upload" className="feed-upload-button">
                                      <span><FontAwesomeIcon icon={faAdd}/></span>
                                      Carregar Foto
                                  </label>
                                  <input type="file" accept="image/jpg, image/png, image/jpeg" id="feed-pic-upload" onChange={handlePostChange}/>
                                  <input type="submit" className="btn btn-primary btn-lg" value="Adicionar Post"/>
                              </div>
                          </form>
                          <span className="close" onClick={handlePostPopUp}><FontAwesomeIcon style={{ color: bgColor === 'bg2' ? 'white' : ''}} icon={faClose}/></span>
                      </div>
                  </div> : null

    let contentColor = colorUp ? <div className="popup theme-customize" style={{display: colorUp ? "flex" : "none"}}>
                                    <div>
                                        <div className="popup-box theme-customize-popup-box">
                                            <h1>Customize o seu Tema</h1>
                                            <p>Gerencie o Tamanho da Letra, Cor e Cor de Fundo</p>
                                            <div className="font-size">
                                                <h4>Tamanho da Letra</h4>
                                                <div>
                                                    <div>
                                                        <h6>Aa</h6>
                                                    </div>
                                                    <div className="choose-size">
                                                        <span className={`font-size-1 ${fontSize === '10px' ? 'active' : ''}`} onClick={()=> setFontSize("10px")}></span>
                                                        <span className={`font-size-2 ${fontSize === '13px' ? 'active' : ''}`} onClick={()=> setFontSize("13px")}></span>
                                                        <span className={`font-size-3 ${fontSize === '16px' ? 'active' : ''}`} onClick={()=> setFontSize("16px")}></span>
                                                        <span className={`font-size-4 ${fontSize === '19px' ? 'active' : ''}`} onClick={()=> setFontSize("19px")}></span>
                                                        <span className={`font-size-5 ${fontSize === '22px' ? 'active' : ''}`} onClick={()=> setFontSize("22px")}></span>
                                                    </div>
                                                    <div>
                                                        <h3>Aa</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="colors">
                                                <h4>Cor</h4>
                                                <div className="choose-color">
                                                    <span className={`color-1 ${hue === '252' ? 'active' : ''}`} onClick={()=> setHue("252")}></span>
                                                    <span className={`color-2 ${hue === '52' ? 'active' : ''}`} onClick={()=> setHue("52")}></span>
                                                    <span className={`color-3 ${hue === '352' ? 'active' : ''}`} onClick={()=> setHue("352")}></span>
                                                    <span className={`color-4 ${hue === '152' ? 'active' : ''}`} onClick={()=> setHue("152")}></span>
                                                    <span className={`color-5 ${hue === '202' ? 'active' : ''}`} onClick={()=> setHue("202")}></span>
                                                </div>
                                            </div>
                                            <div className="background">
                                                <h4>Cor de Fundo</h4>
                                                <div className="choose-bg">
                                                    <div className={`bg1 ${bgColor === 'bg1' ? 'active' : ''}`} onClick={()=> setBgColor("bg1")}>
                                                        <span></span>
                                                        <h5>Claro</h5>
                                                    </div>
                                                    <div className={`bg2 ${bgColor === 'bg2' ? 'active' : ''}`} onClick={()=> setBgColor("bg2")}>
                                                        <span></span>
                                                        <h5>Escuro</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="close" onClick={handleColorPopUp}><FontAwesomeIcon style={{ color: bgColor === 'bg2' ? 'white' : ''}} icon={faClose}/></span>
                                    </div>
                                  </div> : null

  return (
    <>
      {
       contentProfile
      }
      {
        contentPost
      }
      {
        contentColor
      }
      <Navbar setShowShadow={handleShadow} handleProfilePopUp={handleProfilePopUp} perfil={perfil} handlePostPopUp={handlePostPopUp} />
      <MainSection story={story} showStory={handleStoryChange} showMessageShadow={showMessageShadow} setShowMessageShadow={setShowMessageShadow} shadow={showShadow} name={name} nick={nick} perfil={perfil} handleProfilePopUp={handleProfilePopUp} handlePostPopUp={handlePostPopUp} handleColorPopUp={handleColorPopUp} bgColor={bgColor} />
    </>
  )

}

export default App
