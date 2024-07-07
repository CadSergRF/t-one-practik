import { Button } from "react-scroll";

import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <p className={styles.back__text}>Goods4you</p>
        <article className={styles.content}>
          <h2 className={styles.header}>
            Any products from famous brands with worldwide delivery
          </h2>
          <p className={styles.text}>
            We sell smartphones, laptops, clothes, shoes and many other products
            at low prices
          </p>
          <Button
            to="catalog"
            smooth
            className={styles.button}
            aria-label="Go to the product catalog"
          >
            Get to shopping
          </Button>
        </article>
      </div>
    </section>
  );
};

export { Hero };
