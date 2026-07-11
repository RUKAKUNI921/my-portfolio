import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={`${styles.screen}`}>
      <Link href="/" className={`${styles.link}`}>
        <span className={`${styles.sorry} u-ff-en-b u-trim`}>SORRY</span>
        <span className={`${styles.num} u-ff-en-b u-trim`}>404</span>
        <span className={`${styles.return} u-ff-en-b u-trim`}>RETURN HOME</span>
      </Link>
    </div>
  );
}
