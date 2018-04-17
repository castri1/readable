import React, { Component } from 'react';

import Comment from './Comment';

class CommentList extends Component {
  render() {
    return (
      <div className="comment-area">
        <div className="comment-heading">
          <h3>Comments</h3>
        </div>
        {this.props.comments.map(comment => <Comment key={comment.id} {...comment} deleteComment={this.props.deleteComment}/>)}
      </div>
    );
  }
}

export default CommentList;