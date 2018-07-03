import React from "react";
import "./Navbar.css";

const Navbar = () => (
    <nav className="nav-extended blue-grey">
    <div className="nav-wrapper">
      <a href="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">Hood Hunter</i></a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="sass.html">Saved Search</a></li>
        <li><a href="badges.html">Login/Logout</a></li>
      </ul>
    </div>
    
  </nav>   
);

export default Navbar;
