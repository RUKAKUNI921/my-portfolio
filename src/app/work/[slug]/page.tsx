import { notFound } from "next/navigation";
import { works } from "@/data/works";
import styles from "./page.module.css";

export function generateStaticParams() {
  return works.map((work) => ({ slug: work.slug }));
}

export default async function WorkPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const work = works.find((w) => w.slug === slug);

  if (!work) notFound();

  return (
    <main className={``}>
      <section className={`${styles.work} u-section-margin`}>
        <div className={styles.inner}>
          <div className={`${styles.ttlWrap}`}>
            <h1 className={`${styles.ttl} u-ff-en-m u-trim`}>{work.title}</h1>
            <p className={`${styles.cat} u-ff-en-l u-trim`}>{work.category.join(" / ")}</p>
          </div>

          <div className={`${styles.infoWrap}`}>
            <p className={`${styles.desc} u-ff-txt`}>{work.description}</p>
            <ul className={`${styles.list}`}>
              <li className={`${styles.item} u-ff-txt u-trim`}>
                <span className={`${styles.tag}`}>PROJECT TYPE :</span>
                {work.workType}
              </li>
              <li className={`${styles.item} u-ff-txt u-trim`}>
                <span className={`${styles.tag}`}>TOOLS :</span>
                {work.tools.join(" / ")}
              </li>
              <li className={`${styles.item} u-ff-txt u-trim`}>
                <span className={`${styles.tag}`}>DATE :</span>
                {work.year}
              </li>
            </ul>
          </div>

          <div className={`${styles.gallery}`}>
            <work.Gallery />
          </div>
        </div>
      </section>
    </main>
  );
}
