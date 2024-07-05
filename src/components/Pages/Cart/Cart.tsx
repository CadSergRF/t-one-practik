import { FormEvent } from "react";
import { Helmet } from "react-helmet";
import clsx from "clsx";

import { CartItem } from "../../CartItem/CartItem";

import styles from "./Cart.module.css";

import { mockCart } from "../../../mock/mock.cart";

const Cart = () => {
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
  };

  const productForOrder = mockCart.filter((item) => item.quantity > 0);

  const priceWord = productForOrder.length > 0 ? "items" : "item";

  return (
    <>
    <Helmet>
        <title>My cart | Goods4you</title>
        <meta
          name="description"
          content="Any products from famous brands with worldwide delivery"
        />
      </Helmet>
    <section className={styles.wrapper}>
      <h2 className={styles.cart__title}>My cart</h2>
      <article className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <ul className={styles.form__list}>
            {mockCart.map((item) => (
              <CartItem key={item.item.id} {...item} />
            ))}
          </ul>
        </form>
        <div className={styles.total}>
          <div className={styles.total__item}>
            <p className={styles.total__count}>Total count</p>
            <p className={clsx(styles.total__count, styles.total__count_value)}>
              {productForOrder.length}&#160;{priceWord}
            </p>
          </div>
          <div className={clsx(styles.total__item, styles.total__item_style)}>
            <p className={styles.total__brutto}>Price without discount</p>
            <p
              className={clsx(styles.total__brutto, styles.total__brutto_value)}
            >
              700&#36;
            </p>
          </div>
          <div className={styles.total__item}>
            <p className={styles.total__netto}>Total price</p>
            <p className={clsx(styles.total__netto, styles.total__netto_value)}>
              590&#36;
            </p>
          </div>
        </div>
      </article>
    </section>
    </>
  );
};

export { Cart };
