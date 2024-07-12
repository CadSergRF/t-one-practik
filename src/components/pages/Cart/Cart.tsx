import { Helmet } from "react-helmet-async";

import { useAppSelector } from "../../../hooks/redux.hooks";

import { CartItemsView } from "../../organisms/CartItemsView/CartItemsView";
import { CartTotalView } from "../../molecules/CartTotalView/CartTotalView";

import styles from "./Cart.module.css";

const Cart = () => {
  const { products, ...costCalculation } = useAppSelector(
    (state) => state.cartStore.cart
  );

  return (
    <>
      <Helmet>
        <title>My cart | Goods4you</title>
      </Helmet>
      <section className={styles.wrapper} aria-label="My cart">
        <h1 className={styles.cart__title}>My cart</h1>
        <article className={styles.container}>
          <CartItemsView products={products} />
          <CartTotalView {...costCalculation} />
        </article>
      </section>
    </>
  );
};

export { Cart };
