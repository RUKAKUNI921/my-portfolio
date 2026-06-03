import { works, worksOrder } from "@/data/works";
import Work from "@/components/works/Work";
import styles from "./page.module.css";

const sortedWorks = worksOrder.map((id) => works.find((w) => w.id === id)!);

export default function Home() {
  return (
    <main>
      <section className={styles.hero}>
        <h1 className={styles.ttl}>
          <span className={`${styles.enB} u-ff-en-b u-trim`}>PORTFOLIO</span>
          <span className={`${styles.enS} u-ff-en-m u-trim`}>
            RUKA KUNIMOTO
          </span>
        </h1>
      </section>
      <section className={styles.works}>
        <div className={styles.inner}>
          <h2 className={`${styles.ttl} u-ff-en-b u-trim`}>WORKS</h2>
          <ul className={styles.list}>
            {sortedWorks.map((work) => (
              <li key={work.id} className={styles.item}>
                <Work work={work} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
