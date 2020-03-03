// export const fetchPosts = ({ offset, limit }) => {
//   return $.get({ url: '/api/posts', data: { offset, limit } });
// };

export const fetchPost = postId => {
  return $.get({ url: '/api/posts', data: { id: postId } });
};

export const createPost = data => {
  return $.post({ url: '/api/posts', data, contentType: false, processData: false });
};

export const updatePost = post => {
  return $.ajax({ method: 'PATCH', url: `/api/posts/${post.id}`, data: { post } });
};

export const destroyPost = postId => {
  return $.ajax({ method: 'DELETE', url: `/api/posts/${postId}` });
};

export const togglePostLike = (postId, isLiked) => {
  const method = isLiked ? 'DELETE' : 'POST';
  return $.ajax({ method, url: `/api/posts/${postId}/likes` });
};