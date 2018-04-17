

export default function listenersREducer(state = { loading: false }, action) {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: action.loading
      }
    default:
      return state;
  }
}