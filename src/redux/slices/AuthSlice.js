import {createSlice} from '@reduxjs/toolkit';

export const AuthSlice = createSlice({
  name: 'auth',
  initialState: {
    username: '',
    token: '',
  },
  reducers: {
    doLogin: (state, actions) => {
      state.username = actions.payload.username;
      state.token = 'thisIsSomeRandomDummyToken';
    },
    doLogout: (state, actions) => {
      state.username = '';
      state.token = '';
    },
  },
});

export const {doLogin, doLogout} = AuthSlice.actions;

export default AuthSlice.reducer;
