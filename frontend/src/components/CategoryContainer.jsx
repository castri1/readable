import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const CategoryLink = ({ name, path, ...props }) => (
  <h2 className="text-uppercase">
    <a key={name} href={`/categories/${path.toLowerCase()}`}>{name}</a>
  </h2>
);

class CategoryContainer extends Component {
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
                {this.props.categories.map(category => (<CategoryLink key={category.name} {...category} />))}
              </div>
            </li>
          </ul>
        </aside>
      </div>
    );
  }
}

export default CategoryContainer;
