export const fetchPost = postId => {
  return $.get({ url: '/api/posts', data: { id: postId } });
};

export const createPost = data => {
  return $.post({ url: '/api/posts', data, contentType: false, processData: false });
};

export const updatePost = (postId, data) => {
  return $.ajax({ method: 'PATCH', url: `/api/posts/${postId}`, data, contentType: false, processData: false });
};

export const destroyPost = postId => {
  return $.ajax({ method: 'DELETE', url: `/api/posts/${postId}` });
};

export const togglePostLike = (postId, isLiked) => {
  const method = isLiked ? 'DELETE' : 'POST';
  return $.ajax({ method, url: `/api/posts/${postId}/likes` });
};

export const purgePostAttachment = (postId, attachmentId) => {
  return $.ajax({ method: 'DELETE', url: `/api/posts/${postId}/purge_attachment`, data: { attachment_id: attachmentId } });
};

export const fetchPostsCollection = (collection, { offset, limit }) => {
  return $.get({
    url: `/api/collections/${collection}`,
    data: { offset, limit }
  });
};