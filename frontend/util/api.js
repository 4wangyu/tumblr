// --------------------------------- Session
export const signup = user => {
  return $.post({ url: '/api/users', data: { user } })
}

export const login = user => {
  return $.post({ url: '/api/sessions', data: { user } })
}

export const logout = () => {
  return $.ajax({ method: 'DELETE', url: '/api/sessions' })
}

export const fetchPosts = () => {
  return $.get({ url: '/api/posts' })
}

// --------------------------------- Users
export const fetchUsers = () => {
  return $.get({ url: '/api/users' })
}

// --------------------------------- Posts
export const fetchPost = postId => {
  return $.get({ url: '/api/posts', data: { id: postId } })
}

export const createPost = post => {
  return $.post({ url: '/api/posts', data: { post } })
}

export const updatePost = post => {
  return $.ajax({ method: 'PATCH', url: `/api/posts/${post.id}`, data: { post } })
}