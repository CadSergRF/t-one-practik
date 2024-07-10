import { StarIcon } from "../../atoms/Icons/StarIcon";

import styles from "./Rating.module.css";

type Props = {
  rating: number;
};

const Rating = ({ rating }: Props) => {
  return (
    <div className={styles.rating}>
      {Array.from({ length: 5 }).map((_, idx) => (
        <StarIcon
          key={idx}
          colorFill={idx + 1 <= Math.round(rating) ? "#F14F4F" : "#D5D5D5"}
        />
      ))}
    </div>
  );
};

export { Rating };
