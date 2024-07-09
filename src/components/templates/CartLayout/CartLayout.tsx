import styles from "./CartLayout.module.css";

const CartLayout = () => {
  return (
    <section className={styles.main__container}>
      <article
        className={styles.items__container}
        aria-label="Список товаров для заказа"
      >
        Массив карточек
      </article>
      <article
        className={styles.price__container}
        aria-label="Расчет стоимости заказа"
      >
        Кол-во товара скидка Стоимость
      </article>
      <article
        className={styles.items__container}
        aria-label="Список товаров для заказа"
      >
        Массив карточек
      </article>
      <article
        className={styles.price__container}
        aria-label="Расчет стоимости заказа"
      >
        Кол-во товара скидка Стоимость
      </article>
    </section>
  );
};

export default CartLayout;
