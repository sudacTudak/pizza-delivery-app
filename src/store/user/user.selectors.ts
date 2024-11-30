import { RootState } from '../store';

export const selectUserState = (state: RootState) => state.user;
export const selectUserProfile = (state: RootState) => state.user.profile;
