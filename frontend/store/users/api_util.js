export const toggleUserFollow = (userId, isFollowing) => {
  const method = isFollowing ? 'DELETE' : 'POST';
  return $.ajax({ method, url: `/api/users/${userId}/follows` });
};

export const fetchUser = userId => {
  return $.get({ url: `/api/users/${userId}` });
};

export const fetchUsersCollection = (collection, { offset, limit }) => {
  return $.get({
    url: `/api/users/${collection}`,
    data: { offset, limit }
  });
};