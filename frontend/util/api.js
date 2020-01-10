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

export const fetchPost = postId => {
  return $.get({ url: '/api/posts', data: { id: postId } })
}