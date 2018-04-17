import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { FormGroup } from 'react-bootstrap';

import { voteComment, updateComment } from '../actions/comments';

class Comment extends Component {
  state = {
    edit: false,
    comment: {
      body: '',
      timestamp: '',
      id: '',
    }
  }

  componentDidMount() {
    const { id, body, timestamp } = this.props;
    this.setState({ 
      comment: {
        id,
        body,
        timestamp
      }
    });
  }

  onChange = (e) => {
    e.preventDefault();
    const body = e.target.value;
    this.setState({ comment: { ...this.state.comment, body } });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const comment = this.state.comment;
    if (!comment.body) return;
    comment.timestamp = Date.now();
    this.props.updateComment(comment);
    this.setState({ edit: false });
  }

  render() {
    const { timestamp, body, author, voteScore, id } = this.props;
    const { edit } = this.state;

    return (
      <div className="single-comment">
        <div className="media">
          <div className="media-body">
            <div className="media-heading">
              <h3 className="text-uppercase">
                <a href="">{author}</a>
                {!edit && <a onClick={() => this.props.deleteComment(id)} className="pull-right reply-btn"><i className="fa fa-trash"></i> delete</a>}
                {!edit && <a onClick={() => this.setState({ edit: true })} className="pull-right reply-btn"><i className="fa fa-edit"></i> edit</a>}
              </h3>
            </div>
            <p className="comment-date">
              {moment(timestamp).format("MM/DD/YYYY")}
            </p>
            {!edit ? <p className="comment-p">{body}</p> :
              <div className="edit-comment">
                <form className="form-horizontal contact-form" onSubmit={this.onSubmit}>
                  <FormGroup>
                    <textarea
                      value={this.state.comment.body}
                      onChange={this.onChange}
                      className="form-control"
                      rows="6"
                      name="comment"
                    >
                    </textarea>
                  </FormGroup>
                  <button type="submit" className="btn send-btn">Save</button>
                </form>
              </div>
            }
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
    vote: (id, option) => dispatch(voteComment(id, option)),
    updateComment: (comment) => dispatch(updateComment(comment))
  }
}

export default connect(null, mapDispatchToProps)(Comment);