// import styles from './MainPage.module.css';

import { Catalog } from "../Catalog/Catalog";
import { FAQContainer } from "../FAQContainer/FAQContainer";
import { Hero } from "../Hero/Hero";

const MainPage = () => {
  return (
    <>
      <Hero />
      <Catalog />
      <FAQContainer />
    </>
  );
};

export { MainPage };
