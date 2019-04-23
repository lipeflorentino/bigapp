// Importando o React
import React from 'react';
// Importando o React Dom para injetar o <APP /> na tag <div id="root"></div> do index.html
import ReactDOM from 'react-dom';
// Importando o components
import App from './App.js';
import Contato from './pages/contato/contato-page.js';
// Impotando react router
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// Importando o css
import './index.css';


// Renderizando o component APP (com seus sub componenets e etc) em <div id="root"></div> do index.html
ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/contato" component={Contato} />
        </Switch>
    </ BrowserRouter>
    , document.getElementById('root'));