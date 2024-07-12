import styles from "./PreLoader.module.css";

function Preloader() {
  return (
    <div className={styles.preloader}>
      <div className={styles.preloader__container}>
        <span className={styles.loader}></span>
      </div>
    </div>
  );
}

export { Preloader };
