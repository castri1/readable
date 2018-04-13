const ROOT_URL = 'http://localhost:3001';

const headers = {
  'Accept': 'application/json',
  'Authorization': 'token',
  'content-type': 'application/json'
};

function executeRequest(fn) {
  return fn()
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response;
    })
    .then(res => res.json());
}

function getRequest(path) {
  return executeRequest(() => fetch(`${ROOT_URL}${path}`, { headers }));
}

function postRequest(path, body) {
  const options = {
    headers,
    method: 'POST',
    body: JSON.stringify(body)
  };
  return executeRequest(() => fetch(`${ROOT_URL}${path}`, options));
}

function deleteRequest(path) {
  const options = {
    headers,
    method: 'DELETE'
  };
  return executeRequest(() => fetch(`${ROOT_URL}${path}`, options));
}

function putRequest(path, body) {
  const options = {
    headers,
    method: 'PUT',
    body: JSON.stringify(body)
  };
  return executeRequest(() => fetch(`${ROOT_URL}${path}`, options));
}

export const Comments = {
  all: (postId) => getRequest(`/posts/${postId}/comments`),
  delete: (id) => deleteRequest(`/comments/${id}`),
  get: (id) => getRequest(`/commenst/${id}`),
  update: (comment) => putRequest(`/comments/${comment.id}`, comment),
  create: (comment) => postRequest('/comments', comment),
  vote: (id, option) => postRequest(`/comments/${id}`, { option })
}

export const Posts = {
  all: () => getRequest(`/posts`),
  get: (id) => getRequest(`/posts/${id}`),
  byCategory: (category) => getRequest(`/${category}/posts`),
  create: (post) => postRequest('/posts', post),
  delete: (id) => deleteRequest(`/posts/${id}`),
  update: (post) => putRequest(`/posts/${post.id}`, post),
  vote: (id, option) => postRequest(`/posts/${id}`, { option })
};

export const Categories = {
  all: () => getRequest('/categories').then(data => data.categories)
};
