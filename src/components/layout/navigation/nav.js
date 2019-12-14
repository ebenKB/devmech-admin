import React from 'react'
import {Link} from 'react-router-dom';

import './nav.scss';

const nav = () => {
  return (
    <nav>
      <ul className="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
        <li>
          <Link to="/subcategory">Sub Categories</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/company">Companies</Link>
        </li>
        <li>Users</li>
      </ul>
    </nav>
  )
}

export default nav
