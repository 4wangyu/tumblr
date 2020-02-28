export const fetchUsers = () => {
  return $.get({ url: '/api/users' });
};

export const toggleUserFollow = (userId, isFollowing) => {
  const method = isFollowing ? 'DELETE' : 'POST';
  return $.ajax({ method, url: `/api/users/${userId}/follows` });
};