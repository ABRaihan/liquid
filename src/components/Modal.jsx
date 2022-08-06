import CloseIcon from '../assets/icon/CloseIcon';
import style from '../sass/components/modal.module.scss';

function Modal({ title, children }) {
  return (
    <section className={style.modal}>
      <div className={style.wrapper}>
        <div className={style.top}>
          <p className={style.title}>{title}</p>
          <span><CloseIcon /></span>
        </div>
        <div className={style.body}>{children}</div>
      </div>
    </section>
  );
}

export default Modal;
