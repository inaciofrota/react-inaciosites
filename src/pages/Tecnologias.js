import React from 'react'
import TecnologiasImg from '../assets/img/Tecnologias.png'
import '../css/Session.css'

const Tecnologias = () => {
  return(
      <div className="session__div">
        <div className="session__left">
          <h3 className="session__h3 session__h3">Tecnologias</h3>
          <p className="session__p">
            Javascript<br />
            React JS<br />
            Node JS <br />
            MongoDB <br />
          </p>

        </div>
        <div className="session__right">
          <img className="session__img" src={TecnologiasImg} alt="Servicos" />
        </div>
        
      </div>
  )
}
export default Tecnologias;