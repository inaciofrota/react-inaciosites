import React from "react";
import { Switch, Route } from 'react-router-dom';
import Header from './Header'
import Home from './Home'
import Servicos from './Servicos'
import Tecnologias from './Tecnologias'
import Quemsou from './Quemsou'
import Portfolio from './Portfolio'
import Contato from './Contato'
import Menu from './Menu'

import './css/Styles.css'
import Rodape from "./Rodape";

export default function Layout() {
  return (
    <div>
      <main className="app__content">
        <div className="app__header">
          <Header />
        </div>
        <div className="app__menu">
          <Menu />
        </div>
        <div className="app__pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/servicos" component={Servicos} />
            <Route path="/tecnologias" component={Tecnologias} />
            <Route path="/quemsou" component={Quemsou} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contato" component={Contato} />
          </Switch>
        </div>
        <div className="app__rodape">
          <Rodape />
        </div>
      </main>
    </div>
  );
}