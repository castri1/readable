import { LOADING } from '../actions/listeners';

export default function listenersReducer(state = {}, action) {
  switch (action.type) {
    case LOADING:
      return {
        loading: action.loading
      };
    default:
      return state;
  }
}