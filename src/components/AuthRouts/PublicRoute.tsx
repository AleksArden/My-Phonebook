import { useAppSelector } from 'redux/hooks/hooks';
import { Navigate, Outlet } from 'react-router-dom';
import { selectAuthToken } from 'redux/auth/auth.selector';

export const PublicRoute = () => {
  const token = useAppSelector(selectAuthToken);
  return token ? <Navigate to="/contacts" /> : <Outlet />;
};
