import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

 class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">BooKmyParty</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/Login">LogIn</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Signup">SignUp</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/vendors">Vendors</NavLink>
              </NavItem>

            </Nav>
          </Collapse>
        </Navbar>

        
    );
  }
}
export default Header