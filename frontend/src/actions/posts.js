import * as ReadableApi from '../utils/api';

export const LOAD_POSTS = 'LOAD_POSTS';
export const SORT_POSTS = 'SORT_POSTS';
export const ADD_POST = 'ADD_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const DELETE_POST = 'DELETE_POST';

function loadPosts(posts) {
  return {
    type: LOAD_POSTS,
    posts
  }
}

export const fetchPosts = () => dispatch => (
  ReadableApi
    .Posts.all()
    .then(posts => dispatch(loadPosts(posts)))
)

export const fetchPostsByCategory = (category) => dispatch => (
  ReadableApi
    .Posts
    .byCategory(category)
    .then(posts => dispatch(loadPosts(posts)))
)

export const sortPosts = (posts, property) => {
  return {
    type: SORT_POSTS,    
    posts,
    property
  }
}