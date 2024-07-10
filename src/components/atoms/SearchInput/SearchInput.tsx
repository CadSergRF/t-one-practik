import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux.hooks";
import { productsApi } from "../../../store/api/products.api";
import styles from "./SearchInput.module.css";
import { refreshSearchQuery, refreshState } from "../../../store/reducers/product.slice";
import { debounce } from "lodash";

const SearchInput = () => {

  const searchQuery = useAppSelector((state) => state.productView.searchQuery)
  const dispatch = useAppDispatch();

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

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(refreshSearchQuery(evt.target.value))
  };

  const debouncedHandleSearch = debounce(handleChange, 500);

  return (
    <input
      type="search"
      className={styles.search__input}
      placeholder="Search by title"
      onChange={(evt) => debouncedHandleSearch(evt)}
    />
  );
};

export { SearchInput };
