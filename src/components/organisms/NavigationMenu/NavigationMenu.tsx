import { Children } from "react";

import styles from "./NavigationMenu.module.css";

type Props = {
  children: React.ReactNode[];
};

const NavigationMenu = ({ children }: Props) => {
  return (
    <nav aria-label="Basic site navigation">
      <ul className={styles.menu}>
        {Children.map(children, (child) => (
          <li>{child}</li>
        ))}
      </ul>
    </nav>
  );
};

export { NavigationMenu };
