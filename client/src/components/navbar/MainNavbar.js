import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class MainNavbar extends Component {
  render() {
    return(
      <nav>
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Swapaway</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight>
            <NavItem href="/signup">Sign up</NavItem>
            <NavItem href="/signin">Login</NavItem>
            <NavItem href="/logout">Logout</NavItem>
          </Nav>
        </Navbar>
      </nav>
    );
  }
}
export default MainNavbar;
