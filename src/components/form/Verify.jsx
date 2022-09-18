import { useState } from 'react';
import withAuth from '../../hoc/withAuth';
import style from '../../sass/components/form/verify.module.scss';
import { BUSINESS_ID, postData } from '../../utils/APICalling';
import PrimaryButton from '../styled/Buttons';
import Separator from '../styled/Elements';
import AuthErrorMessage from '../styled/ErrorMessage';
import OTPBox from './OTPBox';

function Verify({
  user,
  error,
  setError,
  changeAuthPhase,
  setAuthIsOpen,
  setUser,
  navigate,
}) {
  const [OTPValue, setOTPValue] = useState([]);
  const handleOTPSubmit = async (event) => {
    const otp = OTPValue.join('');
    if (!otp) {
      setError({ otp: true, msg: 'OTP is required' });
      return;
    }
    const form = new FormData();
    form.append('email', user.email);
    form.append('emailOTP', OTPValue.join(''));
    const response = await postData(
      '/site/data/account/auth/verify',
      null,
      form,
    );
    if (response.Error) {
      setError({ server: true, msg: response.Error });
      return;
    }
    localStorage.setItem(`liquid_user_${BUSINESS_ID}`, response.token);
    setUser({ isLogged: true });
    setAuthIsOpen(false);
    navigate('/account', { replace: true });
  };
  return (
    <div className={style.otp}>
      <p className={style.otp__title}>Enter the 4 digit code send to</p>
      <p className={style.otp__email}>{user.email}</p>
      <OTPBox OTPValue={OTPValue} setOTPValue={setOTPValue} />
      {error.otp && <AuthErrorMessage>{error.msg}</AuthErrorMessage>}
      <p className={style.new_otp__text}>Request new code</p>
      <PrimaryButton onClick={handleOTPSubmit}> Verify </PrimaryButton>
      {error.server && <AuthErrorMessage>{error.msg}</AuthErrorMessage>}
      <Separator />
      <p className={style.footer__text}>
        Sign in Instead?
        {' '}
        <span onClick={changeAuthPhase.bind(null, 'Sign In')}>Sign In</span>
      </p>
    </div>
  );
}

export default withAuth(Verify);
