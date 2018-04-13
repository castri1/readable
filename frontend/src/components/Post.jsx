import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { connect } from 'react-redux';

import { deletePost } from '../actions/posts';

class Post extends Component {
  render() {
    const { body, author, category, title, timestamp, id, voteScore } = this.props;
    const date = moment(timestamp).format("MM/DD/YYYY");

    return (
      <article className="single-blog">
        <div className="post-content">
          <div className="entry-header text-center text-uppercase">
            <Link to={`/categories/${category}`} className="post-cat">{category}</Link>
            <Link to={`/posts/${id}/edit`} className="pull-right"><i className="fa fa-pencil"></i></Link>
            <a onClick={() => this.props.delete(id)} className="pull-right"><i className="fa fa-trash"></i></a>
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
          <a className="pull-right"><i className="fa fa-thumbs-up"></i></a>
          <a className="pull-right"><i className="fa fa-thumbs-down"></i></a>
        </div>
      </article>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    delete: (id) => dispatch(deletePost(id))
  }
}

export default connect(null, mapDispatchToProps)(Post);
