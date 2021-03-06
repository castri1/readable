import { LOAD_CATEGORIES } from '../actions/categories';

export default function categoryReducer(state = [], action) {
  switch (action.type) {
    case LOAD_CATEGORIES:
      return action.categories;
    default:
      return state;
  }
}