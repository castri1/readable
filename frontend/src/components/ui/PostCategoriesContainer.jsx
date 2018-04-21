import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import CategoryContainer from './CategoryContainer';
import Post from './Post';
import ControlBar from './ControlBar';

class PostCategoriesContainer extends Component {
  sortPosts = (property) => {
    this.props.sortPosts(this.props.posts, property);
  }

  render() {
    const { posts, categories, match: { params: { category } } } = this.props;

    return (
      <Row>
        <Col md={4} mdPush={8}>
          <CategoryContainer categories={categories} />
        </Col>
        <Col md={8} mdPull={4}>
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
                posts.map(post => <Post key={post.id} {...post} actions={true} push={this.props.history.push}/>)}
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default PostCategoriesContainer;