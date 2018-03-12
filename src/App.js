import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ComponentOne from './components/ComponentOne'
import ComponentTwo from './components/ComponentTwo'

//REDUX IMPORTS:
//To make this Component work, we need to connect it with our top level redux store.


class App extends Component {
  
  
  
  render() {
 
    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ComponentOne />
        <ComponentTwo />
      </div>
    );
  }
}

export default App
