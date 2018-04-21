import * as ReadableApi from '../utils/api';
import asyncRequestAction from './asyncRequestAction';

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

export const fetchPosts = () => asyncRequestAction(
  ReadableApi.Posts.all,
  posts => loadPosts(posts)
)

export const fetchPostsByCategory = (category) => asyncRequestAction(
  () => ReadableApi.Posts.byCategory(category),
  posts => loadPosts(posts)
)

export const sortPosts = (posts, property) => {
  return {
    type: SORT_POSTS,
    posts,
    property
  }
}

export const fetchPostById = (id) => asyncRequestAction(
  () => ReadableApi.Posts.get(id),
  post => ({
    type: LOAD_POST,
    post
  })
)

export const createPost = (post) => asyncRequestAction(
  () => ReadableApi.Posts.create(post),
  post => addPost(post)
)

export const updatePost = (post) => asyncRequestAction(
  () => ReadableApi.Posts.update(post),
  post => ({
    type: UPDATE_POST,
    post
  })
)

export const deletePost = (id) => asyncRequestAction(
  () => ReadableApi.Posts.delete(id),
  () => ({
    type: DELETE_POST,
    id
  })
)

export const votePost = (id, option) => dispatch => {
  ReadableApi
    .Posts
    .vote(id, option)
    .then(post => dispatch({
      type: UPDATE_POST,
      id,
      post
    }))
    .catch(err => console.error(err))
}

