import axios, { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { GetUserProfileResponse } from '../../interfaces/getUserProfile.response';
import { LoginDTO, RegisterDTO } from '../../interfaces/auth.dto';
import { AuthResponse } from '../../interfaces/auth.response';

import { API_HOST } from '../../helpers/API';
import { UserProfile } from '../../interfaces/userProfile.interface';
import { RootState } from '../store';

export const loadUserProfile = createAsyncThunk<
  UserProfile | undefined,
  void,
  { state: RootState }
>('@@user/getProfile', async (_, thunkApi) => {
  try {
    const jwt = thunkApi.getState().user.jwt;

    const { data } = await axios.get<GetUserProfileResponse>(
      `${API_HOST}/user/profile`,
      { headers: { Authorization: `Bearer ${jwt}` } }
    );

    const { passwordHash, restoreToken, ...profile } = data;

    return profile;
  } catch (err) {
    if (err instanceof AxiosError) {
      throw new Error(err.response?.data.message);
    }
  }
});

export const login = createAsyncThunk(
  '@@user/login',
  async (params: LoginDTO) => {
    try {
      const { data } = await axios.post<AuthResponse>(
        `${API_HOST}/auth/login`,
        params
      );
      return data;
    } catch (err) {
      if (err instanceof AxiosError) {
        throw new Error(err.response?.data.message);
      }
    }
  }
);

export const register = createAsyncThunk(
  '@@user/register',
  async (params: RegisterDTO) => {
    try {
      const { data } = await axios.post<AuthResponse>(
        `${API_HOST}/auth/register`,
        params
      );
      return data;
    } catch (err) {
      if (err instanceof AxiosError) {
        throw new Error(err.response?.data.message);
      }
    }
  }
);
