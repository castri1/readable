import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Grid } from 'react-bootstrap';

import { fetchCategories } from '../actions'


class Layout extends Component {
  componentWillMount() {
    this.props.fetchCategories();
  }

  render() {
    return (
      <div>
        <header className="kotha-menu marketing-menu">
          <Navbar className="text-uppercase">
            <Nav>
              <NavItem componentClass={Link} eventKey={1} href="/" to="/">
                Readable Project
              </NavItem>
            </Nav>
          </Navbar>
        </header>
        <div className="kotha-default-content">
          <Grid>
            {this.props.children}
          </Grid>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCategories: () => dispatch(fetchCategories())
  }
}

export default connect(null, mapDispatchToProps)(Layout);
