import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DispatchContext, StoreContext } from '../context/store/store';

function withAuth(Component) {
  return ({ setAuthPhase }) => {
    const { formState } = useContext(StoreContext);
    const { setFormUser, setAuthIsOpen, setUser } = useContext(DispatchContext);
    const navigate = useNavigate();
    const [error, setError] = useState({});
    const changeAuthPhase = (value) => {
      value !== 'Verify'
        && value !== 'Reset'
        && setFormUser({ email: '', password: '', confirmPass: '' });
      setAuthPhase(value);
    };
    const inputOnChange = (event, setLabelAnim) => {
      const { name, value } = event.target;
      setFormUser({ [name]: value });
      value
        ? setLabelAnim({ show: true, color: true })
        : setLabelAnim({ show: false, color: false });
    };
    return (
      <Component
        user={formState}
        inputOnChange={inputOnChange}
        changeAuthPhase={changeAuthPhase}
        error={error}
        setError={setError}
        setAuthIsOpen={setAuthIsOpen}
        navigate={navigate}
        setUser={setUser}
      />
    );
  };
}

export default withAuth;
