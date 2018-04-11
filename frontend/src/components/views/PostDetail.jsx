import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

import CategoryContainer from '../CategoryContainer';
import Post from '../Post';
import CommentList from '../CommentList';
import LeaveComment from '../LeaveComment';

import { fetchPostById } from '../../actions/posts';
import { fetchPostComments, postComment } from '../../actions/comments';
import { fetchCategories } from '../../actions/categories';

class PostDetail extends Component {
  componentDidMount() {
    this.props.getPost(this.props.postId);
    this.props.getComments(this.props.postId);
    this.props.getCategories();
  }

  render() {
    return (
      <Row>
        <Col sm={8}>
          <Row>
            <Col sm={12}>
              <Post {...this.props.post} />
            </Col>
          </Row>
          <CommentList comments={this.props.comments} />
          <LeaveComment post={this.props.post} addComment={this.props.addComment}/>
        </Col>
        <Col sm={4}>
          <CategoryContainer categories={this.props.categories} />
        </Col>
      </Row>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPost: (postId) => dispatch(fetchPostById(postId)),
    getComments: (postId) => dispatch(fetchPostComments(postId)),
    getCategories: () => dispatch(fetchCategories()),
    addComment: (comment) => { dispatch(postComment(comment)) }
  };
}

function mapStateToProps({ posts, comments, categories }, ownProps) {
  const { postId } = ownProps.match.params;
  return {
    post: posts.find(post => post.id === postId),
    comments,
    categories,
    postId
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);