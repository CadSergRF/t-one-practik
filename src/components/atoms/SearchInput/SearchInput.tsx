import { useCallback, useEffect, useState } from "react";
import { debounce } from "lodash";

import { productsApi } from "../../../store/api/products.api";
import { refreshSearchQuery, refreshState } from "../../../store/reducers/product.slice";

import { useAppDispatch, useAppSelector } from "../../../hooks/redux.hooks";

import styles from "./SearchInput.module.css";

const SearchInput = () => {

  const searchQuery = useAppSelector((state) => state.productView.searchQuery)
  const dispatch = useAppDispatch();
// управляемый инпут
// нужен для сохранения в рендере поискового запроса
// иначе при навигации на карточку товара и последующей навигации назад(через кнопку браузера)
// запрос остается в слайсе и фильтр товаров сохраняется (считаю именно такой подход верным)
// но запрос не отображался в строке поиска
  const [searchValue, setSearchValue] = useState(searchQuery);

  const { data } = productsApi.useGetSearchProductsQuery({
    q: searchQuery,
    limit: 12,
    skip: 0,
  });

  useEffect(() => {
    if (data) {
      dispatch(refreshState(data));
    }
  }, [data, dispatch]);

  const debouncedHandleSearch = useCallback(debounce((value) => {
    dispatch(refreshSearchQuery(value))
  }, 500), []);

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(evt.target.value)
    debouncedHandleSearch(evt.target.value)
  };


  return (
    <input
      type="search"
      value={searchValue}
      className={styles.search__input}
      placeholder="Search by title"
      onChange={handleChange}
    />
  );
};

export { SearchInput };
