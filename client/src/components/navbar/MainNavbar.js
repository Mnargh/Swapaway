import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import hoverlogo from './swapaway-light.png'
import logo from './swapaway-dark.png'

class MainNavbar extends Component {
  constructor() {
    super();
  }

  logout(){
    fetch('/users/logout', { method: 'GET', redirect: '/'})
  }

  render() {
    return(
      <nav>
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/"><img src={logo}/></a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight>
            <NavItem href="/signup">Sign up</NavItem>
            <NavItem href="/login">Login</NavItem>
            <NavItem onClick={this.logout} href='/'>Logout</NavItem>
            <NavItem href="/newitem">Add Item</NavItem>
            <NavItem href="/profile">Profile</NavItem>
          </Nav>
        </Navbar>
      </nav>
    );
  }
}
export default MainNavbar;
