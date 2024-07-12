import { MouseEvent, useRef } from "react";
import { HashLink } from "react-router-hash-link";

import styles from "./ButtonLF.module.css";

type Props = {
  text: string;
  actionTo: string | ((evt: MouseEvent<HTMLButtonElement>) => void);
};

const ButtonLF = ({ text, actionTo }: Props) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = (evt: MouseEvent<HTMLButtonElement>) => {
    buttonRef?.current?.blur(); // Убираем фокус с button после клика
    typeof actionTo !== "string" && actionTo(evt);
  };

  if (typeof actionTo == "string") {
    return (
      <HashLink smooth to={actionTo} className={styles.button}>
        {text}
      </HashLink>
    );
  } else {
    return (
      <button className={styles.button} onClick={handleClick} ref={buttonRef}>
        {text}
      </button>
    );
  }
};

export { ButtonLF };
