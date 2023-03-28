import React from 'react';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
//import { Login } from './components/Login.jsx';
import { Navbar } from './components/Navbar.jsx';


const App = () => {
  return (
    <div>
    <h1>Hello. Inside of App Component</h1>
      <Router>
        <Navbar />
      
      </Router>
    </div>
    
  )
};

export default App;
