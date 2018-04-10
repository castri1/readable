import * as ReadableApi from '../utils/api';

export const LOAD_POSTS = 'LOAD_POSTS';
export const ADD_POST = 'ADD_POST';
export const EDIT_POST = 'EDIT_POST';
export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const LOAD_CATEGORIES = 'LOAD_CATEGORIES';
export const SORT_POSTS = 'SORT_POSTS';

//action creators
export const loadPosts = (posts) => {
  return {
    type: LOAD_POSTS,
    posts
  };
}

export const loadCategories = (categories) => {
  return {
    type: LOAD_CATEGORIES,
    categories
  }
}

export const fetchPosts = () => dispatch => (
  ReadableApi
    .fetchPosts()
    .then(posts => dispatch(loadPosts(posts)))
)

export const fetchPostsByCategory = (category) => dispatch => (
  ReadableApi
    .fetchPostsByCategory(category)
    .then(posts => dispatch(loadPosts(posts)))
)

export const fetchCategories = () => dispatch => (
  ReadableApi
    .fetchCategories()
    .then(categories => dispatch(loadCategories(categories)))
)

export const sortPosts = (posts, property) => {
  return {
    type: SORT_POSTS,
    posts,
    property,
  };
}