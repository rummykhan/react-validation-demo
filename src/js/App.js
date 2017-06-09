import React, { Component } from 'react';
import logo from '../css/logo.svg';
import '../css/App.css';
import Form from './Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>A Simple React Validator</h2>
        </div>
        <Form/>
      </div>
    );
  }
}

export default App;
