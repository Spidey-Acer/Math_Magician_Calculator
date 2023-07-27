import React from 'react';
import { Link } from 'react-router-dom';

function NavigationMenu() {
  return (
    <nav>
      <h1>Math Magician</h1>
      <ul>
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/calculator">Calculator</Link>
        </li>
        <li>
          <Link to="/quote">Quote</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationMenu;
