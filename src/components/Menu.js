import React from 'react';
import { Link, withRouter } from "react-router-dom";

import './css/Styles.css'

function Menu() {
  const items = [{
    path: '/',
    text: 'Home'
}, {
    path: '/servicos',
    text: 'Serviços'
}, {
    path: '/tecnologias',
    text: 'Tecnologias'
}, {
  path: '/quemsou',
  text: 'Quem sou'
}, {
  path: '/portfolio',
  text: 'Portfolio'
}, {
  path: '/contato',
  text: 'Contato'
}
];
    return (
      <ul className="menu__ul">
      {items.map(item => (
        <li key={item.path} className="menu__li">
          <Link className="menu__a" to={item.path}>{item.text}</Link>
        </li>
      ))}
    </ul>
    );
}
export default withRouter(Menu);