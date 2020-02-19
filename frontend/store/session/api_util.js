export const signup = user => {
  return $.post({ url: '/api/users', data: { user } })
}

export const login = user => {
  return $.post({ url: '/api/sessions', data: { user } })
}

export const logout = () => {
  return $.ajax({ method: 'DELETE', url: '/api/sessions' })
}