import clsx from "clsx";

import { roundedNum } from "../../../utils/helpers/roundedNum.helper";

import styles from "./CartTotalView.module.css";

type Props = {
  totalQuantity: number;
  discountedTotal: number;
  total: number;
};

const CartTotalView = ({ totalQuantity, discountedTotal, total }: Props) => {
  const priceWord = totalQuantity > 1 ? "items" : "item";

  return (
    <div className={styles.total}>
      <div className={styles.total__item}>
        <p className={styles.total__count}>Total count</p>
        <p className={clsx(styles.total__count, styles.total__count_value)}>
          {totalQuantity}&#160;{priceWord}
        </p>
      </div>
      <div className={clsx(styles.total__item, styles.total__item_style)}>
        <p className={styles.total__brutto}>Price without discount</p>
        <p className={clsx(styles.total__brutto, styles.total__brutto_value)}>
          {roundedNum(total, 2)}&#36;
        </p>
      </div>
      <div className={styles.total__item}>
        <p className={styles.total__netto}>Total price</p>
        <p className={clsx(styles.total__netto, styles.total__netto_value)}>
          {roundedNum(discountedTotal, 2)}&#36;
        </p>
      </div>
    </div>
  );
};

export { CartTotalView };
