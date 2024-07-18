import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { useAppSelector } from "../../../hooks/redux.hooks";

import LoginForm from "../../organisms/LoginForm/LoginForm";

import styles from "./LoginPage.module.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAppSelector((state) => state.userStore);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn]);

  return (
    <>
      {!isLoggedIn && (
        <>
          <Helmet>
            <title>Sign in | Goods4you</title>
          </Helmet>
          <section className={styles.wrapper} aria-label="Login form">
            <h1>Sign in</h1>
            <LoginForm />
          </section>
        </>
      )}
    </>
  );
};

export { LoginPage };
