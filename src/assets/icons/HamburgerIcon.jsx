// import { useContext, useEffect, useRef } from "react";
// import { Context } from "context/store/store";
// import useScreenWidth from "hooks/useScreenWidth";
import PropTypes from 'prop-types';
import style from '../../sass/assets/hamburgerIcon.module.scss';
import classNames from '../../utils/classNames';
/**
 * hamburger icon for open & close menubar
 * @param {boolean} rotate
 * @callback onClick
 * @return {JSX.Element}
 */

export default function HamburgerIcon({ rotate, onClick }) {
  return (
    <div
      className={classNames(style.Hamburger, { [style.rotate]: rotate })}
      onClick={onClick}
    >
      <div className={style.Hamburger__bar} />
      <div className={style.Hamburger__bar} />
      <div className={style.Hamburger__bar} />
    </div>
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
