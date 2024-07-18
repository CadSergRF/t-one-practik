import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../../hooks/redux.hooks";

import { fetchCartByUserId } from "../../../store/reducers/cart.slice";

import { CartIcon } from "../../atoms/CartIcon/CartIcon";
import { NavigationLink } from "../../atoms/NavigationLink/NavigationLink";

import styles from './NavigationMenu.module.css';

type Props = {
  location: "Header" | "Footer";
};

const NavigationMenu = ({ location }: Props) => {
const {isLoggedIn, userData} = useAppSelector((state) => state.userStore)

const dispatch = useAppDispatch();
useEffect(() => {
  if (userData?.id) {
    dispatch(fetchCartByUserId(userData.id))
  }
}, [dispatch, userData.id])

const counter = useAppSelector((state) => state.cartStore.cart.totalProducts)

  return (
    <nav className={styles.wrapper} aria-label="Basic site navigation">
      <ul className={styles.menu}>
        <NavigationLink text="Catalog" link="/#catalog" />
        <NavigationLink text="FAQ" link="/#faq" />
        {location === "Header" && isLoggedIn && (
          <>
            <NavigationLink text="Cart" link="/cart">
              <CartIcon counter={counter} />
            </NavigationLink>
            <NavigationLink text={`${userData.lastName} ${userData.firstName}`} link="" />
          </>
        )}
      </ul>
    </nav>
  );
};

export { NavigationMenu };
