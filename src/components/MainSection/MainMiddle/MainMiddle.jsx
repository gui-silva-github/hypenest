import './MainMiddle.sass'

import { faAdd } from "@fortawesome/free-solid-svg-icons"

import Stories from './Stories/Stories.jsx'

import AddPost from '../../AddPost/AddPost.jsx'

import Feeds from './Feeds/Feeds.jsx'
import Feed from './Feeds/Feed/Feed.jsx'

import s1 from "../../../images/img/s1.jpg"
import s2 from "../../../images/img/s2.jpg"
import s3 from "../../../images/img/s3.jpg"
import s4 from "../../../images/img/s4.jpg"
import s6 from "../../../images/img/s6.jpg"
import s7 from "../../../images/img/s7.jpg"
import s8 from "../../../images/img/s8 (1).png"
import s9 from "../../../images/img/s9 (1).png"
import s10 from "../../../images/img/s9 (2).png"
import n1 from "../../../images/img/n1.jpg"
import n2 from "../../../images/img/n2.png"
import n3 from "../../../images/img/n3.png"
import n4 from "../../../images/img/n4.png"
import n5 from "../../../images/img/n5.png"
import m1 from "../../../images/img/m1.jpg"
import m2 from "../../../images/img/m2.png"
import m3 from "../../../images/img/m3.jpg"
import m4 from "../../../images/img/m4.png"
import m5 from "../../../images/img/m5.jpg"
import m7 from "../../../images/img/m (7).png"
import st1 from "../../../images/img/st1.jpg"
import st2 from "../../../images/img/st2.jpeg"
import st3 from "../../../images/img/st3.jpg"
import st4 from "../../../images/img/st4.jpg"
import st5 from "../../../images/img/st5.jpg"
import st6 from "../../../images/img/st6.jpg"
import st9 from "../../../images/img/st9.png"
import f1 from "../../../images/img/f1.jpg"
import f2 from "../../../images/img/f2.jpg"
import f3 from "../../../images/img/f3.jpg"
import f4 from "../../../images/img/f4.jpg"
import feed from "../../../images/img/Fedd0.jpg"
import feed1 from "../../../images/img/feed1.jpeg"
import feed2 from "../../../images/img/feed2.jpg"
import feed3 from "../../../images/img/feed3.png"
import feed4 from "../../../images/img/feed4.jpg"
import feed5 from "../../../images/img/feed5.jpeg"
import feed6 from "../../../images/img/feed6.png"
import feed7 from "../../../images/img/feed7.jpg"
import feed8 from "../../../images/img/feed8.jpg"
import tiger from "../../../images/img/tiger-2535888__480.jpg"

export default function MainMiddle({story, showStory, shadow, handleProfilePopUp, name, perfil}) {
    return (
        <>
            <div className="main-middle">

                <div className="middle-container">
                    <Stories story={story} showStory={showStory} handleProfilePopUp={handleProfilePopUp} perfil={perfil} icon={faAdd} title="Adicione ao seu"/>

                    <AddPost shadow={shadow} middle={true} title="O que tem em mente?" perfil={perfil} handleProfilePopUp={handleProfilePopUp} />

                    <Feeds>
                        <Feed
                        handleProfilePopUp={handleProfilePopUp} 
                        mine={true} img={feed} perfil={perfil} 
                        name={name} place="BANGLADESH" date="AGORA POUCO" 
                        like1={n1} like2={n5} like3={m4}
                        title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eaque saepe ducimus exercitationem nostrum doloribus."
                        tag="moments" liked="Rakib Hassan" and="1 comentário de outro"
                        commenter="Maria Mim" comment="Lorem ipsum dolor sit amet consectetur adipisicing."
                        />

                        <Feed 
                        img={feed1} perfil={s9} 
                        name="Irfan Habib" place="PAKISTAN" date="3 DIAS ATRÁS" 
                        like1={n2} like2={n3} like3={n4}
                        title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eaque saepe ducimus exercitationem nostrum doloribus."
                        tag="lifestyle" liked="Rakib Hassan" and="1 comentário de outro"
                        commenter="Lana White" comment="Lorem ipsum dolor sit amet consectetur adipisicing."
                        />
                        
                        <Feed
                        img={feed8} perfil={st9}
                        name="Khage Humo" place="PARIS" date="5 DIAS ATRÁS"
                        like1={st6} like2={st5} like3={st1}
                        title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eaque saepe ducimus exercitationem nostrum doloribus."
                        tag="gym" liked="Charles Endrio" and="100 comentários de outros"
                        commenter="Luiz Garnado" comment="Lorem ipsum dolor sit amet consectetur adipisicing."
                        />
                        
                        <Feed
                        img={feed2} perfil={s8}
                        name="Glira Ema" place="RUSSIA" date="1 HORA ATRÁS"
                        like1={st9} like2={s3} like3={s6}
                        title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eaque saepe ducimus exercitationem nostrum doloribus."
                        tag="nature" liked="David Mark" and="77 comentários de outros"
                        commenter="Jia Glisa" comment="Lorem ipsum dolor sit amet consectetur adipisicing."
                        />
                        
                        <Feed
                        perfil={s4} 
                        content={
                            <>
                                <h2>Hello World, I'm Lisa <br/> from Japan</h2> 
                            </> 
                        }   
                        name="Alexa Lisa" place="JAPÃO" date="2 DIAS ATRÁS"
                        like1={n3} like2={f4} like3={f2}
                        title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eaque saepe ducimus exercitationem nostrum doloribus."
                        tag="meet" liked="Yeang Hoo" and="23 comentários de outros"
                        commenter="Kim Parvez" comment="Lorem ipsum dolor sit amet consectetur adipisicing."
                        />

                        <Feed
                        img={feed4} perfil={s10}
                        name="Emaliy Elfiey" place="LONDRES" date="4 DIAS ATRÁS"
                        like1={s8} like2={s9} like3={s7}
                        title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eaque saepe ducimus exercitationem nostrum doloribus."
                        tag="beautiful" liked="Maria Bron" and="140 comentários de outros"
                        commenter="Jerome Larvc" comment="Lorem ipsum dolor sit amet consectetur adipisicing."
                        />

                        <Feed
                        img={tiger} perfil={m3}
                        name="Vertasi Kulop" place="MÉXICO" date="18 HORAS ATRÁS"
                        like1={m4} like2={m5} like3={n2}
                        title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eaque saepe ducimus exercitationem nostrum doloribus."
                        tag="brave" liked="Kahu Mamu" and="90 comentários de outros"
                        commenter="Edgar Loai" comment="Lorem ipsum dolor sit amet consectetur adipisicing."
                        />

                        <Feed
                        img={feed7} perfil={n1}
                        name="Kimberly Clinton" place="NOVA IORQUE" date="1 DIA ATRÁS"
                        like1={st3} like2={st2} like3={st4}
                        title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eaque saepe ducimus exercitationem nostrum doloribus."
                        tag="important" liked="Agatha Vincent" and="98 comentários de outros"
                        commenter="Val Hassum" comment="Lorem ipsum dolor sit amet consectetur adipisicing."
                        />

                        <Feed
                        img={feed6} perfil={f4}
                        name="Humelia Nabar" place="ESPANHA" date="3 DIAS ATRÁS"
                        like1={st5} like2={s8} like3={s6}
                        title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eaque saepe ducimus exercitationem nostrum doloribus."
                        tag="filha" liked="Lean Jumi" and="103 comentários de outros"
                        commenter="Barnu Lili" comment="Lorem ipsum dolor sit amet consectetur adipisicing."
                        />

                        <Feed
                        img={feed5} perfil={s2}
                        name="Elian Mume" place="GRÉCIA" date="2 DIAS ATRÁS"
                        like1={s3} like2={s1} like3={m1}
                        title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eaque saepe ducimus exercitationem nostrum doloribus."
                        tag="aniversário" liked="Kalik Milop" and="145 comentários de outros"
                        commenter="Parpu Habib" comment="Lorem ipsum dolor sit amet consectetur adipisicing."
                        />

                        <Feed
                        img={feed3} perfil={m2}
                        name="Batist Elumena" place="ITÁLIA" date="10 HORAS ATRÁS"
                        like1={f1} like2={f2} like3={f3}
                        title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eaque saepe ducimus exercitationem nostrum doloribus."
                        tag="objetivo" liked="Lopus Retalo" and="49 comentários de outros"
                        commenter="Marive Kaju" comment="Lorem ipsum dolor sit amet consectetur adipisicing."
                        />
                    </Feeds>
                </div>
            </div>
        </>
    )
}