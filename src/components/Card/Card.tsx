import { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";

import { AddedButton } from "../UI-kit/AddedButton/AddedButton";
import { AddedControl } from "../UI-kit/AddedControl/AddedControl";

import { TGoodsItems } from "../../Types/goods.type";

import styles from "./Card.module.css";

import cardImage from "../../mock/image.jpg";

const Card = ({ item, quantity }: TGoodsItems) => {
  const { id, name, price } = item;

  const navigate = useNavigate();

  const handleShowProduct = () => {
    navigate(`/product/${id}`, { state: item });
  };

  const handleAddToCart = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.stopPropagation();
    console.log("Товар добавлен в корзину");
  };

  return (
    <li tabIndex={0} aria-label="Preview of the product card. When you click, you go to the product page.">
      <article className={styles.wrapper} onClick={handleShowProduct}>
        <picture className={styles.wrapper__image}>
          <img src={cardImage} className={styles.image} alt="Фотография товара" />
        </picture>
        <div className={styles.content}>
          <div
            className={clsx(styles.info, {
              [styles.info_quantity]: quantity,
            })}
          >
            <h3 className={styles.name}>{name}</h3>
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

export default Card;
