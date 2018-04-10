import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

import { sortPosts } from '../actions/posts';
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
          <CategoryContainer categories={this.props.categories} fetchPostsByCategory={this.props.fetchPostsByCategory} />
        </Col>
      </Row>
    );
  }
}

export default Test;