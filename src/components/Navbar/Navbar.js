import React from "react";

const Navbar = () => (
    <nav className="blue-grey" >
        <div className="nav-wrapper container"><a id="logo-container" href="/" className="brand-logo">HoodHunter</a>
            
            <ul className="right hide-on-med-and-down">
                <li><a href="/">Login/Logout</a></li>
            </ul>

            <ul className="right hide-on-med-and-down">
                <li><a href="/">Saved Searches</a></li>
            </ul>
         
        </div>
    </nav>
);

export default Navbar;
