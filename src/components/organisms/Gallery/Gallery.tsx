import { useState } from "react";
import { MouseEvent } from "react";

import styles from "./Gallery.module.css";

type Props = {
  images: string[];
};

const Gallery = ({ images }: Props) => {
  const [mainImage, setMainImage] = useState(images[0]);

  const handleSetImage = (evt: MouseEvent<HTMLImageElement>) => {
    setMainImage(evt.currentTarget.src);
  };

  return (
    <div className={styles.gallery}>
      <picture className={styles.wrapper__image}>
        <img
          src={mainImage}
          className={styles.main__image}
          alt="Product photo"
        />
      </picture>
      {images.length > 1 && (
        <div className={styles.scroll__gallery}>
          {images.map((image, idx) => (
            <picture key={idx} className={styles.scroll__item}>
              <img
                src={image}
                className={styles.scroll__image}
                onClick={handleSetImage}
                alt="Product photo"
              />
            </picture>
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;
