import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPostsByCategory } from '../actions';
import Test from './Test';

class Category extends Component {
  componentWillMount() {
    const { category } = this.props.match.params;
    this.props.fetchPostsByCategory(category);
  }
  render() {
    return (
      <Test />      
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPostsByCategory: (category) => dispatch(fetchPostsByCategory(category)),
  };
}

export default connect(null, mapDispatchToProps)(Category);