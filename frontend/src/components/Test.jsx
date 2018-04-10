import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

import { fetchPosts, sortPosts, fetchPostsByCategory } from '../actions';
import CategoryContainer from './CategoryContainer';
import Post from './Post';
import ControlBar from './ControlBar';

class Test extends Component {
  sortPosts = (property) => {
    this.props.sortPosts(this.props.posts, property);
  }

  render() {
    return (
      <Row>
        <Col sm={8}>
          <Row>
            <ControlBar sortPosts={this.sortPosts} />
          </Row>
          <Row>
            <Col sm={12}>
              {this.props.posts.map(post => <Post key={post.id} {...post} />)}
            </Col>
          </Row>
        </Col>
        <Col sm={4}>
          <CategoryContainer />
        </Col>
      </Row>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    sortPosts: (posts, property, order) => dispatch(sortPosts(posts, property, order))
  };
}

function mapStateToProps({ posts }) {
  return {
    posts: Object.keys(posts).map(postId => {
      return posts[postId];
    })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);