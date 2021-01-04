import React from 'react'
import '../css/Session.css'

import ContatoImg from '../assets/img/Contato.png'


const Contato = () => {
  return(
    <div className="session__div">
        <div className="session__left">
          <h3 className="session__h3 session__h3">Contato</h3>
          <p className="session__p">Whatsapp</p>
          <p className="session__p">E-mail</p>
        </div>
        <div className="session__right">
          <img className="session__img" src={ContatoImg} alt="Contato" />
        </div>
        
      </div>
  )
}
export default Contato;