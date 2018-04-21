import { startLoading, endLoading } from './listeners';

export default function asyncRequestAction(fn, action) {
  return function dispatcher(dispatch) {
    dispatch(startLoading());
    return fn()
      .then(res => dispatch(action(res)))
      .catch(err => console.log(err))
      .finally(() => dispatch(endLoading()))
  }
};