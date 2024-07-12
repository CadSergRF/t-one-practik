import { useEffect } from "react";
import clsx from "clsx";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux.hooks";

import { fetchCartByUserId } from "../../../store/reducers/cart.slice";

import { HeaderFooterLayout } from "../../templates/HeaderFooterLayout/HeaderFooterLayout";
import { MainLogo } from "../../atoms/MainLogo/MainLogo";

import styles from "./Header.module.css";
import commonStyle from "../../../assets/styles/common.module.css";

import { fakeUserId } from "../../../mock/mock.user";
import { NavigationMenu } from "../../molecules/NavigationMenu/NavigationMenu";

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
        <NavigationMenu location="Header" loggedIn={true} counter={cartValue} />
      </HeaderFooterLayout>
    </header>
  );
};

export { Header };
