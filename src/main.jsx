import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.sass'
import './styles.sass'
import App from './App.jsx'
import { useState } from 'react'

import profile1 from "./images/img/profile-1.jpeg"
import tiger from "./images/img/tiger-2535888__480.jpg"

function RootApp(){
  const [name, setName] = useState("Beg Joker")
  const [nick, setNick] = useState("thebegjoker")

  const [profile, setProfile] = useState(profile1)
  const [picture, setPicture] = useState(tiger)
  const [story, setStory] = useState()
  const [fontSize, setFontSize] = useState("16px")
  const [hue, setHue] = useState("252")
  const [bgColor, setBgColor] = useState("bg1")

  return (
    <App 
    name={name} nick={nick} setName={setName} setNick={setNick}
    perfil={profile} setProfile={setProfile} picture={picture} setPicture={setPicture}
    story={story} setStory={setStory} fontSize={fontSize} setFontSize={setFontSize} 
    hue={hue} setHue={setHue} bgColor={bgColor} setBgColor={setBgColor} />
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RootApp />
  </StrictMode>,
)
