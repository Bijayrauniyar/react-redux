import React, { Component } from 'react';
import './App.css';
import {Provider } from 'react-redux';
import store from './store'
import Home from './components/home'


class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        React Redux App
        <Home />
      </div>
      </Provider>
      
    );
  }
}

export default App;

