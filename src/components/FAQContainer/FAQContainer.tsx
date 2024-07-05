import { mockFAQ } from "../../mock/mock.faq";
import { FAQItem } from "../FAQItem/FAQItem";
import styles from "./FAQContainer.module.css";

const FAQContainer = () => {
  return (
    <section id="faq" className={styles.container}>
      <h2 className={styles.title}>FAQ</h2>
      <dl className={styles.list}>
        {mockFAQ.map((item) => (
          <FAQItem key={item.question} faqItem={item}/>
        ))}
      </dl>
    </section>
  );
};

export { FAQContainer };
