import React, { useState , useEffect } from "react";
import { TimelineLite, Power3 } from 'gsap'



import './css/Session.css'

import HomeImg from '../assets/img/Home.png'

const Home = () => {

  return(
      <div className="session__div">
        <div className="session__left">
          <h3 className="session__h3">Seu site</h3>
          <p className="session__p">Mais Alcance<br />Resultados<br />On line</p>

        </div>
        <div className="session_right">
          <img className="session__img" src={HomeImg} alt="Home" />
        </div>
        
      </div>
  )
}
export default Home;