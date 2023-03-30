import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/Header';
import { Navbar } from './components/Navbar.jsx';


const App = () => {
  return (
    <>
      <Router>
        <div className="container">
          <h1>Hello from inside App</h1>
          <Header />
        
          <Routes>
            <Route exact path='/' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element ={<Register />} />
            <Route exact path="*" component={() => <Redirect to={"/"} />} />
          </Routes>
        </div>
      </Router>
    </>
  )
};

export default App;

 {/* <Router>
        <Navbar />
      
      </Router> */}