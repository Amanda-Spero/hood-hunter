import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">
      Pupster
    </Link>
    <div>
      <ul className="navbar-nav">
        <li
          className={
            window.location.pathname === "/" ||
            window.location.pathname === "/MainSearch"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/Login"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/discover" className="nav-link">
            Login
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/Register"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/Register" className="nav-link">
            Register
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
