import { Helmet } from "react-helmet-async";

import { useAppSelector } from "../../../hooks/redux.hooks";

import { CartItemsView } from "../../organisms/CartItemsView/CartItemsView";
import { CartTotalView } from "../../molecules/CartTotalView/CartTotalView";

import styles from "./Cart.module.css";
import { Preloader } from "../../atoms/PreLoader/PreLoader";
import { Link } from "react-router-dom";

const Cart = () => {
  const { products, ...costCalculation } = useAppSelector(
    (state) => state.cartStore.cart
  );
  const fetchingStatus = useAppSelector((state) => state.cartStore.status);

  return (
    <>
      <Helmet>
        <title>My cart | Goods4you</title>
      </Helmet>
      {((fetchingStatus !== ("LoadingCart" || "CartError")) && !!(products.length === 0)) && (
        <div className={styles.error__load}>
          <p>Your cart is empty</p>
          <Link to="/" replace className={styles.link}>
            go to MainPage
          </Link>
        </div>
      )}
      {(fetchingStatus === "LoadingCart") && <Preloader />}
      {(fetchingStatus === "CartError") && (
        <div className={styles.error__load}>
          <p>Request error. Failed to upload...</p>
          <Link to="/" replace className={styles.link}>
            go to MainPage
          </Link>
        </div>
      )}
      {(fetchingStatus !== ("LoadingCart" || "CartError")) && (<section className={styles.wrapper} aria-label="My cart">
        <h1 className={styles.cart__title}>My cart</h1>
        <article className={styles.container}>
          <CartItemsView products={products} />
          <CartTotalView {...costCalculation} />
        </article>
      </section>)}
    </>
  );
};

export { Cart };
