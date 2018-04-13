
import { LOAD_COMMENTS, ADD_COMMENT, UPDATE_COMMENT, DELETE_COMMENT } from '../actions/comments';

export default function commentsReducer(state = [], action) {
  switch (action.type) {
    case LOAD_COMMENTS:
      return action.comments;
    case ADD_COMMENT:
      return [...state, action.comment]
    case UPDATE_COMMENT:
      return state.map(comment => action.id === comment.id ? action.comment : comment)
    case DELETE_COMMENT:
      return state.filter(comment => comment.id !== action.id)
    default:
      return state;
  }
}