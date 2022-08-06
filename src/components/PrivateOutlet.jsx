import { Navigate, Outlet } from 'react-router-dom';
import isLogged from '../utils/isLogged';

function PrivateOutlet() {
  const login = isLogged();
  return login ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateOutlet;
