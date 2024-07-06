import { HashLink } from "react-router-hash-link";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <HashLink smooth to="/#top" className={styles.logo} aria-label="Go to the main page">
        Goods4you
      </HashLink>
      <nav aria-label="page navigation">
        <ul className={styles.menu}>
          <li>
            <HashLink
              smooth
              to="/#catalog"
              className={styles.menu__item}
              aria-label="Go to the catalog"
            >
              Catalog
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              to="/#faq"
              className={styles.menu__item}
              aria-label="Go to the FAQ section"
            >
              FAQ
            </HashLink>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export { Footer };
