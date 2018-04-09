import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Layout extends Component {
  render() {
    return (
      <div>
        <header className="kotha-menu marketing-menu">
          <Navbar className="text-uppercase">
            <Nav>
              <NavItem eventKey={1} href="#">
                Readable Project
            </NavItem>
            </Nav>
          </Navbar>
        </header>
        <div className="kotha-default-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Layout;
