import React from 'react';
import { Link } from 'react-router-dom';
import ChevronIcon from '../../assets/icon/ChevronIcon';
import style from '../../sass/components/layout/breadcrumb.module.scss';
import { isLastElement } from '../../utils/checkerFunc';

function Breadcrumb({ paths, clickHandler }) {
  return (
    <ul className={style.list}>
      {paths.map(({ name, path }, index) => (
        <React.Fragment key={Math.random()}>
          <li className={style.list__item}>
            <Link className={style.list__link} to={path}>{name}</Link>
          </li>
          {!isLastElement(paths, index) && (
            <li className={style.list__item}>
              <ChevronIcon />
            </li>
          )}
        </React.Fragment>
      ))}
    </ul>
  );
}

export default Breadcrumb;
