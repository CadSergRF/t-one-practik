import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { ErrorPage } from "../ErrorPage/ErrorPage";

import { productsApi } from "../../../store/api/products.api";
import { Preloader } from "../../atoms/PreLoader/PreLoader";
import { ProductView } from "../../organisms/ProductView/ProductView";

const ProductPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  // вдруг id нет
  if (!id) return <ErrorPage />;

  // запрос карточки
  const { data, error, isLoading } = productsApi.useGetSingleProductQuery(id);
  // состояние загрузки
  if (isLoading) return <Preloader />;
  // ошибка или не пришли данные
  if (error || !data) return <ErrorPage />;

  // ошибок нет и все пришло
  return (
    <ProductView {...data}/>
  );
};

export { ProductPage };
