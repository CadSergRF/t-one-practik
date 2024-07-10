import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux.hooks";
import clsx from "clsx";

import { fetchCartByUserId } from "../../../store/reducers/cart.slice";

import { HeaderFooterLayout } from "../../templates/HeaderFooterLayout/HeaderFooterLayout";
import { MainLogo } from "../../atoms/MainLogo/MainLogo";
import { NavigationMenu } from "../NavigationMenu/NavigationMenu";
import { NavigationLink } from "../../atoms/NavigationLink/NavigationLink";
import { CartIcon } from "../../atoms/CartIcon/CartIcon";

import styles from "./Header.module.css";
import commonStyle from "../../../assets/styles/common.module.css";

import { fakeUserId } from "../../../mock/mock.user";

const Header = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCartByUserId(fakeUserId));
  }, [dispatch]);

  const cartValue = useAppSelector(
    (state) => state.cartStore.cart.products.length
  );

  return (
    <header className={clsx(styles.wrapper, commonStyle.alignment)}>
      <HeaderFooterLayout>
        <MainLogo />
        <NavigationMenu>
          <NavigationLink text="Catalog" link="/#catalog" />
          <NavigationLink text="FAQ" link="/#faq" />
          <NavigationLink text="Cart" link="/cart">
            <CartIcon counter={cartValue} />
          </NavigationLink>
          <NavigationLink text="Johnson Smith" link="" />
        </NavigationMenu>
      </HeaderFooterLayout>
    </header>
  );
};

export { Header };
