import React from 'react'
import './css/Styles.css'
import './css/Home.css'

import Business from '../assets/img/Business/Business_PNG.png'

const Home = () => {
  return(
      <div className="home__div">
        <div className="home__capa">
          <h3 className="pages__h3 home__h3">Seu site</h3>
          <p className="pages__p home__p">Mais Alcance<br />Resultados<br />On line</p>

        </div>
        <div>
          <img className="home__img" src={Business} alt="Business" />
        </div>
        
      </div>
  )
}
export default Home;