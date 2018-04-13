import * as ReadableApi from '../utils/api';

export const LOAD_POSTS = 'LOAD_POSTS';
export const LOAD_POST = 'LOAD_POST';
export const SORT_POSTS = 'SORT_POSTS';
export const ADD_POST = 'ADD_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const DELETE_POST = 'DELETE_POST';

function loadPosts(posts) {
  return {
    type: LOAD_POSTS,
    posts
  };
}

function addPost(post) {
  return {
    type: ADD_POST,
    post
  };  
}

export const fetchPosts = () => dispatch => (
  ReadableApi
    .Posts
    .all()
    .then(posts => dispatch(loadPosts(posts)))
    .catch(err => console.error(err))
)

export const fetchPostsByCategory = (category) => dispatch => (
  ReadableApi
    .Posts
    .byCategory(category)
    .then(posts => dispatch(loadPosts(posts)))
    .catch(err => console.error(err))
)

export const sortPosts = (posts, property) => {
  return {
    type: SORT_POSTS,    
    posts,
    property
  }
}

export const fetchPostById = (id) => dispatch => (
  ReadableApi
    .Posts
    .get(id)
    .then(post => dispatch({
      type: LOAD_POST,
      post
    }))
    .catch(err => console.error(err))
)

export const createPost = (post) => dispatch => (
  ReadableApi
    .Posts
    .create(post)
    .then(post => dispatch(addPost(post)))
    .catch(err => console.error(err))
)

export const updatePost = (post) => dispatch => (
    ReadableApi
      .Posts
      .update(post)
      .then(post => dispatch({
        type: UPDATE_POST,
        post
      }))
)

export const deletePost = (id) => dispatch => {
  ReadableApi
    .Posts
    .delete(id)
    .then(() => dispatch({
      type: DELETE_POST,
      id
    }))
    .catch(err => console.error(err))
}