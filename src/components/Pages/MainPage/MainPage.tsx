import { Helmet } from "react-helmet";

import { Hero } from "../../Hero/Hero";
import { Catalog } from "../../Catalog/Catalog";
import { FAQContainer } from "../../FAQContainer/FAQContainer";

const MainPage = () => {
  return (
    <>
      <Helmet>
        <title>Catalog | Goods4you</title>
        <meta
          name="description"
          content="Any products from famous brands with worldwide delivery"
        />
      </Helmet>
      <Hero />
      <Catalog />
      <FAQContainer />
    </>
  );
};

export { MainPage };
