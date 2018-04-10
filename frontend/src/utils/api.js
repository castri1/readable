const ROOT_URL = 'http://localhost:3001';

const headers = {
  'Accept': 'application/json',
  'Authorization': 'token'
}

function getRequest(path) {
  return fetch(`${ROOT_URL}${path}`, { headers }).then(res => res.json());
}

function postRequest(path, body) {
  const options = {
    ...headers,
    method: 'POST',
    body: JSON.stringify(body)
  };
  return fetch(`${ROOT_URL}${path}`, options).then(res => res.json());
}

function deleteRequest(path) {
  const options = {
    ...headers,
    method: 'DELETE'
  };
  return fetch(`${ROOT_URL}${path}`, options).then(res => res.json());
}

function putRequest(path, body) {
  const options = {
    ...headers,
    method: 'PUT',
    body: JSON.stringify(body)
  };
  return fetch(`${ROOT_URL}${path}`, options).then(res => res.json());
}

export const Comments = {
  all: (postId) => getRequest(`/posts/${postId}/comments`),
  delete: (id) => deleteRequest(`/comments/${id}`),
  get: (id) => getRequest(`/commenst/${id}`),
  update: (comment) => putRequest(`/comments/${comment.id}`, comment),
  create: (comment) => postRequest('/comments', comment)
}

export const Posts = {
  all: () => getRequest(`/posts`),
  get: (id) => getRequest(`posts/${id}`),
  byCategory: (category) => getRequest(`/${category}/posts`),
  create: (post) => postRequest('/posts', post),
  delete: (id) => deleteRequest(`/posts/${id}`),
  update: (post) => putRequest(`/posts/${post.id}`, post)
};

export const Categories = {
  all: () => getRequest('/categories').then(data => data.categories)
};
