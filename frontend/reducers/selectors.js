export const selectCurrentUser = ({ entities: { users }, session: { id } }) => users[id];

export const selectSignupErrors = state => state.ui.errors.signup;

export const selectLoginErrors = state => state.ui.errors.login;

export const selectPostErrors = state => state.ui.errors.post;

export const selectPosts = state => Object.values(state.entities.posts);

// export const selectPost = postId => state.entities.posts[postId];

export const selectUserById = userId => state.entities.users[userId];