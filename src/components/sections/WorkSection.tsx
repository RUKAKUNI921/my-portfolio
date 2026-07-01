import { works } from "@/data/works";
import styles from "./WorkSection.module.css";
import Link from "next/link";

export default function WorkSection() {
  return (
    <section className={`${styles.workSection}`}>
      <div className={`u-inner`}>
        <h2 className={`${styles.ttl} u-ff-en-b u-trim`}>WORKS</h2>
        <ul className={`${styles.list}`}>
          {works.map((work) => (
            <li key={work.id}>
              <Link href={`/work/${work.slug}`} className={styles.article}>
                <div className={styles.inner}>
                  <div className={styles.body}>
                    <h3 className={`${styles.articleTtl} u-ff-en-h`}>{work.title}</h3>
                    <p className={`${styles.cat} u-ff-en-m`}>{work.category.join(" / ")}</p>
                    <p className={`${styles.year} u-ff-en-m`}>{work.year}</p>
                  </div>
                  <div className={styles.thumb}>
                    <img src={work.thumb} alt={work.title} />
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
