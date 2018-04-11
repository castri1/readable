
import { LOAD_COMMENTS, ADD_COMMENT } from '../actions/comments';

export default function commentsReducer(state = [], action) {
  switch (action.type) {
    case LOAD_COMMENTS:
      return action.comments;
    case ADD_COMMENT:
      return [...state, action.comment]
    default:
      return state;
  }
}