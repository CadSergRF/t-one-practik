import { Helmet } from "react-helmet-async";

import styles from "./LoginPage.module.css";
import LoginForm from "../../organisms/LoginForm/LoginForm";

const LoginPage = () => {

  return (
    <>
      <Helmet>
        <title>Sign in | Goods4you</title>
      </Helmet>
      <section className={styles.wrapper} aria-label="Login form">
        <h1>Sign in</h1>
        <LoginForm />
      </section>
    </>
  );
};

export { LoginPage };
