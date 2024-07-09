import { Outlet } from "react-router-dom";

import { Header } from "../../organisms/Header/Header";
import { Footer } from "../../organisms/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export { MainLayout };
