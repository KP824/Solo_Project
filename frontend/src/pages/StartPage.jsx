import React from 'react';
import Login from './Login';
import Register from './Register';

function StartPage() {
  return (
    <>
      <div className="startpage-cont">
        <div className="login-cont">
          <Login />
        </div>
        <div className="register-cont">
          <Register />
        </div>
      </div>
    </>
  )
}

export default StartPage;