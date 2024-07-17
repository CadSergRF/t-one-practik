import { Helmet } from "react-helmet-async";

import styles from "./LoginPage.module.css";
import LoginForm from "../../organisms/LoginForm/LoginForm";
import { useAuth } from "../../../hooks/useAuth.hooks";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {

console.log('LoginPage')

  const navigate = useNavigate();
  const {isLoggedIn} = useAuth();

  useEffect(() => {
		if (isLoggedIn) {
			navigate('/');
		}
	}, [isLoggedIn, navigate]);

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
