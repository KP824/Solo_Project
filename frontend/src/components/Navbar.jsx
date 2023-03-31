import React from 'react';
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'; // react icons from font awesome
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../features/authService';
import { Link, useNavigate } from 'react-router-dom';



function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <h3> Inside of Navbar</h3>
      {/* <Login />
      <Register /> */
      
      <ul>
        {user ? (
          <li>
            <Link to='/login'>
              <FaSignInAlt /> Login
            </Link>
          </li>
        ) : (
          <>
            <li>
            <Link to='/login'>
              <FaSignInAlt /> Login
            </Link>
          </li>

        <li>
          <Link to='/register'>
            <FaUser /> Register
          </Link>
        </li>

        </>) }
        <li>Home Page</li>
        <li>Locations</li>
        <li>Operations</li>
        <li>Employees</li>

      </ul>
      
      }
    </div>
  );
};

export default Navbar