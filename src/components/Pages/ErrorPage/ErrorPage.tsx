import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import styles from "./ErrorPage.module.css";

const ErrorPage = () => {
  return (
    <>
      <Helmet>
        <title>Error | Goods4you</title>
      </Helmet>
      <div className={styles.wrapper}>
        <div>
          <p className={styles.text}>{window.location.href}</p>
          <p className={styles.text}>the page does not exist</p>
          <Link to="/" replace className={styles.link}>
            to MainPage
          </Link>
        </div>
      </div>
    </>
  );
};

export { ErrorPage };
