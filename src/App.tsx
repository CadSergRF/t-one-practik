import { Route, Routes } from "react-router-dom";

import { MainLayout } from "./components/templates/MainLayout/MainLayout";
import { MainPage } from "./components/pages/MainPage/MainPage";
import { ProductPage } from "./components/pages/ProductPage/ProductPage";
import { Cart } from "./components/pages/Cart/Cart";
import { ErrorPage } from "./components/pages/ErrorPage/ErrorPage";
import { LoginPage } from "./components/pages/LoginPage/LoginPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<MainPage />} />
          <Route path="product/:id" element={<ProductPage />} />
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
