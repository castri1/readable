import React, { Component } from 'react';

class Post extends Component {
  render() {
    return (
      <article className="single-blog">
        <div className="post-content">
          <div className="entry-header text-center text-uppercase">
            <a href="#" className="post-cat">Travel</a>
            <h2>
              <a href="">Adventure</a>
            </h2>
          </div>
          <div className="entry-content">
            <p>Lorem impsum</p>
          </div>
          <div className="continue-reading text-center text-uppercase">
            <a href="single-page.html">Continue Reading</a>
          </div>
          <div className="post-meta">
            <ul className="pull-left list-inline author-meta">
              <li className="author">By <a href="#">Jennifer </a></li>
              <li className="date"> On October 13, 2017</li>
            </ul>
            <ul className="pull-right list-inline social-share">
              <li><a href=""><i className="fa fa-facebook"></i></a></li>
              <li><a href=""><i className="fa fa-twitter"></i></a></li>
              <li><a href=""><i className="fa fa-pinterest"></i></a></li>
              <li><a href=""><i className="fa fa-google-plus"></i></a></li>
              <li><a href=""><i className="fa fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
      </article>
    );
  }
}

export default Post;
