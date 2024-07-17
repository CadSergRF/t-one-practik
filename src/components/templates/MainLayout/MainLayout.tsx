import { Outlet } from "react-router-dom";

import { Header } from "../../organisms/Header/Header";
import { Footer } from "../../organisms/Footer/Footer";
import { useAppSelector } from "../../../hooks/redux.hooks";

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
