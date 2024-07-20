import { useCallback, useState } from "react";
import { debounce } from "lodash";

import { useAppDispatch, useAppSelector } from "../../../hooks/redux.hooks";

import styles from "./SearchInput.module.css";
import { refreshSearchQuery } from "../../../store/reducers/search.slice";
import { refreshProductState } from "../../../store/reducers/product.slice";

const SearchInput = () => {
  const searchQuery = useAppSelector((state) => state.searchStore.searchQuery);
  const dispatch = useAppDispatch();
  // управляемый инпут
  // нужен для сохранения в рендере поискового запроса
  // иначе при навигации на карточку товара и последующей навигации назад(через кнопку браузера)
  // запрос остается в слайсе и фильтр товаров сохраняется (считаю именно такой подход верным)
  // но запрос не отображался в строке поиска
  const [searchValue, setSearchValue] = useState(searchQuery);

  const debouncedHandleSearch = useCallback(
    debounce((value) => {
      dispatch(refreshSearchQuery(value));
      dispatch(refreshProductState());
    }, 500),
    []
  );

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(evt.target.value);
    debouncedHandleSearch(evt.target.value);
  };

  return (
    <input
      data-testid="adsfewr3rfdsdsf4rt"
      type="search"
      value={searchValue}
      className={styles.search__input}
      placeholder="Search by title"
      onChange={handleChange}
    />
  );
};

export { SearchInput };
