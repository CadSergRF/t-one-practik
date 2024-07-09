import clsx from "clsx";

import { HeaderFooterLayout } from "../../templates/HeaderFooterLayout/HeaderFooterLayout";
import { MainLogo } from "../../atoms/MainLogo/MainLogo";
import { NavigationMenu } from "../NavigationMenu/NavigationMenu";
import { NavigationLink } from "../../atoms/NavigationLink/NavigationLink";

import styles from "./Footer.module.css";
import commonStyle from '../../../assets/styles/common.module.css';

const Footer = () => {
  return (
    <footer className={clsx(styles.wrapper, commonStyle.alignment)}>
      <HeaderFooterLayout>
        <MainLogo />
        <NavigationMenu>
          <NavigationLink text="Catalog" link="/#catalog" />
          <NavigationLink text="FAQ" link="/#faq" />
        </NavigationMenu>
      </HeaderFooterLayout>
    </footer>
  );
};

export { Footer };
