import { HashLink } from "react-router-hash-link";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <HashLink smooth to="/#top" className={styles.logo}>
        Goods4you
      </HashLink>
      <nav>
        <ul className={styles.menu}>
          <li>
            <HashLink smooth to="/#catalog" className={styles.menu__item}>
              Catalog
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#faq" className={styles.menu__item}>
              FAQ
            </HashLink>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export { Footer };
