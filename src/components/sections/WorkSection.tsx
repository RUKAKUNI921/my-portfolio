import { works } from "@/data/works";
import styles from "./WorkSection.module.css";
import Link from "next/link";
import FadeImage from "@/components/works/FadeImage";

export default function WorkSection() {
  return (
    <section className={`${styles.workSection} u-section-margin`}>
      <div className={`u-inner`}>
        <h2 className={`${styles.ttl} u-ff-en-h u-trim`} data-anim-step="ttl">
          WORKS
        </h2>
        <div className={styles.line} data-anim-step="line" />
        <ul className={`${styles.list}`}>
          {works.map((work) => (
            <li key={work.id} data-anim-step="item">
              <Link href={`/work/${work.slug}`} className={styles.article}>
                <div className={styles.inner}>
                  <div className={styles.body}>
                    <h3 className={`${styles.articleTtl} u-ff-en-m u-trim`}>{work.title}</h3>
                    <p className={`${styles.info} u-ff-en-l u-trim`}>
                      <span className={`${styles.cat}`}>{work.category.join(" / ")}</span>
                    </p>
                  </div>
                  <div className={styles.thumb}>
                    <FadeImage src={work.thumb} alt={work.title} scrollTrigger={false} />
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
