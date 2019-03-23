// Importando o React
import React, { Component } from 'react';
        
// Importando o Component Navbar
import Menu from './component/navbar/navbar';        
// Importando o component Main
import Main from './main';
// Importando a barra lateral
import SideNav from './component/sidenav/sidenav';


class App extends Component {
  render() {
    return (
      <div id="app-container">
        <Menu />
        <SideNav />
        <Main />
      </div>
    );
  }
}

export default App;