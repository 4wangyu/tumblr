export const selectAllUsers = state => state.entities.users;

export const selectUserById = (state, { userId }) => state.entities.users[userId];