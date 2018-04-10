import React, { Component } from 'react';
import { Col, FormGroup, FormControl } from 'react-bootstrap';

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
  render() {
    return (
      <div className="leave-comment">
        <h4>Leave a comment</h4>
        <form className="form-horizontal contact-form">
          <FieldGroup
            type="text"
            name="author"
            placeholder="Author"
            size="12"
            required
          >
          </FieldGroup>
          <FormGroup>
            <div className="col-md-12">
              <textarea className="form-control" rows="6" name="body" placeholder="Write your comment..." required=""></textarea>
            </div>
          </FormGroup>
          <button type="submit" className="btn send-btn">Save</button>
        </form>
      </div>
    );
  }
}

export default LeaveComment;