import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPosts, sortPosts } from '../../actions/posts';
import { fetchCategories } from '../../actions/categories';

import PostCategoriesContainer from '../ui/PostCategoriesContainer';

class Home extends Component {
  componentDidMount() {
    this.props.fetchPosts();
    this.props.fetchCategories();
  }

  render() {
    return (
      <PostCategoriesContainer {...this.props} />
    );
  }
}

function mapStateToProps({ posts, categories }) {
  return {
    posts,
    categories
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    fetchCategories: () => dispatch(fetchCategories()),
    sortPosts: (posts, property) => dispatch(sortPosts(posts, property))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
