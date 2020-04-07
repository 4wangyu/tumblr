// ---------------------- Session
export const selectCurrentUser = ({ users, session }) => users.entities[session.id];

// ---------------------- Users
export const selectUsersByCollection = ({ users }, { collection = 'dashboard' }) => {
  return users.collections[collection].map(userId => users.entities[userId])
};

export const selectUserById = ({ users }, { userId = 1 }) => users.entities[userId];

export const selectUsersByIds = ({ users }, { userIds = [] }) => {
  return userIds.map(userId => users.entities[userId]);
};

// ---------------------- Post
export const selectPostsByCollection = ({ posts }, { collection = 'recommended' }) => {
  return posts.collections[collection].map(postId => posts.entities[postId])
};

export const selectPostById = ({ posts }, { postId = 1 }) => posts.entities[postId];

export const selectPostsByIds = ({ posts }, { postIds = [] }) => {
  return postIds.map(postId => posts.entities[postId]);
};

// ---------------------- Modal
export const selectModal = state => state.ui.modal;