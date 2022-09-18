import { useState } from 'react';
import Forgot from '../form/Forgot';
import Reset from '../form/Reset';
import SignIn from '../form/SignIn';
import SignUp from '../form/SignUp';
import Verify from '../form/Verify';
import Modal from './Modal';

function Authentication({ authIsOpen }) {
  const [authPhase, setAuthPhase] = useState('Sign In');
  return (
    authIsOpen && (
    <Modal title={authPhase}>
      {authPhase === 'Sign In' && <SignIn setAuthPhase={setAuthPhase} />}
      {authPhase === 'Sign Up' && <SignUp setAuthPhase={setAuthPhase} />}
      {authPhase === 'Verify' && <Verify setAuthPhase={setAuthPhase} />}
      {authPhase === 'Forgot' && <Forgot setAuthPhase={setAuthPhase} />}
      {authPhase === 'Reset' && <Reset setAuthPhase={setAuthPhase} />}
    </Modal>
    )
  );
}

export default Authentication;
