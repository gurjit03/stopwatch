import React,{ Component } from 'react';
import { Link } from 'react-router';

const Navigation = () => {
  return(
    <nav className="main-navigation">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </nav>
  )
}

export default Navigation;
