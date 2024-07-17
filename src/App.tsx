import { Route, Routes } from "react-router-dom";

import { MainLayout } from "./components/templates/MainLayout/MainLayout";
import { MainPage } from "./components/pages/MainPage/MainPage";
import { ProductPage } from "./components/pages/ProductPage/ProductPage";
import { Cart } from "./components/pages/Cart/Cart";
import { ErrorPage } from "./components/pages/ErrorPage/ErrorPage";
import { LoginPage } from "./components/pages/LoginPage/LoginPage";
import { loginApi } from "./store/api/login.api";
import { RequireAuth } from "./components/templates/RequireAuth/RequireAuth";
import { Preloader } from "./components/atoms/PreLoader/PreLoader";

function App() {
  const tokenLS = localStorage.getItem("token");
  if (tokenLS !== null) {
    const {isLoading} = loginApi.useCurrentUserQuery(tokenLS);
    if (isLoading) {
      return <Preloader />
    }
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<RequireAuth><MainPage /></RequireAuth>} />
          <Route path="product/:id" element={<RequireAuth><ProductPage /></RequireAuth>} />
          <Route path="cart" element={<RequireAuth><Cart /></RequireAuth>} />
          <Route path="login" element={<LoginPage />} />
        </Route>
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
