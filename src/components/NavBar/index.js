import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return ( 
        <nav>
        <h1>Barefoot Nomad</h1>
        <ul>
        <Link to="/" >
          <li>Home</li>
          </Link>
          <Link to="/login">
          <li>Login</li>
          </Link>
      </ul>      
      </nav>
     );
}
 
export default NavBar;