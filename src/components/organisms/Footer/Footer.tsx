import clsx from "clsx";

import { HeaderFooterLayout } from "../../templates/HeaderFooterLayout/HeaderFooterLayout";
import { MainLogo } from "../../atoms/MainLogo/MainLogo";
import { NavigationMenu } from "../../molecules/NavigationMenu/NavigationMenu";

import styles from "./Footer.module.css";
import commonStyle from "../../../assets/styles/common.module.css";

const Footer = () => {
  return (
    <footer className={clsx(styles.wrapper, commonStyle.alignment)}>
      <HeaderFooterLayout>
        <MainLogo />
        <NavigationMenu location="Footer" />
      </HeaderFooterLayout>
    </footer>
  );
};

export { Footer };
