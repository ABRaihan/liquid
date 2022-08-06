import { useState } from 'react';
import EyeIcon from '../assets/icon/EyeIcon';
import style from '../sass/components/input.module.scss';
import classNames from '../utils/classNames';

function Input({ type, placeholder, name, value, changeFunc }) {
  const [labelAnim, setLabelAnim] = useState({
    show: false,
    color: false,
  });
  const [defaultType, setDefaultType] = useState(type);
  const [showPassword, setShowPassword] = useState(false);
  const inputBlur = () => {
    setLabelAnim({ show: false, color: false });
  };
  const inputFocus = (event) => {
    event.target.value
      ? setLabelAnim({ show: true, color: true })
      : setLabelAnim({ show: true, color: false });
  };
  const typeChanger = () => {
    setDefaultType((current) => (current === 'password' ? 'text' : 'password'));
    setShowPassword((current) => !current);
  };
  return (
    <div className={style.input__box}>
      <label
        className={classNames({
          [style.label]: true,
          [style.label__show]: labelAnim.show,
          [style.label__color]: labelAnim.color,
        })}
        htmlFor={placeholder}
      >
        {placeholder}
      </label>
      <input
        className={classNames({
          [style.input]: true,
          [style.input_border__color]: labelAnim.color,
        })}
        type={defaultType}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={(event) => changeFunc(event, setLabelAnim)}
        onBlur={inputBlur}
        onFocus={inputFocus}
      />
      {type === 'password' && (
        <button
          onClick={typeChanger}
          className={classNames({
            [style.button]: true,
            [style.password__show]: showPassword,
          })}
          type="button"
        >
          <EyeIcon />
        </button>
      )}
    </div>
  );
}

export default Input;
