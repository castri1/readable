import React, { Component } from 'react';

import { Grid, Row, Col, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

function FieldGroup({ id, help, size, ...props }) {
  return (
    <FormGroup controlId={id}>
      <Col sm={size}>
        <FormControl {...props} />
        {help && <HelpBlock>{help}</HelpBlock>}
      </Col>
    </FormGroup>
  );
}

class CreateEdit extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col sm={12}>
            <div className="leave-comment">
              <div className="entry-header text-center text-uppercase"></div>
              <h4></h4>
              <form className="form-horizontal contact-form" method="post" action="#">
                <FieldGroup
                  type="text"
                  name="title"
                  placeholder="Post title"
                  size="12"
                  required
                >
                </FieldGroup>
                <FormGroup>
                  <div className="col-md-12">
                    <textarea className="form-control" rows="6" name="body" placeholder="Write your post..." required=""></textarea>
                  </div>
                </FormGroup>
                <button type="submit" className="btn send-btn">Save Post</button>
              </form>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default CreateEdit;
