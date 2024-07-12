import { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";

import { useInCart } from "../../../hooks/useInCart.hooks";
import { roundedNum } from "../../../utils/helpers/roundedNum.helper";

import { AddedButton } from "../../atoms/AddedButton/AddedButton";
import { AddedControl } from "../AddedControl/AddedControl";

import { TProductFull } from "../../../Types/products.type";

import styles from "./CatalogItem.module.css";
import clsx from "clsx";

type Props = {
  item: TProductFull;
  // свойства добавлены для имитации поведения компонента в Storybook
  sbSmall?: boolean; // имитация размера компонента
  sbCart?: boolean; // имитация наличия товара в корзине
  sbQuantity?: number;
};

const CatalogItem = ({
  item,
  sbSmall = false,
  sbCart = false,
  sbQuantity = 5,
}: Props) => {
  const { id, title, price, thumbnail, discountPercentage } = item;

  const { inCart, quantityInCart } = useInCart(id);

  const priceWithDiscount = roundedNum(
    price * ((100 - discountPercentage) / 100),
    2
  );

  const navigate = useNavigate();

  const handleShowProduct = () => {
    navigate(`/product/${id}`);
  };

  const handleAddToCart = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.stopPropagation();
    console.log("Товар добавлен в корзину");
  };

  return (
    <li
      className={clsx(styles.wrapper, {
        [styles.sb__wrapper]: sbSmall,
      })}
    >
      <article className={styles.container} onClick={handleShowProduct}>
        <picture
          className={clsx(styles.wrapper__image, {
            [styles.sb__wrapper__image]: sbSmall,
          })}
          tabIndex={0}
          aria-label="Preview of the product card. When you click, you go to the product page."
        >
          <img src={thumbnail} className={styles.image} alt="Product photo" />
        </picture>
        <div
          className={clsx(styles.content, {
            [styles.sb__content]: sbSmall,
          })}
        >
          <div className={styles.info}>
            <h3 className={styles.name}>{title}</h3>
            <p className={styles.price}>{priceWithDiscount}</p>
          </div>
          {!inCart && !sbCart && (
            <AddedButton location="AddButton" handler={handleAddToCart} />
          )}
          {inCart && <AddedControl quantity={quantityInCart} />}
          {sbCart && <AddedControl quantity={sbQuantity} />}
        </div>
      </article>
    </li>
  );
};

export { CatalogItem };
