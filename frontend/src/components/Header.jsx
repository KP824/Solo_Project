import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import ImageComponent from './ImageComponent';

import img from "../../../dist/images/mflowlogo.jpg"



function Header() {
  

  return (
    <header className='header-container'>
      <div className='logo'>
      <h1>Main Logo Here</h1>
        <Link to='/'>
          <img src={img} />
          {/* <ImageComponent url={logo} /> */}
          
        </Link>
      </div>
      
    </header>
  )
}

export default Header