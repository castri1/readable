import { combineReducers } from 'redux';
import sortBy from 'sort-by';

import {
  LOAD_POSTS,
  LOAD_POSTS_BY_CATEGORY,
  ADD_POST,
  EDIT_POST,
  ADD_COMMENT,
  EDIT_COMMENT,
  LOAD_CATEGORIES,
  SORT_POSTS
} from '../actions';

const initialState = {
  posts: {},
  comments: {},
  categories: [],
  listeners: {}
};

function comments(state = initialState.comments, action) {
  switch (action.type) {
    default:
      return state;
  }
}

function posts(state = initialState.posts, action) {
  const { posts, property } = action;
  const postsObject = {};
  switch (action.type) {
    case LOAD_POSTS:
      posts.forEach(post => postsObject[post.id] = post);
      return {
        ...postsObject
      }
    case SORT_POSTS:
      posts.sort(sortBy(property)).forEach(post => postsObject[post.id] = post);
      return {
        ...postsObject
      }
    default:
      return state;
  }
}

function listeners(state = initialState.listeners, action) {
  switch (action.type) {
    default:
      return state;
  }
}

function categories(state = initialState.categories, action) {
  switch (action.type) {
    case LOAD_CATEGORIES:
      const { categories } = action;
      return [...categories];
    default:
      return state;
  }
}

export default combineReducers({
  categories,
  posts,
  comments,
  listeners
});