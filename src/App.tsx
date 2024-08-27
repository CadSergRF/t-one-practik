import { Route, Routes } from "react-router-dom";

import { useAppSelector } from "./hooks/redux.hooks";
import { loginApi } from "./store/api/login.api";

import { Preloader } from "./components/atoms/PreLoader/PreLoader";
import { RequireAuth } from "./components/templates/RequireAuth/RequireAuth";
import { MainLayout } from "./components/templates/MainLayout/MainLayout";
import { MainPage } from "./components/pages/MainPage/MainPage";
import { ProductPage } from "./components/pages/ProductPage/ProductPage";
import { Cart } from "./components/pages/Cart/Cart";
import { ErrorPage } from "./components/pages/ErrorPage/ErrorPage";
import { LoginPage } from "./components/pages/LoginPage/LoginPage";

function App() {
  const isLoggedIn = useAppSelector((state) => state.userStore.isLoggedIn);
  const tokenLS = localStorage.getItem("token");

  loginApi.useCurrentUserQuery(tokenLS || "");

  return (
    <>
      {isLoggedIn === null && <Preloader />}
      {isLoggedIn !== null && (
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route
              index
              element={
                <RequireAuth>
                  <MainPage />
                </RequireAuth>
              }
            />
            <Route
              path="product/:id"
              element={
                <RequireAuth>
                  <ProductPage />
                </RequireAuth>
              }
            />
            <Route
              path="cart"
              element={
                <RequireAuth>
                  <Cart />
                </RequireAuth>
              }
            />
            <Route path="login" element={<LoginPage />} />
          </Route>
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      )}
    </>
  );
}

export default App;
