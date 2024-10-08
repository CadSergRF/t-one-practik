import { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";

import { useAppDispatch } from "../../../hooks/redux.hooks";
import { roundedNum } from "../../../utils/helpers/roundedNum.helper";

import { fetchChangeCart } from "../../../store/reducers/cart.slice";

import { AddedControl } from "../AddedControl/AddedControl";
import { AddedButton } from "../../atoms/AddedButton/AddedButton";

import { TCartProduct } from "../../../Types/cart.type";

import styles from "./CartItem.module.css";

type Props = {
  product: TCartProduct;
};

const CartItem = ({ product }: Props) => {
  const { id, thumbnail, title, price, quantity, discountPercentage } = product;
  const dispatch = useAppDispatch();

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
    dispatch(
      fetchChangeCart({
        changeMethod: "AddToCart",
        newData: { id: id, quantity: 1 },
      })
    );
  };

  const handleDelete = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.stopPropagation();
    dispatch(
      fetchChangeCart({
        changeMethod: "ChangeQuantity",
        newData: { id: id, quantity: 0 },
      })
    );
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
            <img src={thumbnail} className={styles.image} alt="product photo" />
          </picture>
          <div className={styles.content}>
            <h3
              className={styles.item__title}
              onClick={handleShowProduct}
              tabIndex={0}
              aria-label="When you click, you go to the product page."
            >
              {title}
            </h3>
            <p className={styles.item__price}>
              {priceWithDiscount}
              <span className={styles.item__price_currency}>&#36;</span>
            </p>
          </div>
        </div>
        {quantity > 0 ? (
          <div className={styles.controls}>
            <AddedControl id={id} quantity={quantity} />
            <button
              className={styles.delete__button}
              onClick={handleDelete}
              aria-label="Remove an item from the shopping cart"
            >
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
