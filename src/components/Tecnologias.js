import React from 'react'
import TecnologiasImg from '../assets/img/Tecnologias.png'
const Tecnologias = () => {
  return(
      <div className="session__div">
        <div className="session__left">
          <h3 className="session__h3 session__h3">Tecnologias</h3>
          <p className="session__p">Html- Css - Javascript)<br />
          React JS<br />
          </p>

        </div>
        <div className="session__right">
          <img className="session__img" src={TecnologiasImg} alt="Servicos" />
        </div>
        
      </div>
  )
}
export default Tecnologias;