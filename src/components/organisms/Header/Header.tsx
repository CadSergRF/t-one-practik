import clsx from "clsx";

import { HeaderFooterLayout } from "../../templates/HeaderFooterLayout/HeaderFooterLayout";
import { MainLogo } from "../../atoms/MainLogo/MainLogo";
import { NavigationMenu } from "../NavigationMenu/NavigationMenu";
import { NavigationLink } from "../../atoms/NavigationLink/NavigationLink";
import { CartIcon } from "../../atoms/CartIcon/CartIcon";

import styles from "./Header.module.css";
import commonStyle from '../../../assets/styles/common.module.css';

const Header = () => {
  // XАРДКОД )))
  const cartItems = 1;

  return (
    <header className={clsx(styles.wrapper, commonStyle.alignment)}>
      <HeaderFooterLayout>
        <MainLogo />
        <NavigationMenu>
          <NavigationLink text="Catalog" link="/#catalog" />
          <NavigationLink text="FAQ" link="/#faq" />
          <NavigationLink text="Cart" link="/cart">
            <CartIcon counter={cartItems} />
          </NavigationLink>
          <NavigationLink text="Johnson Smith" link="" />
        </NavigationMenu>
      </HeaderFooterLayout>
    </header>
  );
};

export { Header };
