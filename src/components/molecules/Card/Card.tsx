import { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";

import { useInCart } from "../../../hooks/useInCart.hooks";
import { roundedNum } from "../../../utils/helpers/roundedNum.helper";

import { AddedButton } from "../../atoms/AddedButton/AddedButton";
import { AddedControl } from "../AddedControl/AddedControl";

import { TProductFull } from "../../../Types/products.type";

import styles from "./Card.module.css";

const Card = (item: TProductFull) => {
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
    <li className={styles.wrapper}>
      <article className={styles.container} onClick={handleShowProduct}>
        <picture
          className={styles.wrapper__image}
          tabIndex={0}
          aria-label="Preview of the product card. When you click, you go to the product page."
        >
          <img src={thumbnail} className={styles.image} alt="Product photo" />
        </picture>
        <div className={styles.content}>
          <div className={styles.info}>
            <h3 className={styles.name}>{title}</h3>
            <p className={styles.price}>{priceWithDiscount}</p>
          </div>
          {!inCart && (
            <AddedButton location="AddButton" handler={handleAddToCart} />
          )}
          {inCart && <AddedControl quantity={quantityInCart} />}
        </div>
      </article>
    </li>
  );
};

export { Card };
