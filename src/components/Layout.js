import React, { useState } from "react";
// modulos de estrutura
import Header from './Header'

import Rodape from "./Rodape";
// modulos de sessão
import Home from './Home'
import Servicos from './Servicos'
import Tecnologias from './Tecnologias'
import Quemsou from './Quemsou'
import Portfolio from './Portfolio'
import Contato from './Contato'
// style
import './css/Styles.css'


export default function Layout() {
  const [page, setPage] = useState(<Home />)

  return (
    <div>
      <main className="app__content">
        <div className="app__header">
          <Header />
        </div>
        <div className="app__menu">
          <button onClick={() => setPage(<Home />)}>Home</button>
          <button onClick={() => setPage(<Servicos />)}>Serviços</button>
          <button onClick={() => setPage(<Tecnologias />)}>Tecnologias</button>
          <button onClick={() => setPage(<Quemsou />)}>Quem sou</button>
          <button onClick={() => setPage(<Portfolio />)}>Portfolio</button>
          <button onClick={() => setPage(<Contato />)}>Contato</button>
        </div>
        <div className="app__pages">
          {page}
        </div>
        <div className="app__rodape">
          <Rodape />
        </div>
      </main>
    </div>
  );
}