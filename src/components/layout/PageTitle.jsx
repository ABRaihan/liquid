import style from '../../sass/components/layout/pageTitle.module.scss';
import { IMG_BASE_URL } from '../../utils/APICalling';

function PageTitle({ title, img, children }) {
  return (
    <div className={style.layout}>
      <div className="container">
        {img && (
          <div className={style.img__wrapper}>
            <img src={`${IMG_BASE_URL}/category/${img}`} alt={title} />
          </div>
        )}
        <h3 className={style.title}>{title}</h3>
        {children}
      </div>
    </div>
  );
}

export default PageTitle;
