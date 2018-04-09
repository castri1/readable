import React, { Component } from 'react';

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
                <h2 className="text-uppercase">
                  <a href="">Travel</a>
                </h2>
              </div>
            </li>
          </ul>
        </aside>
      </div>
    );
  }
}

export default CategoryContainer;
