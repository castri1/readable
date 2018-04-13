import sortBy from 'sort-by';

import { LOAD_POSTS, LOAD_POST, SORT_POSTS, ADD_POST, UPDATE_POST, DELETE_POST } from '../actions/posts';

export default function postsReducer(state = [], action) {
  switch (action.type) {
    case LOAD_POSTS:
      return action.posts;
    case LOAD_POST:
      return [action.post];
    case ADD_POST:
      return [...state, action.post];
    case UPDATE_POST:
      return state.map(post => post.id === action.id ? action.post : post);
    case DELETE_POST:
      return state.filter(post => post.id !== action.id)
    case SORT_POSTS:
      return [...action.posts.sort(sortBy(action.property))]
    default:
      return state;
  }
}