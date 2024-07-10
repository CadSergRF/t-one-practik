import { TProductFull } from "../../../Types/products.type";
import { Card } from "../../molecules/Card/Card";

import styles from "./CardsList.module.css";

type Props = {
  cards: TProductFull[];
}

const CardsList = ({cards}: Props) => {

  return (
    <ul className={styles.cart__list}>
      {cards?.map((item, index) => <Card key={item.id + index} {...item} />)}
    </ul>
  );
};

export { CardsList };
