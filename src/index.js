// Importando o React
import React from 'react';
// Importando o React Dom para injetar o <APP /> na tag <div id="root"></div> do index.html
import ReactDOM from 'react-dom';
// Importando o components
import App from './App.js';
import Sites from './pages/sites/sites-page.js';
import Sistemas from './pages/sistemas/sistemas-page.js';
import Negocios from './pages/negocios/negocios-page.js';
import Contato from './pages/contato/contato-page.js';
// Impotando react router
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// Importando o css
import './index.css';


// Renderizando o component APP (com seus sub componenets e etc) em <div id="root"></div> do index.html
ReactDOM.render(
    <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/sites" component={Sites} />
            <Route path="/sistemas" component={Sistemas} />
            <Route path="/negocios" component={Negocios} />
            <Route path="/contato" component={Contato} />
        </Switch>
    </ BrowserRouter>
    , document.getElementById('root'));