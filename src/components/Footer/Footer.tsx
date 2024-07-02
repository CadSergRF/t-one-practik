import { Link } from 'react-router-dom';

import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <Link to="/" className={styles.logo}>
        Goods4you
      </Link>
      <nav>
        <ul className={styles.menu}>
          <li>
            <Link to="/catalog" className={styles.menu__item}>
              Catalog
            </Link>
          </li>
          <li>
            <Link to="/faq" className={styles.menu__item}>
              FAQ
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export { Footer };
