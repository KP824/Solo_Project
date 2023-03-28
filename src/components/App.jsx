import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Login } from './Login.jsx';
import { Navbar } from './Navbar.jsx';


class App extends Component {
  render() {
    return (
      <Router>
          <Navbar />
       
      </Router>
    )
  }
};


export default App;
