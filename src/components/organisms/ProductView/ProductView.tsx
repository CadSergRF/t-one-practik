import { MouseEvent } from "react";
import { Helmet } from "react-helmet-async";

import { useInCart } from "../../../hooks/useInCart.hooks";
import { roundedNum } from "../../../utils/helpers/roundedNum.helper";

import { Gallery } from "../Gallery/Gallery";
import { Rating } from "../../molecules/Rating/Rating";
import { ButtonLF } from "../../atoms/ButtonLF/ButtonLF";
import { AddedControl } from "../../molecules/AddedControl/AddedControl";

import { TProductFull } from "../../../Types/products.type";

import styles from "./ProductView.module.css";
import { useAppDispatch } from "../../../hooks/redux.hooks";
import { fetchChangeCart } from "../../../store/reducers/cart.slice";

const ProductView = (data: TProductFull) => {
  const {
    id,
    images,
    title,
    rating,
    tags,
    stock,
    description,
    warrantyInformation,
    shippingInformation,
    price,
    discountPercentage,
  } = data;

  const dispatch = useAppDispatch()
  const { inCart, quantityInCart } = useInCart(id);
  const ariaText = "Product page - " + title;
  const priceWithDiscount = roundedNum(
    price * ((100 - discountPercentage) / 100),
    2
  );

  const handleAddToCart = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.stopPropagation();
    console.log("The product has been added to the cart");
    dispatch(fetchChangeCart({changeMethod: "AddToCart", newData: {id: id, quantity: 1}}))
  };
  return (
    <>
      <Helmet>
        <title>{title} | Goods4you</title>
      </Helmet>
      <section className={styles.wrapper} aria-label={ariaText}>
        {/* -------------- Product gallery --------------*/}
        <Gallery images={images} />
        {/* -------------- Product info --------------*/}
        <div className={styles.info}>
          <div>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.info__meta}>
              <Rating rating={rating} />
              <h3 className={styles.category}>{tags.join(", ")}</h3>
            </div>
          </div>
          <h3 className={styles.stock}>In Stock - Only {stock} left!</h3>
          <p className={styles.description}>{description}</p>
          <div className={styles.other}>
            <p className={styles.other__text}>{warrantyInformation}</p>
            <p className={styles.other__text}>{shippingInformation}</p>
          </div>
          <section className={styles.buy}>
            <div className={styles.prices__wrapper}>
              <div className={styles.prices}>
                <p className={styles.price}>{priceWithDiscount}&#36;</p>
                <p className={styles.price__old}>{price}&#36;</p>
              </div>
              <p className={styles.prices__text}>
                Your discount:
                <span className={styles.prices__text_discount}>
                  {discountPercentage}%
                </span>
              </p>
            </div>
            {!inCart || !!(quantityInCart === 0) && (
              <ButtonLF text="Add to cart" actionTo={handleAddToCart} />
            )}
            {inCart && quantityInCart > 0 && <AddedControl id={id} quantity={quantityInCart} stock={stock} />}
          </section>
        </div>
      </section>
    </>
  );
};

export { ProductView };
