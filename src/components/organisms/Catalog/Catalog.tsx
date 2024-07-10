import { useAppDispatch, useAppSelector } from "../../../hooks/redux.hooks";

import { productsApi } from "../../../store/api/products.api";
import { addCards } from "../../../store/reducers/product.slice";

import { SearchInput } from "../../atoms/SearchInput/SearchInput";
import { CardsList } from "../CardsList/CardsList";
import { Preloader } from "../../atoms/PreLoader/PreLoader";
import { ButtonLF } from "../../atoms/ButtonLF/ButtonLF";

import styles from "./Catalog.module.css";
import commonStyle from "../../../assets/styles/common.module.css";

const Catalog = () => {
  const { products, total, limit, searchQuery } = useAppSelector(
    (state) => state.productView
  );
  const dispatch = useAppDispatch();

  const { data, error, isLoading } = productsApi.useGetSearchProductsQuery({
    q: searchQuery,
    limit: limit,
    skip: products.length,
  });

  const handleShowMore = () => {
    if (data) {
      dispatch(addCards(data));
    }
  };

  return (
    <section
      id={"catalog"}
      className={commonStyle.alignment}
      aria-label="section Catalog"
    >
      <div className={styles.container}>
        <h1 className={styles.title}>Catalog</h1>
        <SearchInput />
        {error && (
          <div className={styles.error}>Произошла ошибка загрузки данных</div>
        )}
        {isLoading && <Preloader />}
        {products && <CardsList cards={products} />}
        {products.length < total && (
          <ButtonLF text="Show more" actionTo={handleShowMore} />
        )}
      </div>
    </section>
  );
};

export { Catalog };
