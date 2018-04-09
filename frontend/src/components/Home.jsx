import React, { Component } from 'react';
import { MenuItem, Row, Grid, Col, ButtonToolbar, DropdownButton } from 'react-bootstrap';

import CategoryContainer from './CategoryContainer';
import Post from './Post';

class Home extends Component {
  render() {
    return (
      <Grid>
        <Row>

          <Col sm={8}>
            <Row>
              <Col sm={12}>
                <a href="" className="add-btn">Add Post</a>
                <ButtonToolbar id="sort-btn">
                  <DropdownButton
                    bsSize="small"
                    title="Sort"
                    id="dropdown-size-small"
                  >
                    <MenuItem eventKey="1">Vote Score: High</MenuItem>
                    <MenuItem eventKey="2">Vote Score: Low</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey="3">Date: Newer</MenuItem>
                    <MenuItem eventKey="4">Date: Older</MenuItem>
                  </DropdownButton>
                </ButtonToolbar>
              </Col>
            </Row>

            {/* list of posts */}
            <Row>
              <Col sm={12}>
                <Post />
              </Col>
            </Row>

          </Col>

          {/* categories */}
          <Col sm={4}>
            <CategoryContainer />
          </Col>

        </Row>
      </Grid>
    );
  }
}

export default Home;
