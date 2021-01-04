import React from 'react'
import '../css/Session.css'

import ServicosImg from '../assets/img/Servicos.png'


const Servicos = () => {
  return(
    <div className="session__div">
        <div className="session__left">
          <h3 className="session__h3 session__h3">Serviços</h3>
          <p className="session__p">Sites profissionais<br />
          Aplicações Web<br />
          Blogs<br />
          E-commerce</p>
        </div>
        <div className="session__right">
          <img className="session__img" src={ServicosImg} alt="Servicos" />
        </div>
        
      </div>
  )
}
export default Servicos;