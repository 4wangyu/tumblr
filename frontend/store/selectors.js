// ---------------------- Users
export const selectAllUsers = state => state.entities.users;

export const selectUserById = (state, { userId }) => state.entities.users[userId];

// ---------------------- Session
export const selectCurrentUser = ({ entities: { users }, session: { id } }) => users[id];

// ---------------------- Post
export const selectAllPosts = state => Object.values(state.entities.posts);

export const selectPostById = (state, { postId }) => state.entities.posts[postId];

// ---------------------- Modal
export const selectModal = state => state.ui.modal;

// ---------------------- Reblog
export const selectAllReblogs = state => Object.values(state.entities.reblogs);

// ---------------------- Sidebar
export const selectRecommendedUsers = state => state.sidebar.recommendedUserIds.map(id => state.entities.users[id]);

export const selectRadarPostAndUser = ({ sidebar: { radarPostId }, entities: { users, posts } }) => {
  const radarPost = posts[radarPostId];
  const radarUser = radarPost && users[radarPost.userId];
  return { radarPost, radarUser }
};