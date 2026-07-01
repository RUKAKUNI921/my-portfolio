import WorkSection from "@/components/sections/WorkSection";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={`u-main`}>
      <section className={styles.hero}>
        <h1 className={styles.ttl}>
          <span className={`${styles.enB} u-ff-en-b u-trim`}>PORTFOLIO</span>
          <span className={`${styles.enS} u-ff-en-m u-trim`}>RUKA KUNIMOTO</span>
        </h1>
      </section>
      <WorkSection />
    </main>
  );
}
