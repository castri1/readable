import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

import CategoryContainer from '../ui/CategoryContainer';
import Post from '../ui/Post';
import CommentList from '../ui/CommentList';
import LeaveComment from '../ui/LeaveComment';

import { fetchPostById, deletePost } from '../../actions/posts';
import { fetchPostComments, postComment, deleteComment } from '../../actions/comments';
import { fetchCategories } from '../../actions/categories';

class PostDetail extends Component {
  state = {
    loaded: false
  }

  componentDidMount() {
    this.props.getPost(this.props.postId)
      .then(res => {
        const { post } = res;
        if (Object.keys(post).length === 0) {
          this.props.history.push("/404");
          return;
        }
        this.setState({ loaded: true });
        this.props.getComments(this.props.postId);
        this.props.getCategories();
      });
  }
  
  onComment = (comment) => {
    this.props.addComment(comment)
      .then(() => this.props.getPost(comment.parentId));
  }

  onDeleteComment = (id) => {
    this.props.deleteComment(id)
      .then(() => this.props.getPost(this.props.postId));
  }

  render() {
    return this.state.loaded && (
      <Row>
        <Col md={4} mdPush={8}>
          <CategoryContainer categories={this.props.categories} />
        </Col>
        <Col md={8} mdPull={4}>
          <Row>
            <Col sm={12}>
              <Post {...this.props.post} push={this.props.history.push} actions={true} />
            </Col>
          </Row>
          <CommentList comments={this.props.comments} deleteComment={this.onDeleteComment} />
          <LeaveComment post={this.props.post} addComment={this.onComment} />
        </Col>
      </Row>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPost: (postId) => dispatch(fetchPostById(postId)),
    getComments: (postId) => dispatch(fetchPostComments(postId)),
    deletePost: (id) => dispatch(deletePost(id)),
    getCategories: () => dispatch(fetchCategories()),
    addComment: (comment) => dispatch(postComment(comment)),
    deleteComment: (id) => dispatch(deleteComment(id))
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