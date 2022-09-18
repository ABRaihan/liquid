import withAuth from '../../hoc/withAuth';
import style from '../../sass/components/form/forgot.module.scss';
import { postData } from '../../utils/APICalling';
import { emailValidation, formError } from '../../utils/formError';
import PrimaryButton from '../styled/Buttons';
import Separator from '../styled/Elements';
import Input from './Input';

function Forgot({ user, error, setError, inputOnChange, changeAuthPhase }) {
  const handleServerRequest = async (email) => {
    const form = new FormData();
    form.append('email', email);
    const response = await postData(
      '/site/data/account/auth/forgot',
      null,
      form,
    );
    if (response.Error) {
      setError({ server: true, msg: response.Error });
    }
    setError({});
    localStorage.setItem('resetToken', response.resetToken);
    changeAuthPhase('Reset');
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const { email } = user;
    // Validate email
    if (email && !emailValidation(email)) {
      setError({ email: true, msg: 'Email is not valid' });
      return;
    }
    // Blank input check
    const hasError = formError({ email });
    if (hasError.status) {
      setError(hasError);
    }
    // Server request
    handleServerRequest(email);
  };
  return (
    <form className={style.form} onSubmit={handleFormSubmit}>
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
      </div>
      <PrimaryButton>Submit</PrimaryButton>
      <Separator />
      <p className={style.footer__text}>
        Sign in Instead?
        {' '}
        <span onClick={changeAuthPhase.bind(null, 'Sign In')}>Sign In</span>
      </p>
    </form>
  );
}

export default withAuth(Forgot);
