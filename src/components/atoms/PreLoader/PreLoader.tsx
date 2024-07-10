import styles from "./PreLoader.module.css";

function Preloader() {
  return (
    <div className={styles.preloader}>
      <div className={styles.preloader__container}>
        <span className={styles.preloader__round} />
      </div>
    </div>
  );
}

export { Preloader };
