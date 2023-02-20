export const selectAuthToken = state => state.auth.token;

export const selectUser = state => state.auth.user;

export const selectUserEmail = state => state.auth.user.email;

export const selectRefresh = state => state.auth.isRefreshing;

export const selectStatus = state => state.auth.status;