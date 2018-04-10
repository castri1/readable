import React, { Component } from 'react';
import { Row, Col, FormGroup, FormControl, HelpBlock } from 'react-bootstrap';
import { connect } from 'react-redux';

import * as ReadableAPI from '../utils/api';

const FieldGroup = ({ id, help, size, ...props }) => {
  size = parseInt(size, 10);
  return (
    <FormGroup controlId={id}>
      <Col sm={size}>
        <FormControl {...props} >
          {props.children}
        </FormControl>
        {help && <HelpBlock>{help}</HelpBlock>}
      </Col>
    </FormGroup>
  );
};

class CreateEdit extends Component {
  state = {
    post: {
      author: '',
      body: '',
      category: '',
      commentCount: '',
      deleted: '',
      id: '',
      timestamp: '',
      title: '',
      voteScore: ''
    },
    postId: ''
  }

  componentWillMount() {
    const { postId } = this.props.match.params;
    this.setState({ postId });
  }

  render() {
    const { title } = this.state.post;
    return (
      <Row>
        <Col sm={12}>
          <div className="leave-comment">
            <div className="entry-header text-center text-uppercase"></div>
            <form className="form-horizontal contact-form">
              <FieldGroup
                type="text"
                name="title"
                placeholder="Post title"
                size="6"
                defaultValue={title}
                required
              >
              </FieldGroup>
              <FieldGroup
                type="text"
                name="author"
                placeholder="Author"
                size="6"
                required
              >
              </FieldGroup>
              <FieldGroup
                componentClass="select"
                placeholder="Category"
                size="6"
                required
              >
                <option selected="selected">Select a category</option>
                <option value="react">React</option>
                <option value="redux">Redux</option>
                <option value="udacity">Udacity</option>
              </FieldGroup>
              <FormGroup>
                <Col md={12}>
                  <textarea
                    className="form-control"
                    rows="6"
                    name="body"
                    placeholder="Write your post..."
                    required=""
                  >
                  </textarea>
                </Col>
              </FormGroup>
              <button type="submit" className="btn send-btn">Save Post</button>
            </form>
          </div>
        </Col>
      </Row>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

function mapStateToProps({ }) {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateEdit);
