import { HashLink } from "react-router-hash-link";

import styles from "./MainLogo.module.css";

const MainLogo = () => {
  return (
    <HashLink
      smooth
      to="/"
      className={styles.logo}
      aria-label="Go to the main page"
    >
      Goods4you
    </HashLink>
  );
};

export { MainLogo };
