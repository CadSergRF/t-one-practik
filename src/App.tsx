import { Route, Routes } from "react-router-dom";

import "./App.css";
import { MainLayout } from "./components/MainLayout/MainLayout";
import { MainPage } from "./components/MainPage/MainPage";
import { ProductPage } from "./components/Pages/ProductPage/ProductPage";
import { Cart } from "./components/Cart/Cart";
import { ErrorPage } from "./components/ErrorPage/ErrorPage";

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
