import React from 'react'
import '../css/Session.css'

import PortfolioImg from '../assets/img/Portfolio.png'


const Portfolio = () => {
  return(
    <div className="session__div">
        <div className="session__left">
          <h3 className="session__h3 session__h3">Portfolio</h3>
          <p className="session__p">Sites</p>
          <p className="session__p">Projetos Git</p>
        </div>
        <div className="session__right">
          <img className="session__img" src={PortfolioImg} alt="Portfolio" />
        </div>
        
      </div>
  )
}
export default Portfolio;