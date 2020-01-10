export const selectCurrentUser = ({ entities: { users }, session: { id } }) => users[id];

export const selectSignupErrors = state => state.ui.errors.signup;

export const selectLoginErrors = state => state.ui.errors.login;

export const selectPosts = state => Object.values(state.entities.posts);