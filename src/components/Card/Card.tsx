import { TGoods } from "../../Types/goods.type";

import styles from "./Card.module.css";

import cardImage from "../../mock/image.jpg";
import { CartIcon } from "../../assets/svgComponents/CartIcon/CartIcon";
import { useNavigate } from "react-router-dom";
import { MouseEvent } from "react";
import clsx from "clsx";

type Props = {
  item: TGoods;
};

const Card = ({ item }: Props) => {
  const { id, name, price, quantity } = item;
  const navigate = useNavigate();

  const handleShowProduct = () => {
    navigate(`/product/${id}`);
  };

  const handleAddToCart = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.stopPropagation();
    console.log("Товар добавлен в корзину");
  };

  const handleMinusQuantity = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.stopPropagation();
    console.log("Количество товара уменьшино на 1");
  };

  const handlePlusQuantity = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.stopPropagation();
    console.log("Количество товара увеличено на 1");
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
              <CartIcon counter={0} location="AddButton" />
            </button>
          )}
          {quantity && (
            <div className={styles.group__quantity}>
              <button className={styles.button} onClick={handleMinusQuantity}>
                <CartIcon counter={0} location="MinusButton" />
              </button>
              <p className={styles.quantity}>{quantity} item</p>
              <button className={styles.button} onClick={handlePlusQuantity}>
                <CartIcon counter={0} location="PlusButton" />
              </button>
            </div>
          )}
        </div>
      </article>
    </li>
  );
};

export default Card;
