import { Helmet } from "react-helmet-async";

import { CartTotalView } from "../../molecules/CartTotalView/CartTotalView";

import styles from "./Cart.module.css";
import { CartItemsView } from "../../organisms/CartItemsView/CartItemsView";
import { useAppSelector } from "../../../hooks/redux.hooks";


const Cart = () => {

  const {products, ...costCalculation } = useAppSelector((state) => state.cartStore.cart)
  
  return (
    <>
      <Helmet>
        <title>My cart | Goods4you</title>
      </Helmet>
      <section className={styles.wrapper} aria-label="My cart">
        <h1 className={styles.cart__title}>My cart</h1>
        <article className={styles.container}>
          <CartItemsView products={products}/>
          <CartTotalView {...costCalculation}/>
        </article>
      </section>
    </>
  );
};

export { Cart };
