import { useState } from "react";
import clsx from "clsx";

import plusIcon from "../../../assets/images/plus.svg";

import { TFAQ } from "../../../Types/faq.type";

import styles from "./FAQItem.module.css";

const FAQItem = ({ answer, question }: TFAQ) => {

  const [open, setOpen] = useState(false);

  const toggleHandler = () => {
    setOpen(!open);
  };

  return (
    <article className={styles.container}>
      <div className={styles.wrapper__question} onClick={toggleHandler}>
        <dt className={styles.question}>{question}</dt>
        <img
          src={plusIcon}
          className={clsx(styles.plus, {
            [styles.plus_rotate]: open,
          })}
          tabIndex={0}
          alt="Button: Show or hide the answer"
        />
      </div>
      <div
        className={clsx(styles.answer_wrapper, {
          [styles.answer_open]: open,
        })}
      >
        <dd className={styles.answer}>{answer}</dd>
      </div>
    </article>
  );
};

export { FAQItem };
