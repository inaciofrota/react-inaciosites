import React from 'react'
import './css/Styles.css'
import './css/Servicos.css'

import ServicosImg from '../assets/img/Online-shopping/Servicos.png'


const Servicos = () => {
  return(
    <div className="servicos__div">
        <div className="servicos__capa">
          <h3 className="servicos__h3 pages__h3">Serviços</h3>
          <p className="pages__p">Sites profissionais<br />
          Blogs<br />
          E-commerce</p>

        </div>
        <div>
          <img className="servicos__img" src={ServicosImg} alt="Servicos" />
        </div>
        
      </div>
  )
}
export default Servicos;