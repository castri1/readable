import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions';
import Test from './Test';

class Home extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }
  render() {
    return (
      <Test />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
  };
}

export default connect(null, mapDispatchToProps)(Home);
