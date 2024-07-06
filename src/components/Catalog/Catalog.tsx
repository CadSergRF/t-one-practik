import Card from "../Card/Card";

import styles from "./Catalog.module.css";

import { mockGoods } from "../../mock/mock.goods";

const Catalog = () => {
  return (
    <section id={"catalog"} className={styles.wrapper} aria-label="section Catalog">
      <h2 className={styles.title}>Catalog</h2>
      <label className={styles.search__label}>
        <input
          type="search"
          className={styles.search__input}
          placeholder="Search by title"
        />
      </label>
      <ul className={styles.cart__list}>
        {mockGoods.map((item) => (
            <Card key={item.item.id} {...item} />
        ))}
      </ul>
      <button className={styles.button} aria-label='show more products'>Show more</button>
    </section>
  );
};

export { Catalog };
