import { notFound } from "next/navigation";
import { works } from "@/data/works";
import styles from "./page.module.css";
import WorkIntro from "./WorkIntro";

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
        <div className={`${styles.inner} u-inner`}>
          <WorkIntro
            work={{
              title: work.title,
              category: work.category,
              thumb: work.thumb,
              description: work.description,
              workType: work.workType,
              tools: work.tools,
              year: work.year,
              link: work.link,
            }}
          />

          <div className={`${styles.gallery}`}>
            <work.Gallery />
          </div>
        </div>
      </section>
    </main>
  );
}
