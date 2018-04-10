import React, { Component } from 'react';
import moment from 'moment';

class Comment extends Component {
  render() {
    const { id, timestamp, body, author, voteScore } = this.props;

    return (
      <div className="single-comment">
        <div className="media">
          <div className="media-body">
            <div className="media-heading">
              <h3 className="text-uppercase">
                <a href="">{author}</a>
                <a href="" className="pull-right reply-btn"><i className="fa fa-trash"></i> delete</a>
                <a href="" className="pull-right reply-btn"><i className="fa fa-edit"></i> edit</a>
              </h3>
            </div>
            <p className="comment-date">
              {moment(timestamp).format("MM/DD/YYYY")}
            </p>
            <p className="comment-p">{body}</p>
            <h3 className="text-uppercase"><p className="pull-right">Score: {voteScore}</p></h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Comment;