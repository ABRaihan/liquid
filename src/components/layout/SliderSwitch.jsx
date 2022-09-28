import style from '../../sass/components/layout/sliderSwitch.module.scss';
import classNames from '../../utils/classNames';

function SliderSwitch({ length, active, setActive }) {
  return (
    <ul className={style.switches}>
      {Array(length)
        .fill(Math.random())
        .map((_, index) => (
          <li
            key={Math.random()}
            className={classNames({
              [style.switches__item]: true,
              [style.active]: index === active,
            })}
            onClick={() => setActive(index)}
          />
        ))}
    </ul>
  );
}

export default SliderSwitch;
