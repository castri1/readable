import React, { Component } from 'react';
import { connect } from 'react-redux';

import { sortPosts, fetchPostsByCategory } from '../../actions/posts';
import { fetchCategories } from '../../actions/categories';
import PostCategoriesContainer from '../PostCategoriesContainer';

class Category extends Component {
  componentDidMount() {
    this.props.fetchPostsByCategory(this.props.category);
    this.props.fetchCategories();
  }

  componentWillReceiveProps(newProps) {
    const { category } = newProps.match.params;
    if (category && category !== this.props.category) {
      this.props.fetchPostsByCategory(category);
    }
  }

  render() {
    return (
      <PostCategoriesContainer {...this.props} />
    );
  }
}

function mapStateToProps({ posts, categories }, ownProps) {
  const { category } = ownProps.match.params;
  return {
    posts,
    categories,
    category
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPostsByCategory: (category) => dispatch(fetchPostsByCategory(category)),
    fetchCategories: () => dispatch(fetchCategories()),
    sortPosts: (posts, property) => dispatch(sortPosts(posts, property))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);