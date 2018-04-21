import * as ReadableApi from '../utils/api';
import asyncRequestAction from './asyncRequestAction';

export const LOAD_COMMENTS = 'LOAD_COMMENTS';
export const ADD_COMMENT = 'ADD_COMMENT';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

export const fetchPostComments = (postId) => asyncRequestAction(
  () => ReadableApi.Comments.all(postId),
  comments => ({
    type: LOAD_COMMENTS,
    comments
  }));

export const postComment = (newComment) => asyncRequestAction(
  () => ReadableApi.Comments.create(newComment),
  comment => ({
    type: ADD_COMMENT,
    comment
  })
)

export const voteComment = (id, option) => dispatch => (
  ReadableApi.Comments.vote(id, option)
    .then(comment => dispatch({
      type: UPDATE_COMMENT,
      comment,
      id
    }))
    .catch(err => console.error(err))
)

export const deleteComment = (id) => asyncRequestAction(
  () => ReadableApi.Comments.delete(id),
  res => ({
    type: DELETE_COMMENT,
    id
  })
)

export const updateComment = (comment) => asyncRequestAction(
  () => ReadableApi.Comments.update(comment),
  comment => ({
    type: UPDATE_COMMENT,
    comment,
    id: comment.id
  })
)