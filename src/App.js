// Importando o React
import React, { Component } from 'react';
        
// Importando o Component Navbar
import Navbar from './component/navbar/navbar'        
// Importando o component Main
import Main from './main'


class App extends Component {
  render() {
    return (
      <div id="app-container">
        <Navbar />
        <Main />
      </div>
    );
  }
}

export default App;