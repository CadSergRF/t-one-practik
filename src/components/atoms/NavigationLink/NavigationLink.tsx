import { HashLink } from "react-router-hash-link";

import styles from "./NavigationLink.module.css";

type Props = {
  text: string;
  link: string;
  children?: React.ReactNode;
};

const NavigationLink = ({ text, link, children }: Props) => {
  // Проверка на элемент с корзиной
  if (children) {
    return (
      <HashLink smooth to={link} className={styles.cart__container}>
        <p className={styles.menu__item}>{text}</p>
        {children}
      </HashLink>
    );
  }

  return (
    <HashLink smooth to={link} className={styles.menu__item}>
      {text}
    </HashLink>
  );
};

export { NavigationLink };
