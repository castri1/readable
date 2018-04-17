import React, { Component } from 'react';
import { Row, Col, FormGroup, FormControl, HelpBlock } from 'react-bootstrap';
import { connect } from 'react-redux';
import uuid from 'uuid/v1';

import { fetchPostById, createPost, updatePost } from '../../actions/posts';
import { fetchCategories } from '../../actions/categories';

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
    title: '',
    author: '',
    category: '',
    body: ''
  }

  componentDidMount() {
    this.props.getCategories();
    if (this.props.postId) {
      this.props.getPost(this.props.postId);
    }
  }

  componentWillReceiveProps(props) {
    const { post } = props;
    if (post) {
      this.setState({
        ...post
      });
    }
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
    const { title, author, category, body } = this.state;
    if (!title || !author || !category || !body) {
      //required fields
      return;
    }

    if (this.props.edit) {
      this.props.updatePost(this.state);
    } else {
      const post = {
        title,
        author,
        category,
        body,
        id: uuid(),
        timestamp: Date.now()
      };
      this.props.addPost(post);
    }
    this.props.history.push("/");
  }

  render() {
    const { title, category, author, body } = this.state;

    return (
      <Row>
        <Col sm={12}>
          <div className="leave-comment">
            <div className="entry-header text-center text-uppercase"></div>
            <form className="form-horizontal contact-form" onSubmit={this.onSubmit}>
              <FieldGroup
                onChange={this.onChange}
                type="text"
                name="title"
                value={title}
                placeholder="Post title"
                size="6"
                required
              >
              </FieldGroup>
              <FieldGroup
                onChange={this.onChange}
                type="text"
                name="author"
                value={author}
                placeholder="Author"
                disabled={this.props.edit}
                size="6"
                required
              >
              </FieldGroup>
              <FieldGroup
                onChange={this.onChange}
                value={category}
                name="category"
                componentClass="select"
                placeholder="Category"
                disabled={this.props.edit}
                size="6"
                required
              >
                <option key={'default'} defaultValue >Select a category</option>
                {this.props.categories.map(category => <option value={category.name} key={category.name}>{category.name.toUpperCase()}</option>)}
              </FieldGroup>
              <FormGroup>
                <Col md={12}>
                  <textarea
                    onChange={this.onChange}
                    value={body}
                    className="form-control"
                    rows="6"
                    name="body"
                    placeholder="Write your post..."
                    required
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
    getPost: (postId) => dispatch(fetchPostById(postId)),
    getCategories: () => dispatch(fetchCategories()),
    addPost: (post) => dispatch(createPost(post)),
    updatePost: (post) => dispatch(updatePost(post))
  };
}

function mapStateToProps({ posts, categories }, ownProps) {
  const { postId } = ownProps.match.params;
  const props = {
    categories,
    edit: false
  };
  if (postId) {
    props.edit = true;
    props.postId = postId;
    props.post = posts.find(post => post.id === postId);
  }
  return props;
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateEdit);
