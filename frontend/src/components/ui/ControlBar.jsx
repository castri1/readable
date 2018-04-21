import React, { Component } from 'react';
import { Col, MenuItem, DropdownButton, ButtonToolbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class ControlBar extends Component {
  sortPosts = (property) => {
    this.props.sortPosts(property);
  }

  render() {
    return (
      <Col sm={12}>
        <Link to="/posts/new" className="add-btn">Add Post</Link>
        <ButtonToolbar id="sort-btn">
          <DropdownButton
            bsSize="small"
            title="Sort"
            id="dropdown-size-small"
          >
            <MenuItem onClick={() => this.sortPosts('-voteScore')} eventKey="1">Vote Score: High</MenuItem>
            <MenuItem onClick={() => this.sortPosts('voteScore')} eventKey="2">Vote Score: Low</MenuItem>
            <MenuItem divider />
            <MenuItem onClick={() => this.sortPosts('-timestamp')} eventKey="3">Date: Newest</MenuItem>
            <MenuItem onClick={() => this.sortPosts('timestamp')} eventKey="4">Date: Oldest</MenuItem>
          </DropdownButton>
        </ButtonToolbar>
      </Col>
    );
  }
}

export default ControlBar;