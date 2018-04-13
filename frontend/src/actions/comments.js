import * as ReadableApi from '../utils/api';

export const LOAD_COMMENTS = 'LOAD_COMMENTS';
export const ADD_COMMENT = 'ADD_COMMENT';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const DELETE_COMMENT = 'UPDATE_COMMENT';

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
      comment
    }))
    .catch(err => console.error(err))
)

export const voteComment = (id, option) => dispatch => (
  ReadableApi
    .Comments
    .vote(id, option)
    .then(comment => dispatch({
      type: UPDATE_COMMENT,
      comment,
      id
    }))
    .catch(err => console.error(err))
)

export const deleteComment = (id) => dispatch => (
  ReadableApi
    .Comments
    .delete(id)
    .then(comment => dispatch({
      type: DELETE_COMMENT,
      id
    }))
    .catch(err => console.error(err))
)