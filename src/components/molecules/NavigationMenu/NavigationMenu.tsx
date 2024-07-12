import { CartIcon } from "../../atoms/CartIcon/CartIcon";
import { NavigationLink } from "../../atoms/NavigationLink/NavigationLink";

import styles from './NavigationMenu.module.css';

type Props = {
  location: "Header" | "Footer";
  loggedIn?: boolean;
  counter?: number;
};

const NavigationMenu = ({ location, loggedIn, counter = 0 }: Props) => {
  return (
    <nav className={styles.wrapper} aria-label="Basic site navigation">
      <ul className={styles.menu}>
        <NavigationLink text="Catalog" link="/#catalog" />
        <NavigationLink text="FAQ" link="/#faq" />
        {location === "Header" && loggedIn === true && (
          <>
            <NavigationLink text="Cart" link="/cart">
              <CartIcon counter={counter} />
            </NavigationLink>
            <NavigationLink text="Johnson Smith" link="" />
          </>
        )}
      </ul>
    </nav>
  );
};

export { NavigationMenu };
