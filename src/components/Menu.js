import React from 'react'
import { NavLink } from "react-router-dom";
import '../css/Menu.css'
class Menu extends React.Component{
  render(){
    return(
      <>
        
          <NavLink className="Menu__link" to="/" exact activeStyle={{ color: 'yellow'}}>Home</NavLink>
          <NavLink className="Menu__link" to="/servicos" exact activeStyle={{ color: 'yellow'}}>Serviços</NavLink>
          <NavLink className="Menu__link" to="/tecnologias" exact activeStyle={{ color: 'yellow'}}>Tecnologias</NavLink>
          <NavLink className="Menu__link" to="/quemsou" exact activeStyle={{ color: 'yellow'}}>Quem sou</NavLink>
          <NavLink className="Menu__link" to="/portfolio" exact activeStyle={{ color: 'yellow'}}>Portfólio</NavLink>
          <NavLink className="Menu__link" to="/contato" exact activeStyle={{ color: 'yellow'}}>Contato</NavLink>
        
      </>
    )
  }
}

export default Menu;