import { TGoodsItems } from "../../../Types/goods.type";
import { Card } from "../../molecules/Card/Card";

import styles from "./CardsList.module.css";

type Props = {
  cardData: TGoodsItems[];
};

const CardsList = ({ cardData }: Props) => {
  return (
    <ul className={styles.cart__list}>
      {cardData.map((item) => (
        <Card key={item.item.id} {...item} />
      ))}
    </ul>
  );
};

export { CardsList };
