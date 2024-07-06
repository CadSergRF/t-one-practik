import { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";

import { AddedControl } from "../UI-kit/AddedControl/AddedControl";
import { AddedButton } from "../UI-kit/AddedButton/AddedButton";

import { TCartItem } from "../../Types/cart.type";

import styles from "./CartItem.module.css";

import cardImage from "../../mock/image.jpg";

const CartItem = ({ item, quantity }: Required<TCartItem>) => {
  const { id, name, price } = item;

  const navigate = useNavigate();

  const handleShowProduct = () => {
    navigate(`/product/${id}`, { state: item });
  };

  const handleAddToCart = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.stopPropagation();
    console.log("Товар добавлен в корзину");
  };

  const handleDelete = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.stopPropagation();
    console.log("Delete product");
  };

  return (
    <li>
      <article className={styles.wrapper}>
        <div
          className={clsx(styles.info__block, {
            [styles.info__block_opacity]: quantity === 0,
          })}
        >
          <picture className={styles.wrapper__image}>
            <img
              src={cardImage}
              className={styles.image}
              alt="Фотография товара"
            />
          </picture>
          <div className={styles.content}>
            <h3 className={styles.item__title} onClick={handleShowProduct}>
              {name}
            </h3>
            <p className={styles.item__price}>
              {price}
              <span className={styles.item__price_currency}>&#36;</span>
            </p>
          </div>
        </div>
        {quantity > 0 ? (
          <div className={styles.controls}>
            <AddedControl quantity={quantity} />
            <button className={styles.delete__button} onClick={handleDelete}>
              Delete
            </button>
          </div>
        ) : (
          <div className={styles.controls}>
            <AddedButton location="AddButton" handler={handleAddToCart} />
          </div>
        )}
      </article>
    </li>
  );
};

export { CartItem };
