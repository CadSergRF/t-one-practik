import { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";

import clsx from "clsx";

import { CartIcon } from "../UI-kit/CartIcon/CartIcon";

// import { TGoods } from "../../Types/goods.type";

import styles from "./Card.module.css";

import cardImage from "../../mock/image.jpg";
import { TCartItem } from "../../Types/cart.type";
import { AddedControl } from "../UI-kit/AddedControl/AddedControl";

// type Props = {
//   item: TGoods;
// };

const Card = ({ item, quantity }: TCartItem) => {
// const Card = ({ item }: Props) => {
  const { id, name, price } = item;

  const navigate = useNavigate();

  const handleShowProduct = () => {
    navigate(`/product/${id}`, {state: item});
  };

  const handleAddToCart = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.stopPropagation();
    console.log("Товар добавлен в корзину");
  };

  return (
    <li>
      <article className={styles.wrapper} onClick={handleShowProduct}>
        <picture className={styles.wrapper__image}>
          <img src={cardImage} className={styles.image} alt="Фото товара" />
        </picture>
        <div className={styles.content}>
          <div className={clsx(styles.info, {
            [styles.info_quantity]: quantity,
          })}>
            <h3 className={styles.name}>{name}</h3>
            <p className={styles.price}>{price}</p>
          </div>
          {!quantity && (
            <button className={styles.button} onClick={handleAddToCart}>
              <CartIcon location="AddButton" />
            </button>
          )}
          {quantity && (
            <AddedControl quantity={quantity}/>
          )}
        </div>
      </article>
    </li>
  );
};

export default Card;
