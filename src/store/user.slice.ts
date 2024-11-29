import { createSlice } from '@reduxjs/toolkit';
import { loadState } from '../helpers/storage';
import { UserPersistentState, UserState } from './user.types';
import { loadUserProfile, login, register } from './user.thunks';

export const JWT_PERSISTENT_STATE = 'userData';

const initialState: UserState = {
  jwt: loadState<UserPersistentState>(JWT_PERSISTENT_STATE)?.jwt ?? null
};

export const userSlice = createSlice({
  name: '@@user',
  initialState,
  reducers: {
    logout: (state) => {
      state.jwt = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loginErrorMessage = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        if (!action.payload) {
          return;
        }
        state.jwt = action.payload.access_token;
      })
      .addCase(login.rejected, (state, action) => {
        state.loginErrorMessage = action.error.message;
      })
      .addCase(register.pending, (state) => {
        state.registerErrorMessage = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        if (!action.payload) {
          return;
        }
        state.jwt = action.payload.access_token;
      })
      .addCase(register.rejected, (state, action) => {
        state.registerErrorMessage = action.error.message;
      })
      .addCase(loadUserProfile.pending, (state) => {
        state.profileErrorMessage = null;
      })
      .addCase(loadUserProfile.fulfilled, (state, action) => {
        if (!action.payload) {
          return;
        }
        state.profile = action.payload;
      })
      .addCase(loadUserProfile.rejected, (state, action) => {
        state.profile = null;
        state.profileErrorMessage = action.error.message;
      });
  }
});

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;
