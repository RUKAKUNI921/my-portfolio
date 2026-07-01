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
    <main className={`u-main`}>
      <section className={styles.work}>
        <div className={styles.inner}>
          <h1 className={`${styles.ttl} u-ff-en-h u-trim`}>{work.title}</h1>
          <p className={`${styles.cat} u-ff-en-m`}>{work.category.join(" / ")}</p>
          <work.Gallery />
        </div>
      </section>
    </main>
  );
}
