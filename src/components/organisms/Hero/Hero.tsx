import clsx from "clsx";
import { ButtonLF } from "../../atoms/ButtonLF/ButtonLF";

import styles from "./Hero.module.css";
import commonStyle from '../../../assets/styles/common.module.css';

const Hero = () => {
  return (
    <section className={clsx(styles.wrapper, commonStyle.alignment)}>
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
          <ButtonLF text="Get to shopping" actionTo='#catalog'/>
        </article>
      </div>
    </section>
  );
};

export { Hero };
