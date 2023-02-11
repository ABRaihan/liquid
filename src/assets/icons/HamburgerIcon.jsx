// import { useContext, useEffect, useRef } from "react";
// import { Context } from "context/store/store";
// import useScreenWidth from "hooks/useScreenWidth";
import PropTypes from 'prop-types';
import style from '../../sass/assets/hamburgerIcon.module.scss';
import classNames from '../../utils/classNames';
/**
 * @param {boolean} rotate - boolean
 * @param {function} onClick - function
 * @return {JSX.Element} JSX.Element
 */

export default function HamburgerIcon({ rotate, onClick }) {
  return (
    <button
      type="button"
      className={classNames(style.Hamburger, { [style.rotate]: rotate })}
      onClick={onClick}
    >
      <span className={style.Hamburger__bar} />
      <span className={style.Hamburger__bar} />
      <span className={style.Hamburger__bar} />
    </button>
  );
}
HamburgerIcon.propTypes = {
  rotate: PropTypes.bool,
  onClick: PropTypes.func,
};
HamburgerIcon.defaultProps = {
  rotate: false,
  onClick: null,
};
