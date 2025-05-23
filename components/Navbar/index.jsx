import React from 'react';

import './Navbar.css';
import { Link } from 'react-router';

function Navbar() {
  return (
    <div className="navbar">
      <div>
        <Link to="/">Navbar</Link>
      </div>
      <div>
        <Link to={'/help'}>Help</Link>
      </div>
    </div>
  );
}

export default Navbar;
