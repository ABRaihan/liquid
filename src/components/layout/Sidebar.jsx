import CloseIcon from '../../assets/icon/CloseIcon';
import style from '../../sass/components/layout/sidebar.module.scss';
import classNames from '../../utils/classNames';

const sidebarShow = {
  left: { left: 0 },
  right: { right: 0 },
};
const overlayShow = {
  left: { right: 0 },
  right: { left: 0 },
};

function Sidebar({
  animation,
  handleClick,
  closeIcon,
  position = 'left',
  children,
}) {
  return (
    <aside
      className={classNames({
        [style.wrapper]: true,
        [style[`sidebar__${position}`]]: Boolean(position),
      })}
      style={animation ? sidebarShow[position] : {}}
    >
      <div
        className={classNames({
          [style.close__icon]: true,
          [style.close_icon__show]: closeIcon,
        })}
      >
        <span onClick={handleClick}>
          <CloseIcon />
        </span>
      </div>
      {children}
      <div
        className={classNames({
          [style.overlay]: true,
          [style[`overlay__${position}`]]: Boolean(position),
        })}
        style={animation ? overlayShow[position] : {}}
        onClick={handleClick}
      />
    </aside>
  );
}

export default Sidebar;
