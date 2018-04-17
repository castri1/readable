import React, { Component } from 'react';
import { Col, FormGroup, FormControl } from 'react-bootstrap';
import uuidv1 from 'uuid/v1';

const FieldGroup = ({ id, size, ...props }) => {
  size = parseInt(size, 10);
  return (
    <FormGroup controlId={id}>
      <Col sm={size}>
        <FormControl {...props} />
      </Col>
    </FormGroup>
  );
};

class LeaveComment extends Component {
  state = {
    id: '',
    parentId: '',
    author: '',
    category: '',
    body: '',
    timestamp: ''
  }

  onChange = (e) => {
    e.preventDefault();
    const { value, name } = e.target;

    this.setState({
      [name]: value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { author, body } = this.state;
    if (!author || !body) {
      return;
    }
    const comment = {
      author,
      body,
      id: uuidv1(),
      parentId: this.props.post.id,
      timestamp: Date.now()
    };

    this.props.addComment(comment)
    this.setState({
      id: '',
      parentId: '',
      author: '',
      category: '',
      body: '',
      timestamp: ''
    });
  }

  render() {
    return (
      <div className="leave-comment">
        <h4>Leave a comment</h4>
        <form className="form-horizontal contact-form" onSubmit={this.onSubmit}>
          <FieldGroup
            type="text"
            name="author"
            placeholder="Author"
            size="12"
            value={this.state.author}
            onChange={this.onChange}
            required
          >
          </FieldGroup>
          <FormGroup>
            <div className="col-md-12">
              <textarea
                value={this.state.body}
                onChange={this.onChange}
                className="form-control"
                rows="6"
                name="body"
                placeholder="Write your comment..."
                required=""
              >
              </textarea>
            </div>
          </FormGroup>
          <button type="submit" className="btn send-btn">Save</button>
        </form>
      </div>
    );
  }
}

export default LeaveComment;