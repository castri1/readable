import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Grid } from 'react-bootstrap';
import { connect } from 'react-redux';
import Loading from '../ui/Loading';

class Layout extends Component {
  render() {
    return (
      <div>
        <Loading isLoading={this.props.loading} />
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

const mapStateToProps = ({ listeners }) => ({
  loading: listeners.loading
});

export default connect(mapStateToProps)(Layout);
