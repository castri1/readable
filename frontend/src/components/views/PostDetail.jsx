import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import CategoryContainer from '../CategoryContainer';
import Post from '../Post';
import CommentList from '../CommentList';
import LeaveComment from '../LeaveComment';

class PostDetail extends Component {
  render() {
    return (
      <Row>
        <Col sm={8}>
          <Row>
            <Col sm={12}>
              {/* <Post {...post} /> */}
            </Col>
          </Row>
           {/* <CommentList comments={comments} /> */}
          <LeaveComment />
        </Col>
        <Col sm={4}>
          <CategoryContainer />
        </Col>
      </Row>
    );
  }
}

export default PostDetail;