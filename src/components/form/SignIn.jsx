import withAuth from '../../hoc/withAuth';
import style from '../../sass/components/form/signIn.module.scss';
import { BUSINESS_ID, postData } from '../../utils/APICalling';
import { emailValidation, formError } from '../../utils/formError';
import PrimaryButton from '../styled/Buttons';
import Separator from '../styled/Elements';
import AuthErrorMessage from '../styled/ErrorMessage';
import Input from './Input';

function SignIn({
  user,
  error,
  setError,
  inputOnChange,
  changeAuthPhase,
  setAuthIsOpen,
  setUser,
  navigate,
}) {
  const handleServerRequest = async (email, password) => {
    const form = new FormData();
    form.append('email', email);
    form.append('password', password);
    const response = await postData(
      '/site/data/account/auth/login',
      null,
      form,
    );
    if (response.Error) {
      setError({ server: true, msg: response.Error });
      return;
    }
    localStorage.setItem(`liquid_user_${BUSINESS_ID}`, response.token);
    setError({});
    setUser({ isLogged: true });
    setAuthIsOpen(false);
    navigate('/account', { replace: true });
  };
  const handleFormRequest = (event) => {
    event.preventDefault();
    const { email, password } = user;
    // Validate email
    if (email && !emailValidation(email)) {
      setError({ email: true, msg: 'Email is not valid' });
      return;
    }
    // Blank input check
    const hasError = formError({ email, password });
    if (hasError.status) {
      setError(hasError);
      return;
    }
    // Server request
    handleServerRequest(email, password);
  };
  return (
    <form className={style.form} onSubmit={handleFormRequest}>
      <div className={style.input__group}>
        <Input
          type="text"
          placeholder="Email"
          name="email"
          value={user.email}
          changeFunc={inputOnChange}
          error={error.email}
          msg={error.msg}
        />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          value={user.password}
          changeFunc={inputOnChange}
          error={error.password}
          msg={error.msg}
        />
      </div>
      {error.server && <AuthErrorMessage>{error.msg}</AuthErrorMessage>}
      <p
        className={style.forgot__pass}
        onClick={changeAuthPhase.bind(null, 'Forgot')}
      >
        Forgot Password
      </p>
      <PrimaryButton>Sign In</PrimaryButton>
      <Separator />
      <p className={style.footer__text}>
        Don&apos; t have account?
        {' '}
        <span onClick={changeAuthPhase.bind(null, 'Sign Up')}>Sign Up</span>
      </p>
    </form>
  );
}

export default withAuth(SignIn);
