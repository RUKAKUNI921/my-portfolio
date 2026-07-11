import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={`${styles.footer}`}>
      <p className={`${styles.txt} u-ff-en-l`}>&copy; {new Date().getFullYear()} ruka kunimoto</p>
    </footer>
  );
}
