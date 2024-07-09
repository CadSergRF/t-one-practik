import styles from "./HeaderFooterLayout.module.css";

type Props = {
  children: React.ReactNode;
};

const HeaderFooterLayout = ({ children }: Props) => {
  return <div className={styles.container}>{children}</div>;
};

export { HeaderFooterLayout };
