import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  Button,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import Home from "./HomeComponent";
import { findAllByTestId } from "@testing-library/react";
class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
  }
  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  test() {
    window.location.reload();
  }

  render() {
    return (
      <>
        <div className="col-2 bg-primary sidebar">
          <div className="justify-content-center">
            <Navbar expand="lg">
              <div className="d-inline-block">
                <NavbarToggler onClick={this.toggleNav} />
                <NavbarBrand className="d-block" href="/dashboard">
                  <img
                    src="assets/images/logo.png"
                    height="40"
                    with="50"
                    alt="ReBOT Logo"
                    className="m-3"
                  />
                </NavbarBrand>
                <Collapse isOpen={this.state.isNavOpen} navbar>
                  <Nav className="row d-block m-2" navbar>
                    <NavLink
                      className="nav-link text-light"
                      to="/dashboard"
                      activeClassName="nav-link-active"
                    >
                      <div className="fa fa-home fa-lg mr-2 col-4"></div>
                      Dashboard
                    </NavLink>
                    <NavLink
                      className="nav-link text-light"
                      to="/profile"
                      activeClassName="nav-link-active"
                    >
                      <div className="fa fa-user fa-lg mr-2 col-4"></div>{" "}
                      Profile
                    </NavLink>
                    <NavLink
                      className="nav-link text-light"
                      to="/queue"
                      activeClassName="nav-link-active"
                    >
                      <div className="fa fa-users fa-lg mr-2 col-4"></div> Queue
                    </NavLink>
                    <NavLink
                      className="nav-link text-light"
                      to="/qrcode"
                      activeClassName="nav-link-active"
                    >
                      <div className="fa fa-qrcode fa-lg mr-2 col-4"></div> QR
                      Code
                    </NavLink>
                    <NavLink
                      className="nav-link text-light"
                      to="/record"
                      activeClassName="nav-link-active"
                    >
                      <div className="fa fa-clipboard fa-lg mr-2 col-4"></div>
                      Record
                    </NavLink>
                    <NavLink className="nav-link text-light" to="/">
                      <div className="fa fa-sign-out fa-lg mr-2 col-4"></div>
                      Logout
                    </NavLink>
                  </Nav>
                </Collapse>
              </div>
            </Navbar>
          </div>
        </div>
      </>
    );
  }
}
export default Sidebar;
