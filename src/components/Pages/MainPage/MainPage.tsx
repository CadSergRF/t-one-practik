import { Helmet } from "react-helmet-async";

import { Hero } from "../../Hero/Hero";
import { Catalog } from "../../Catalog/Catalog";
import { FAQContainer } from "../../FAQContainer/FAQContainer";

const MainPage = () => {
  return (
    <>
      <Helmet>
        <title>Catalog | Goods4you</title>
      </Helmet>
      <Hero />
      <Catalog />
      <FAQContainer />
    </>
  );
};

export { MainPage };
