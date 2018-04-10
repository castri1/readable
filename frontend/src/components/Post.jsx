import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

class Post extends Component {
  render() {
    const { body, author, category, title, timestamp, id, voteScore } = this.props;
    const date = moment(timestamp).format("MM/DD/YYYY");

    return (
      <article className="single-blog">
        <div className="post-content">
          <div className="entry-header text-center text-uppercase">
            <Link to={`/categories/${category}`} className="post-cat">{category}</Link>
            <h2>
              <Link to={`/posts/${id}`}>{title}</Link>
            </h2>
          </div>
          <div className="entry-content">
            <p>{body}</p>
          </div>
          <div className="post-meta">
            <ul className="pull-left list-inline author-meta">
              <li className="author"><p>By {author} On {date}</p></li>
            </ul>
            <h3 className="text-uppercase">
              <p className="pull-right">Score: {voteScore}</p>
            </h3>
          </div>
        </div>
      </article>
    );
  }
}

export default Post;
