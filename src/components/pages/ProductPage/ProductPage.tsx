import { MouseEvent, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { ErrorPage } from "../ErrorPage/ErrorPage";

import { TGoods } from "../../../Types/products.type";

import styles from "./ProductPage.module.css";

import mainImage from "../../../mock/main photo.jpg";
import { ButtonLF } from "../../atoms/ButtonLF/ButtonLF";

const ProductPage = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Проверка, что страница открылась по ссылке
  if (!location.state?.name) {
    return <ErrorPage />;
  } else {
    const { name } = location.state as TGoods;

    const ariaText = "Product page - " + name;

    const handleAddToCart = (evt: MouseEvent<HTMLButtonElement>) => {
      evt.stopPropagation();
      console.log("The product has been added to the cart");
    };

    return (
      <>
        <Helmet>
          <title>{name} | Goods4you</title>
        </Helmet>
        <section className={styles.wrapper} aria-label={ariaText}>
          {/* -------------- Product gallery --------------*/}
          <div className={styles.gallery}>
            <picture className={styles.wrapper__image}>
              <img
                src={mainImage}
                className={styles.main__image}
                alt="Product photo"
              />
            </picture>
            <div className={styles.scroll__gallery}>
              {Array.from({ length: 6 }).map((_, idx) => (
                <picture key={idx} className={styles.scroll__item}>
                  <img
                    src={mainImage}
                    className={styles.scroll__image}
                    alt="Product photo"
                  />
                </picture>
              ))}
            </div>
          </div>
          {/* -------------- Product info --------------*/}
          <div className={styles.info}>
            <div>
              <h1 className={styles.title}>{name}</h1>
              <div className={styles.info__meta}>
                <div className={styles.rating}>
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <div key={idx} className={styles.rating__star}>
                      <svg
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.04894 0.92705C7.3483 0.00573921 8.6517 0.00573969 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58778 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z"
                          fill={idx !== 4 ? "#F14F4F" : "#D5D5D5"}
                        />
                      </svg>
                    </div>
                  ))}
                </div>
                <h3 className={styles.category}>
                  electronics, selfie accessories
                </h3>
              </div>
            </div>
            <h3 className={styles.stock}>In Stock - Only 5 left!</h3>
            <p className={styles.description}>
              The Essence Mascara Lash Princess is a popular mascara known for
              its volumizing and lengthening effects. Achieve dramatic lashes
              with this long-lasting and cruelty-free formula.
            </p>
            <div className={styles.other}>
              <p className={styles.other__text}>1 month warranty</p>
              <p className={styles.other__text}>Ships in 1 month</p>
            </div>
            <section className={styles.buy}>
              <div className={styles.prices__wrapper}>
                <div className={styles.prices}>
                  <p className={styles.price}>7.17&#36;</p>
                  <p className={styles.price__old}>9.99&#36;</p>
                </div>
                <p className={styles.prices__text}>
                  Your discount:
                  <span className={styles.prices__text_discount}>14.5%</span>
                </p>
              </div>
              <ButtonLF text="Add to cart" actionTo={handleAddToCart} />
            </section>
          </div>
        </section>
      </>
    );
  }
};

export { ProductPage };
