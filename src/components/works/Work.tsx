import Link from "next/link";
import type { Work } from "@/data/works";
import styles from "./Work.module.css";

type Props = {
  work: Work;
};

export default function Work({ work }: Props) {
  return (
    <Link href={`/work/${work.slug}`} className={styles.article}>
      <div className={styles.inner}>
        <div className={styles.body}>
          <p className={`${styles.cat} u-ff-en-m`}>
            {work.category.join(" / ")}
          </p>
          <h3 className={`${styles.ttl} u-ff-en-m`}>{work.title}</h3>
          <p className={`${styles.year} u-ff-en-m`}>{work.year}</p>
        </div>
        <div className={styles.thumb}></div>
      </div>
    </Link>
  );
}
