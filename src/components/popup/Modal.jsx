import { useContext } from 'react';
import CloseIcon from '../../assets/icon/CloseIcon';
import { DispatchContext } from '../../context/store/store';
import style from '../../sass/components/popup/modal.module.scss';

function Modal({ title, children }) {
  const { setAuthIsOpen } = useContext(DispatchContext);
  return (
    <section className={style.modal}>
      <div className={style.wrapper}>
        <div className={style.top}>
          <p className={style.title}>{title}</p>
          <span className={style.close__icon} onClick={() => setAuthIsOpen(false)}>
            <CloseIcon />
          </span>
        </div>
        <div className={style.body}>{children}</div>
      </div>
    </section>
  );
}
export default Modal;
