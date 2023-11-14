export const selectToken = state => state.auth?.token;

export const selectName = state => state.auth.user?.name;

export const selectIsRefresh = state => state.auth.isRefresh;

export const selectIsLogin = state => state.auth.isLogin;
