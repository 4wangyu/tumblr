// ---------------------- Session
export const selectCurrentUser = ({ users, session }) => users.entities[session.id];

// ---------------------- Users
export const selectAllUsers = ({ users }) => Object.values(users.entities);

export const selectUsersByCollection = ({ users }, { collection = 'recommended' }) => {
  return Array.from(users.collections[collection]).map(userId => users.entities[userId])
};

export const selectUserById = ({ users }, { userId }) => users.entities[userId];

export const selectUsersByIds = ({ users }, { userIds = [] }) => {
  return userIds.map(userId => users.entities[userId]);
};

// ---------------------- Post
export const selectPostsByCollection = ({ posts }, { collection = 'dashboard' }) => {
  return Array.from(posts.collections[collection]).map(postId => posts.entities[postId])
};

export const selectPostById = ({ posts }, { postId }) => posts.entities[postId];

export const selectPostsByIds = ({ posts }, { postIds = [] }) => {
  return postIds.map(postId => posts.entities[postId]);
};

// ---------------------- Modal
export const selectModal = state => state.ui.modal;