import { Helmet } from "react-helmet-async";

// import { CartTotalView } from "../../molecules/CartTotalView/CartTotalView";

import styles from "./Cart.module.css";
// import CartLayout from "../../templates/CartLayout/CartLayout";
// import { CartItemsView } from "../../organisms/CartItemsView/CartItemsView";


const Cart = () => {
  
  return (
    <>
      <Helmet>
        <title>My cart | Goods4you</title>
      </Helmet>
      <section className={styles.wrapper} aria-label="My cart">
        <h1 className={styles.cart__title}>My cart</h1>
        {/* <article className={styles.container}>
          <CartItemsView />
          <CartTotalView cartQuantity={3}/>
        </article> */}
        {/* <CartLayout /> */}
      </section>
    </>
  );
};

export { Cart };
