import { works } from "@/data/works";
import styles from "./WorkSection.module.css";
import Link from "next/link";

export default function WorkSection() {
  return (
    <section className={`${styles.workSection} u-section-margin`}>
      <div className={`u-inner`}>
        <h2 className={`${styles.ttl} u-ff-en-h u-trim`}>WORKS</h2>
        <ul className={`${styles.list}`}>
          {works.map((work) => (
            <li key={work.id}>
              <Link href={`/work/${work.slug}`} className={styles.article}>
                <div className={styles.inner}>
                  <div className={styles.body}>
                    <h3 className={`${styles.articleTtl} u-ff-en-m u-trim`}>{work.title}</h3>
                    <p className={`${styles.info} u-ff-en-l u-trim`}>
                      <span className={`${styles.cat}`}>{work.category.join(" / ")}</span>
                    </p>
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
