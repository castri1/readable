import { combineReducers } from 'redux';

import categories from './categories';
import posts from './posts';
import comments from './comments';
import listeners from './listeners';

export default combineReducers({
  categories,
  posts,
  comments,
  listeners
});