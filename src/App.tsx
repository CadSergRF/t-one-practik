import { Route, Routes } from "react-router-dom";

import { MainLayout } from "./components/MainLayout/MainLayout";
import { MainPage } from "./components/Pages/MainPage/MainPage";
import { ProductPage } from "./components/Pages/ProductPage/ProductPage";
import { Cart } from "./components/Pages/Cart/Cart";
import { ErrorPage } from "./components/Pages/ErrorPage/ErrorPage";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<MainPage />} />
          <Route path="product/:id" element={<ProductPage />} />
          <Route path="cart" element={<Cart />} />
        </Route>
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
