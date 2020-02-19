export const fetchUsers = () => {
  return $.get({ url: '/api/users' })
}