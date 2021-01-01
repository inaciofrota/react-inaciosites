import React from 'react'
import './css/Session.css'

import QuemImg from '../assets/img/Quem.png'


const Quemsou = () => {
  return(
    <div className="session__div">
        <div className="session__left">
          <h3 className="session__h3 session__h3">Quem Sou</h3>
          <p className="session__p">Sou um cara legal</p>

        </div>
        <div className="session__right">
          <img className="session__img" src={QuemImg} alt="Quem sou" />
        </div>
        
      </div>
  )
}
export default Quemsou;