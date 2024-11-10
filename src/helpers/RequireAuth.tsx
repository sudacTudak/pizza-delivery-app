import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

export const RequireAuth = ({ children }: { children: ReactNode }) => {
  const token = localStorage.getItem('jwt');

  if (!token) {
    return <Navigate to="/auth/login" replace />;
  }

  return children;
};
