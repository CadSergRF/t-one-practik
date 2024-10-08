import { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";

import { useAppDispatch } from "../../../hooks/redux.hooks";
import { useInCart } from "../../../hooks/useInCart.hooks";
import { roundedNum } from "../../../utils/helpers/roundedNum.helper";

import { fetchChangeCart } from "../../../store/reducers/cart.slice";

import { AddedButton } from "../../atoms/AddedButton/AddedButton";
import { AddedControl } from "../AddedControl/AddedControl";

import { TProductFull } from "../../../Types/products.type";

import styles from "./CatalogItem.module.css";

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
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { id, title, price, thumbnail, discountPercentage, stock } = item;

  const { inCart, quantityInCart } = useInCart(id);

  const priceWithDiscount = roundedNum(
    price * ((100 - discountPercentage) / 100),
    2
  );

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
          {((!inCart && !sbCart) || (inCart && !!(quantityInCart === 0))) && (
            <AddedButton location="AddButton" handler={handleAddToCart} />
          )}
          {inCart && quantityInCart > 0 && (
            <AddedControl id={id} quantity={quantityInCart} stock={stock} />
          )}
          {sbCart && (
            <AddedControl id={id} quantity={sbQuantity} stock={stock} />
          )}
        </div>
      </article>
    </li>
  );
};

export { CatalogItem };
