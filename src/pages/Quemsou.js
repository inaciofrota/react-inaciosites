import React from 'react'
import '../css/Session.css'

import QuemImg from '../assets/img/Quem.png'


const Quemsou = () => {
  return(
    <div className="session__div">
        <div className="session__left">
          <h3 className="session__h3">Quem Sou</h3>
          <p className="session__p">Sou filho de Santarém -PA, descendente de nordestinos desbravadores da amazônia. Tenho sangue de boiadeiros, agrigultores e soldados da borracha.</p>
		      <p className="session__p">Minha família se estabeleceu na cidade de Manaus, onde obtive educação escolar, técnica e acadêmica. Criei gosto pela literatura e filosofia. Em minha adolescência fiz vários cursos técnicos onde criei apreço pelo raciocínio lógico, programação e tecnologia. Por fim, na academia, fiz o curso de Licenciatura em matemática.</p>
		      <p className="session__p">Tive a experiência de dar aulas de matemática para o ensino fundamental na região do rio Arapiuns-PA.</p>
		      <p className="session__p">Agora, por fim, encontrei-me na programação novamente e não canso de aumentar meus conhecimentos na área diariamente.</p>
        </div>
        <div className="session__right">
          <img className="session__img" src={QuemImg} alt="Quem sou" />
        </div>
        
      </div>
  )
}
export default Quemsou;