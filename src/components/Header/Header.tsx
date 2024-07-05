import { HashLink } from "react-router-hash-link";

import { CartIcon } from "../UI-kit/CartIcon/CartIcon";

import styles from "./Header.module.css";

const Header = () => {
  // XАРДКОД
  const cartItems = 1;

  return (
    <header className={styles.wrapper}>
      <HashLink smooth to="/" className={styles.logo}>
        Goods4you
      </HashLink>
      <nav className={styles.menu__wrapper}>
        <ul className={styles.menu}>
          <li>
            <HashLink smooth to="/#catalog" className={styles.menu__item}>
              Catalog
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#faq" className={styles.menu__item}>
              FAQ
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/cart" className={styles.cart__container}>
              <p className={styles.menu__item}>
                Cart
              </p>
              <CartIcon counter={cartItems}/>
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/" className={styles.menu__item}>
              Johnson Smith
            </HashLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Header };
