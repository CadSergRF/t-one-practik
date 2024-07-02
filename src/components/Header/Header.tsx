import { Link } from "react-router-dom";

import { CartIcon } from "../../assets/svgComponents/CartIcon/CartIcon";

import styles from "./Header.module.css";

const Header = () => {
  // XАРДКОД
  const cartItems = 1;

  return (
    <header className={styles.wrapper}>
      <Link to="/" className={styles.logo}>
        Goods4you
      </Link>
      <nav>
        <ul className={styles.menu}>
          <li>
            <Link to="/catalog" className={styles.menu__item}>
              Catalog
            </Link>
          </li>
          <li>
            <Link to="/faq" className={styles.menu__item}>
              FAQ
            </Link>
          </li>
          <li>
            <Link to="/cart" className={styles.cart__container}>
              <p className={styles.menu__item}>
                Cart
              </p>
              <CartIcon counter={String(cartItems)} />
            </Link>
          </li>
          <li>
            <Link to="/" className={styles.menu__item}>
              Johnson Smith
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Header };
