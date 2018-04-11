import * as ReadableApi from '../utils/api';

export const LOAD_COMMENTS = 'LOAD_COMMENTS';
export const ADD_COMMENT = 'ADD_COMMENT';

export const fetchPostComments = (postId) => dispatch => (
  ReadableApi
    .Comments
    .all(postId)
    .then(comments => dispatch({
      type: LOAD_COMMENTS,
      comments
    }))
    .catch(err => console.error(err))
)

export const postComment = (newComment) => dispatch => (
  ReadableApi
    .Comments
    .create(newComment)
    .then(comment => dispatch({
      type: ADD_COMMENT,
      comment: comment
    }))
    .catch(err => console.error(err))
)