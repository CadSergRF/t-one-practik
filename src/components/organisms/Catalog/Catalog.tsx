import { MouseEvent } from "react";

import { SearchInput } from "../../atoms/SearchInput/SearchInput";
import { CardsList } from "../CardsList/CardsList";
import { ButtonLF } from "../../atoms/ButtonLF/ButtonLF";

import styles from "./Catalog.module.css";
import commonStyle from "../../../assets/styles/common.module.css";

import { mockGoods } from "../../../mock/mock.goods";

const Catalog = () => {
  const handleShowMore = (evt: MouseEvent<HTMLButtonElement>) => {
    console.log(evt.target);
  };

  return (
    <section
      id={"catalog"}
      className={commonStyle.alignment}
      aria-label="section Catalog"
    >
      <div className={styles.container}>
        <h1 className={styles.title}>Catalog</h1>
        <SearchInput />
        <CardsList cardData={mockGoods}/>
        <ButtonLF text="Show more" actionTo={handleShowMore} />
      </div>
    </section>
  );
};

export { Catalog };
