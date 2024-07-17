import { useForm, SubmitHandler } from "react-hook-form";
import clsx from "clsx";

import { loginApi } from "../../../store/api/login.api";

import { TLoginData } from "../../../Types/login.type";

import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginData>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const [loginUser] = loginApi.useLoginUserMutation();

  const onSubmit: SubmitHandler<TLoginData> = (userData) => {
    loginUser(userData);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <label className={styles.input__wrapper} htmlFor="username">
        <input
          id="username"
          className={styles.input}
          placeholder="Login"
          {...register("username", { required: true, maxLength: 30 })}
        />
        {errors.username && errors.username.type === "required" && (
          <span className={styles.error}>This is required</span>
        )}
        {errors.username && errors.username.type === "maxLength" && (
          <span className={styles.error}>Max length exceeded</span>
        )}
      </label>

      <label className={styles.input__wrapper} htmlFor="password">
        <input
          id="password"
          type="password"
          className={styles.input}
          placeholder="Password"
          {...register("password", { required: true, maxLength: 30 })}
        />
        {errors.password && errors.password.type === "required" && (
          <span className={styles.error}>This is required</span>
        )}
        {errors.password && errors.password.type === "maxLength" && (
          <span className={styles.error}>Max length exceeded</span>
        )}
      </label>

      <button className={styles.btn__submit} type="submit">
        Sign in
        {errors?.root?.serverError.type === "serverError" && (
          <span className={clsx(styles.error, styles.error_btn)}>
            {errors?.root?.serverError.message}
          </span>
        )}
      </button>
    </form>
  );
};

export default LoginForm;
