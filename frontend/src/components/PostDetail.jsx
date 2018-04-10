import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import CategoryContainer from './CategoryContainer';
import Post from './Post';
import CommentList from './CommentList';
import LeaveComment from './LeaveComment';

class PostDetail extends Component {
  state = {
    posts: {
      "8xf0y6ziyjabvozdd253nd": {
        id: '8xf0y6ziyjabvozdd253nd',
        timestamp: 1467166872634,
        title: 'Udacity is the best place to learn React',
        body: 'Everyone says so after all.',
        author: 'thingtwo',
        category: 'react',
        voteScore: 6,
        deleted: false,
        commentCount: 2
      }
    },
    comments: {
      "8tu4bsun805n8un48ve89": {
        id: '8tu4bsun805n8un48ve89',
        parentId: "8xf0y6ziyjabvozdd253nd",
        timestamp: 1469479767190,
        body: 'Comments. Are. Cool.',
        author: 'thingone',
        voteScore: -5,
        deleted: false,
        parentDeleted: false
      },
      "9tu4bsun805n8un48ve89": {
        id: '9tu4bsun805n8un48ve89',
        parentId: "8xf0y6ziyjabvozdd253nd",
        timestamp: 1469479767190,
        body: 'Comments. Are. Cool.Very cool Hello, world of comments',
        author: 'thingone',
        voteScore: -5,
        deleted: false,
        parentDeleted: false
      }
    }
  }

  render() {
    const postId = this.props.match.params.postId;
    const post = this.state.posts[postId];
    const comments = [];
    for (let id of Object.keys(this.state.comments)) {
      const comment = this.state.comments[id];
      if (comment.parentId === postId)
        comments.push(comment);
    }

    return (
      <Row>
        <Col sm={8}>
          <Row>
            <Col sm={12}>
              <Post {...post} />
            </Col>
          </Row>
          {comments && <CommentList comments={comments} />}
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