import ChevronIcon from '../../assets/icon/ChevronIcon';
import style from '../../sass/components/layout/viewButton.module.scss';

function ViewButton(props) {
  return (
    <button className={style.btn} type="button">
      View all
      <span className={style.arrow__icon}>
        <ChevronIcon />
      </span>
    </button>
  );
}

export default ViewButton;
