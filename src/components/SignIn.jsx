import { useState } from 'react';
import style from '../sass/components/signIn.module.scss';
import Input from './Input';

function SignIn() {
  const [user, setUser] = useState({ email: '', password: '' });
  const inputOnChange = (event, setLabelAnim) => {
    const { name, value } = event.target;
    setUser((current) => ({ ...current, [name]: value }));
    value
      ? setLabelAnim({ show: true, color: true })
      : setLabelAnim({ show: false, color: false });
  };
  return (
    <form className={style.form}>
      <div className={style.input__group}>
        <Input
          type="text"
          placeholder="Email"
          name="email"
          value={user.name}
          changeFunc={inputOnChange}
        />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          value={user.password}
          changeFunc={inputOnChange}
        />
      </div>
    </form>
  );
}

export default SignIn;
