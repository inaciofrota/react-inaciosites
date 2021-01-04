import React from 'react';
import { Route } from 'react-router-dom'
// Pages
import Home from './pages/Home'
import Servicos from './pages/Servicos'
import Tecnologias from './pages/Tecnologias'
import Quemsou from './pages/Quemsou'
import Portfolio from './pages/Portfolio'
import Contato from './pages/Contato'
// Componetes
// import ScrollEvents from './components/ScrollEvents'
import Header from './components/Header'
import Menu from './components/Menu'
import Rodape from './components/Rodape'
// styles
import './css/Styles.css'

// Rotes
const routes = [
    {path: '/', name: 'Home', Component: Home },
    {path: '/servicos', name: 'Servicos', Component: Servicos },
    {path: '/tecnologias', name: 'Tecnologias', Component: Tecnologias },
    {path: '/quemsou', name: 'Quemsou', Component: Quemsou },
    {path: '/portfolio', name: 'Portfolio', Component: Portfolio },
    {path: '/contato', name: 'Contato', Component: Contato }
]

function App() {
    
    return (
        <>
            
            {/* <ScrollEvents /> */}

            <main className="app__content">
                <div className="app__header">
                    <Header />
                </div>
                <div className="app__menu">
                    <Menu />
                </div>
                <div className="app__pages">
                  {routes.map(({ path, Component }) => (
                  
                      <Route key='name' path={path} exact>
                        <Component />
                      </Route>
                    
                  ))}
                </div>
               <div className="app__footer">
                <Rodape />
               </div>
                
               
            </main>
            

        </>
    )
}
export default App