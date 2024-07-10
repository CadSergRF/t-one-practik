import { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";

import { AddedButton } from "../../atoms/AddedButton/AddedButton";
import { AddedControl } from "../AddedControl/AddedControl";

import styles from "./Card.module.css";

import cardImage from "../../../mock/image.jpg";
import { TProductFull } from "../../../Types/products.type";

const Card = (item: TProductFull) => {
  const { id, title, price } = item;

  const quantity = 0

  const navigate = useNavigate();

  const handleShowProduct = () => {
    navigate(`/product/${id}`, { state: item });
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
          <img src={cardImage} className={styles.image} alt="Product photo" />
        </picture>
        <div className={styles.content}>
          <div className={styles.info}>
            <h3 className={styles.name}>{title}</h3>
            <p className={styles.price}>{price}</p>
          </div>
          {!quantity && (
            <AddedButton location="AddButton" handler={handleAddToCart} />
          )}
          {quantity && <AddedControl quantity={quantity} />}
        </div>
      </article>
    </li>
  );
};

export { Card };
