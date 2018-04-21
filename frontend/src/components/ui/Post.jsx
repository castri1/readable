import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

import { votePost, deletePost } from '../../actions/posts';

class Post extends Component {
  onDelete = (id) => {
    this.props.delete(id)
      .then(() => this.props.push("/"));
  }

  render() {
    const { body, author, category, title, timestamp, id, voteScore, commentCount, actions } = this.props;
    const date = moment(timestamp).format("MM/DD/YYYY");

    return (
      <article className="single-blog">
        <div className="post-content">
          <div className="entry-header text-center text-uppercase">
            <Link to={`/categories/${category}`} className="post-cat">{category}</Link>
            {actions && (
              <div className="pull-right post-actions">
                <Link to={`/posts/${id}/edit`}><i className="fa fa-edit"></i></Link>
                <a onClick={() => this.onDelete(id)}><i className="fa fa-trash"></i></a>
              </div>)}
            <h2>
              <Link to={`/${category}/${id}`}>{title}</Link>
            </h2>
          </div>
          <div className="entry-content">
            <p>{body}</p>
          </div>
          <div className="post-meta">
            <Row>
              <Col sm={6}>
                <Col sm={12} className="post-meta-col">
                  <ul className="pull-left list-inline author-meta">
                    <li className="author"><p>By {author} On {date}</p></li>
                  </ul>
                </Col>
                <Col sm={12} className="post-meta-col">
                  <ul className="pull-left list-inline author-meta">
                    <li className="author"><p>{`Comments: ${commentCount}`}</p></li>
                  </ul>
                </Col>
              </Col>
              <Col sm={6}>
                <Col sm={12} className="post-meta-col">
                  <h3 className="text-uppercase pull-right">
                    <p>Score: {voteScore}</p>
                  </h3>
                </Col>
                <Col sm={12} className="post-meta-col">
                  <div className="pull-right post-actions">
                    <a onClick={() => this.props.vote(id, 'upVote')}><i className="fa fa-thumbs-up"></i></a>
                    <a onClick={() => this.props.vote(id, 'downVote')}><i className="fa fa-thumbs-down"></i></a>
                  </div>
                </Col>
              </Col>
            </Row>
          </div>
        </div>
      </article>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    vote: (id, option) => dispatch(votePost(id, option)),
    delete: (id) => dispatch(deletePost(id))
  }
}

export default connect(null, mapDispatchToProps)(Post);
