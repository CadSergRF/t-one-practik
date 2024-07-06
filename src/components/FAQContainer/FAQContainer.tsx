import { FAQItem } from "../FAQItem/FAQItem";

import styles from "./FAQContainer.module.css";

import { mockFAQ } from "../../mock/mock.faq";

const FAQContainer = () => {
  return (
    <section
      id="faq"
      className={styles.wrapper}
      aria-label="section Answer-Question"
    >
      <article className={styles.container}>
        <h2 className={styles.title}>FAQ</h2>
        <dl className={styles.list}>
          {mockFAQ.map((item) => (
            <FAQItem key={item.question} {...item} />
          ))}
        </dl>
      </article>
    </section>
  );
};

export { FAQContainer };
