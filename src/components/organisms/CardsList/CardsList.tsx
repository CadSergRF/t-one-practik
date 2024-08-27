import { CatalogItem } from "../../molecules/CatalogItem/CatalogItem";

import { TProductFull } from "../../../Types/products.type";

import styles from "./CardsList.module.css";

type Props = {
  cards: TProductFull[];
};

const CardsList = ({ cards }: Props) => {
  return (
    <ul className={styles.cart__list}>
      {cards?.map((item, index) => (
        <CatalogItem key={item.id + index} item={item} />
      ))}
    </ul>
  );
};

export { CardsList };
