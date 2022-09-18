import withAuth from '../../hoc/withAuth';
import style from '../../sass/components/form/signUp.module.scss';
import { postData } from '../../utils/APICalling';
import { emailValidation, formError, passwordMatch } from '../../utils/formError';
import PrimaryButton from '../styled/Buttons';
import Separator from '../styled/Elements';
import AuthErrorMessage from '../styled/ErrorMessage';
import Input from './Input';

function SignUp({ user, error, setError, inputOnChange, changeAuthPhase }) {
  const handleServerRequest = async (email, password) => {
    const form = new FormData();
    form.append('email', email);
    form.append('password', password);
    const response = await postData(
      '/site/data/account/auth/signup',
      null,
      form,
    );
    if (response.Error) {
      setError({ server: true, msg: response.Error });
      return;
    }
    changeAuthPhase('Verify');
    setError({});
  };
  const handleFormRequest = (event) => {
    event.preventDefault();
    const { email, password, confirmPass } = user;
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

    // Password match check
    if (!passwordMatch(password, confirmPass)) {
      setError({ confirmPass: true, msg: 'Passwords do not match' });
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
      <PrimaryButton>Sign Up</PrimaryButton>
      {error.server && <AuthErrorMessage>{error.msg}</AuthErrorMessage>}
      <Separator />
      <p className={style.footer__text}>
        Already have an account?
        {' '}
        <span onClick={changeAuthPhase.bind(null, 'Sign In')}>Sign In</span>
      </p>
    </form>
  );
}

export default withAuth(SignUp);
