// ---------------------- Users
export const selectAllUsers = state => state.entities.users;

export const selectUserById = (state, { userId }) => state.entities.users[userId];

// ---------------------- Session
export const selectCurrentUser = ({ entities: { users }, session: { id } }) => users[id];

// ---------------------- Post
export const selectAllPosts = state => Object.values(state.entities.posts);

// ---------------------- Post
export const selectModal = state => state.ui.modal;