import { Outlet } from "react-router-dom";

import { useAppSelector } from "../../../hooks/redux.hooks";

import { Header } from "../../organisms/Header/Header";
import { Footer } from "../../organisms/Footer/Footer";

const MainLayout = () => {
  const { isLoggedIn } = useAppSelector((state) => state.userStore);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      {isLoggedIn && <Footer />}
    </>
  );
};

export { MainLayout };
