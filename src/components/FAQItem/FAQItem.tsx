import { useState } from "react";
import { TFAQ } from "../../Types/faq.type";
import styles from "./FAQItem.module.css";
import clsx from "clsx";

type Props = {
  faqItem: TFAQ;
};

const FAQItem = ({ faqItem }: Props) => {
  const { question, answer } = faqItem;

  const [open, setOpen] = useState(false);

  const toggleHandler = () => {
    setOpen(!open);
  };

  return (
    <article className={styles.container}>
      <div className={styles.wrapper__question} onClick={toggleHandler}>
        <dt className={styles.question}>{question}</dt>
        <p
          className={clsx(styles.plus, {
            [styles.plus_rotate]: open,
          })}
        >
          +
        </p>
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
