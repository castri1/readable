import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import CategoryContainer from './CategoryContainer';
import Post from './Post';
import ControlBar from './ControlBar';

class Test extends Component {
  sortPosts = (property) => {
    this.props.sortPosts(this.props.posts, property);
  }

  render() {
    const { posts, categories, match: { params: { category } } } = this.props;

    return (
      <Row>
        <Col sm={8}>
          <Row>
            <ControlBar sortPosts={this.sortPosts} />
          </Row>
          <Row>
            {category &&
              <Col sm={12}>
                <h1 className="text-center">{category.toUpperCase()}</h1>
              </Col>}
          </Row>
          <Row>
            <Col sm={12}>
              {posts.length === 0 ?
                <h3 className="text-center">No posts yet...</h3> :
                posts.map(post => <Post key={post.id} {...post} />)}
            </Col>
          </Row>
        </Col>
        <Col sm={4}>
          <CategoryContainer categories={categories} />
        </Col>
      </Row>
    );
  }
}

export default Test;