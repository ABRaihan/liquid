// import { useContext, useEffect, useRef } from "react";
// import { Context } from "context/store/store";
// import useScreenWidth from "hooks/useScreenWidth";
import style from '../../sass/assets/hamburger.module.scss';
import classNames from '../../utils/classNames';

function Hamburger({ isClose, handleClick }) {
  return (
    <div
      className={classNames({
        [style.wrapper]: true,
        [style.close]: isClose,
      })}
      onClick={handleClick}
    >
      <div className={style.bar} />
      <div className={style.bar} />
      <div className={style.bar} />
    </div>
  );
}

export default Hamburger;
