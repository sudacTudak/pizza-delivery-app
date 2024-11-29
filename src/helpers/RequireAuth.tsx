import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../hooks/redux-hooks';
import { selectUserState } from '../store/user.selectors';

export const RequireAuth = ({ children }: { children: ReactNode }) => {
  const { jwt } = useAppSelector(selectUserState);

  if (!jwt) {
    return <Navigate to="/auth/login" replace />;
  }

  return children;
};
