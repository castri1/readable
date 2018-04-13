import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';

import { voteComment, deleteComment } from '../actions/comments';

class Comment extends Component {
  render() {
    const { timestamp, body, author, voteScore, id } = this.props;

    return (
      <div className="single-comment">
        <div className="media">
          <div className="media-body">
            <div className="media-heading">
              <h3 className="text-uppercase">
                <a href="">{author}</a>
                <a className="pull-right reply-btn"><i className="fa fa-trash"></i> delete</a>
                <a className="pull-right reply-btn"><i className="fa fa-edit"></i> edit</a>
              </h3>
            </div>
            <p className="comment-date">
              {moment(timestamp).format("MM/DD/YYYY")}
            </p>
            <p className="comment-p">{body}</p>
            <h3 className="text-uppercase"><p className="pull-right">Score: {voteScore}</p></h3>
          </div>
          <div className="pull-right post-actions">
            <a onClick={() => this.props.vote(id, 'upVote')}><i className="fa fa-thumbs-up"></i></a>
            <a onClick={() => this.props.vote(id, 'downVote')}><i className="fa fa-thumbs-down"></i></a>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    delete: (id) => dispatch(deleteComment(id)),
    vote: (id, option) => dispatch(voteComment(id, option))
  }
}

export default connect(null, mapDispatchToProps)(Comment);