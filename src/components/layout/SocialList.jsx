import style from '../../sass/components/layout/socialList.module.scss';
import classNames from '../../utils/classNames';

const styles = {
  sidebar: style.sidebar,
  footer: style.footer,
};
function SocialList({ social, placement }) {
  const defaultStyle = styles[placement] || styles.sidebar;
  return (
    <ul
      className={classNames({
        [style.social__list]: true,
        [defaultStyle]: true,
      })}
    >
      {social.map(({ svg, url }) => (
        <li key={Math.random()}>
          <a
            aria-label="Social Icon"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            dangerouslySetInnerHTML={{ __html: svg }}
          />
        </li>
      ))}
    </ul>
  );
}

export default SocialList;
