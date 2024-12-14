import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Trip Planner</h1>
      <ul>
        <li><Link to="/LoginRegister">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
