import React, { Component } from "react";
import { Navbar, NavItem } from 'react-materialize';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {logoutUser} from "../../actions/authActions";

class Nav extends Component {
  componentDidMount() {
    const el = document.querySelector('.nav-wrapper')
    el.classList.add("container")
  }
  logoutLink = e => {
    this.props.logoutUser()
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
    const {isAuthenticated} = this.props.auth;
    const unAuthNavBarItems = (
        <React.Fragment>
            <NavItem href='/login' style={styleFont.sideNavLinks}>Login</NavItem>
            <NavItem href='/register' style={styleFont.sideNavLinks}>Register</NavItem>
            <NavItem href='/social' style={styleFont.sideNavLinks}>Forum</NavItem>
        </React.Fragment>
    )
    const authNavBarItems = (
        <React.Fragment>
            <NavItem href='/' style={styleFont.sideNavLinks}>Saved Searches</NavItem>
            <NavItem onClick={this.logoutLink} style={styleFont.sideNavLinks}>Logout</NavItem>
        </React.Fragment>
    )
    return (
      <Navbar brand='Hood Hunter' right className="blue-grey" options={sideNavOptions}>
            <NavItem href='/' style={styleFont.sideNavLinks}>Home</NavItem>
            {isAuthenticated ? authNavBarItems : unAuthNavBarItems}
      </Navbar>
    )
  }
}
Nav.propTypes = {
    auth: PropTypes.object.isRequired,
    logoutUser: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    auth: state.auth
})
export default connect(mapStateToProps, {logoutUser})(Nav);
