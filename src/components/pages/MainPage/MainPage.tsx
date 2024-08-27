import { Helmet } from "react-helmet-async";

import { Hero } from "../../organisms/Hero/Hero";
import { Catalog } from "../../organisms/Catalog/Catalog";
import { FAQContainer } from "../../organisms/FAQContainer/FAQContainer";

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
