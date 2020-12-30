import React from 'react'
import { Link } from 'react-dom'



class Navegacao extends React.Component{
  render(){
    return(
      <div>
        
        <Link to="/">Home</Link>
        <Link to="/servicos">Serviços</Link>
        <Link to="/tecnologias">Tecnologias</Link>
        <Link to="/quemsou">Quem sou</Link>
        <Link to="/portfolio">Portfólio</Link>
        <Link to="/contato">Contato</Link>
      </div>
    )
  }
}

export default Navegacao;