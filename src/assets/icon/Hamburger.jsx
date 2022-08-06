// import { useContext, useEffect, useRef } from "react";
// import { Context } from "context/store/store";
// import useScreenWidth from "hooks/useScreenWidth";
import style from '../../sass/assets/hamburger.module.scss';

function Hamburger() {
  return (
    <div className={style.hamburger}>
      <div className={style.bar} />
      <div className={style.bar} />
      <div className={style.bar} />
    </div>
  );
}

export default Hamburger;
