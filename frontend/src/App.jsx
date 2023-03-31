import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/Header';
import StartPage from './pages/StartPage';
import './index.css';
import { Navbar } from './components/Navbar.jsx';


const App = () => {
  return (
    <>
      <Router>
        <div className="main-container">
          <h1>Hello from inside App</h1>
          <Header />
        
          <Routes>
            <Route exact path='/' element={<StartPage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element ={<Register />} />
            <Route path='/dashboard' element={<Dashboard />} />
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