import { useContext, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { DispatchContext } from '../../context/store/store';

function PrivateOutlet({ isLogged }) {
  const { setAuthIsOpen } = useContext(DispatchContext);
  useEffect(() => {
    !isLogged && setAuthIsOpen(true);
  }, []);
  return isLogged ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateOutlet;
