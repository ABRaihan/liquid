import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/Logo.png';
import PagesList from '../components/layout/PagesList';
import SocialList from '../components/layout/SocialList';
import { StoreContext } from '../context/store/store';
import style from '../sass/layout/footer.module.scss';

function Footer() {
  const { social, pages } = useContext(StoreContext);
  return (
    <section className={style.layout}>
      <div className="container">
        <div className={style.logo__wrapper}>
          <Link to="/">
            <img className={style.logo} src={Logo} alt="Logo" />
          </Link>
        </div>
        <p className={style.description}>
          Curabitur vulputate arcu odio, ac facilisis diam accumsan ut. Ut
          imperdiet et leo in vulputate. Sed eleifend lacus eu sapien sagittis
          imperdiet. Etiam tempor mollis augue, ut tincidunt ex interdum eu.
        </p>
        <SocialList social={social} placement="footer" />
        <PagesList pages={pages} design="footer" />
        <hr className={style.divider} />
        <p className={style.copyright}>&copy; 2022 A. B. Raihan. All rights reserved.</p>
      </div>
    </section>
  );
}

export default Footer;
