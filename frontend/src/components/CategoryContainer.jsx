import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchPostsByCategory } from '../actions';

const CategoryLink = ({ name, path, fetchPostsByCategory }) => (
  <h2 className="text-uppercase">
    <Link onClick={() => fetchPostsByCategory(name)} key={name} to={`/categories/${path.toLowerCase()}`}>{name}</Link>
  </h2>
);

class CategoryContainer extends Component {

  fetchPostsByCategory = (category) => {
    this.props.fetchPostsByCategory(category);
  }

  render() {
    return (
      <div className="kotha-sidebar">
        <aside className="widget latest-post-widget">
          <h2 className="widget-title text-uppercase text-center">
            Categories
          </h2>
          <ul>
            <li className="media">
              <div className="latest-post-content">
                {this.props.categories.map(category => (<CategoryLink key={category.name} {...category} fetchPostsByCategory={this.fetchPostsByCategory}/>))}
              </div>
            </li>
          </ul>
        </aside>
      </div>
    );
  }
}

function mapStateToProps({ categories }) {
  return {
    categories
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPostsByCategory: (category) => dispatch(fetchPostsByCategory(category))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer);
