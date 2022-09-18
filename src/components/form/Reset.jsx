import { useState } from 'react';
import withAuth from '../../hoc/withAuth';
import style from '../../sass/components/form/reset.module.scss';
import { postData } from '../../utils/APICalling';
import { formError, passwordMatch } from '../../utils/formError';
import PrimaryButton from '../styled/Buttons';
import Separator from '../styled/Elements';
import AuthErrorMessage from '../styled/ErrorMessage';
import Input from './Input';
import OTPBox from './OTPBox';

function Reset({
  user,
  error,
  setError,
  inputOnChange,
  changeAuthPhase,
  setUser,
  setAuthIsOpen,
  navigate,
}) {
  const [OTPValue, setOTPValue] = useState([]);
  const handleServerRequest = async (password, otp) => {
    const form = new FormData();
    const resetToken = await localStorage.getItem('resetToken');
    form.append('password', password);
    form.append('emailOTP', otp);
    form.append('resetToken', resetToken);
    const response = await postData(
      '/site/data/account/auth/reset',
      null,
      form,
    );
    if (response.Error) {
      setError({ server: true, msg: response.Error });
      return;
    }
    setError({});
    localStorage.removeItem('resetToken');
    setAuthIsOpen(false);
    changeAuthPhase('Sign In');
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const otp = OTPValue.join('');
    const { password, confirmPass } = user;
    // Is OTP Box Empty Check
    if (!otp) {
      setError({ otp: true, msg: 'OTP is required' });
      return;
    }
    // Blank input check
    const hasError = formError({ password });
    if (hasError.status) {
      setError(hasError);
      return;
    }
    // Password match check
    if (!passwordMatch(password, confirmPass)) {
      setError({ confirmPass: true, msg: 'Passwords do not match' });
    }
    handleServerRequest(password, otp);
  };
  return (
    <form className={style.form} onSubmit={handleFormSubmit}>
      <div>
        <p className={style.otp__title}>Enter the 4 digit code send to</p>
        <p className={style.otp__email}>{user.email}</p>
        <OTPBox OTPValue={OTPValue} setOTPValue={setOTPValue} />
        {error.otp && <AuthErrorMessage center>{error.msg}</AuthErrorMessage>}
        <p className={style.new_otp__text}>Request new code</p>
      </div>
      <div className={style.input__group}>
        <Input
          type="password"
          placeholder="Password"
          name="password"
          value={user.password}
          changeFunc={inputOnChange}
          error={error.password}
          msg={error.msg}
        />
        <Input
          type="password"
          placeholder="Confirm Password"
          name="confirmPass"
          value={user.confirmPass}
          changeFunc={inputOnChange}
          error={error.confirmPass}
          msg={error.msg}
        />
      </div>
      <PrimaryButton>Reset</PrimaryButton>
      {error.server && <AuthErrorMessage>{error.msg}</AuthErrorMessage>}
      <Separator />
      <p className={style.footer__text}>
        Don&apos; t have account?
        {' '}
        <span onClick={changeAuthPhase.bind(null, 'Sign Up')}>Sign Up</span>
      </p>
    </form>
  );
}

export default withAuth(Reset);
