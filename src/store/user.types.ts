import { UserProfile } from '../interfaces/userProfile.interface';

export interface UserPersistentState {
  jwt: string | null;
}

export interface UserState {
  jwt: string | null;
  loginErrorMessage?: string | null;
  registerErrorMessage?: string | null;
  profileErrorMessage?: string | null;
  profile?: UserProfile | null;
}
