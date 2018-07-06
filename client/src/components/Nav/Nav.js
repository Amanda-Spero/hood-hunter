import React, { Component } from "react";
import { Navbar, NavItem } from 'react-materialize';
//import "./Navbar.css";

class Nav extends Component {
  componentDidMount() {
    const el = document.querySelector('.nav-wrapper')
    el.classList.add("container")
  }
  render() {
    const styleFont = {
      sideNavLinks: {
        fontFamily: "Roboto"
      }
    }
    const sideNavOptions = {
        closeOnClick: true
      }
    return (
      <Navbar brand='Hood Hunter' right className="blue-grey" options={sideNavOptions}>
        <NavItem href='/login' style={styleFont.sideNavLinks}>Login</NavItem>
        <NavItem href='/register' style={styleFont.sideNavLinks}>Register</NavItem>
        <NavItem href='/' style={styleFont.sideNavLinks}>Saved Searches</NavItem>
        <NavItem onClick={()=> alert("Logout")} style={styleFont.sideNavLinks}>Logout</NavItem>
      </Navbar>
    )
  }
}

export default Nav;
