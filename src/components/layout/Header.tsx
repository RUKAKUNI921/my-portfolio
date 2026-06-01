import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <a href="/">PORTFOLIO</a>
      </nav>
    </header>
  );
}
