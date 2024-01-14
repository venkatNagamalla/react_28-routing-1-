// Write your JS code here

import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class Header extends Component {
  render() {
    return (
      <nav className="nav-container">
        <div className="wave-logo-container">
          <img
            className="wave-image"
            src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
            alt="wave"
          />
          <p className="nav-items">Wave</p>
        </div>
        <ul className="items-container">
          <li className="nav-items">
            <Link className="link-items" to="/">
              Home
            </Link>
          </li>
          <li className="nav-items">
            <Link className="link-items" to="/about">
              About
            </Link>
          </li>
          <li className="nav-items">
            <Link className="link-items" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Header
