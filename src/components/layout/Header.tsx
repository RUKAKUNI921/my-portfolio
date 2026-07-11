import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={`${styles.header}`}>
      <div className={`${styles.inner}`}>
        <Link href="/" className={`${styles.logo} u-ff-en-m u-trim`}>
          RUKA KUNIMOTO
        </Link>
        <nav className={`${styles.nav}`}>
          <ul className={`${styles.list}`}>
            <li className={`${styles.item} u-ff-en-m u-trim`}>
              <Link href="/">WORKS</Link>
            </li>
            <li className={`${styles.item} u-ff-en-m u-trim`}>
              <Link href="/about">ABOUT</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
