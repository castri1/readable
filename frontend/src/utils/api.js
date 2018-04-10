const ROOT_URL = 'http://localhost:3001';

let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const fetchPosts = () => fetch(`${ROOT_URL}/posts`, { headers })
  .then(res => res.json())
  .then(data => data)

export const fetchPostsByCategory = (category) => fetch(`${ROOT_URL}/${category}/posts`, { headers })
  .then(res => res.json())
  .then(data => data)

export const fetchCategories = () => fetch(`${ROOT_URL}/categories`, { headers })
  .then(res => res.json())
  .then(data => data.categories)
