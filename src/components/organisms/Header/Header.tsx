import clsx from "clsx";

import { HeaderFooterLayout } from "../../templates/HeaderFooterLayout/HeaderFooterLayout";
import { MainLogo } from "../../atoms/MainLogo/MainLogo";

import styles from "./Header.module.css";
import commonStyle from "../../../assets/styles/common.module.css";

import { NavigationMenu } from "../../molecules/NavigationMenu/NavigationMenu";

const Header = () => {

  return (
    <header className={clsx(styles.wrapper, commonStyle.alignment)}>
      <HeaderFooterLayout>
        <MainLogo />
        <NavigationMenu location="Header"  />
      </HeaderFooterLayout>
    </header>
  );
};

export { Header };
