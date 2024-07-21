import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux.hooks";

import { productsApi } from "../../../store/api/products.api";
import { addCards } from "../../../store/reducers/product.slice";
import {
  refreshSearchSkipState,
  refreshSearchTotalState,
} from "../../../store/reducers/search.slice";

import { SearchInput } from "../../atoms/SearchInput/SearchInput";
import { CardsList } from "../CardsList/CardsList";
import { Preloader } from "../../atoms/PreLoader/PreLoader";
import { ButtonLF } from "../../atoms/ButtonLF/ButtonLF";

import styles from "./Catalog.module.css";
import commonStyle from "../../../assets/styles/common.module.css";

const Catalog = () => {
  const { products } = useAppSelector((state) => state.productView);
  const { total, limit, searchQuery, skip } = useAppSelector(
    (state) => state.searchStore
  );

  const dispatch = useAppDispatch();

  const { data, error, isFetching } = productsApi.useGetSearchProductsQuery({
    q: searchQuery,
    limit: limit,
    skip: skip,
  });

  console.log(isFetching);

  useEffect(() => {
    // 1. если есть data, то есть что добавлять в стейт
    // 2. условие для добавления НОВЫХ карточек
    // без 2 при навигации по приложению всегда будет добавляться data из последнего запроса
    if (data && products.length - skip === 0) {
      dispatch(addCards(data));
      dispatch(refreshSearchTotalState(data.total));
    }
  }, [data, dispatch]);

  const handleShowMore = () => {
    dispatch(refreshSearchSkipState(products.length));
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
        {error && <div className={styles.error}>Data upload error</div>}
        {/* {isLoading && <Preloader />} */}
        {(products && !error) && (
          <>
            <CardsList cards={products} />
            {isFetching && <Preloader />}
          </>
        )}
        {products.length < total && (
          <ButtonLF text="Show more" actionTo={handleShowMore} />
        )}
      </div>
    </section>
  );
};

export { Catalog };
