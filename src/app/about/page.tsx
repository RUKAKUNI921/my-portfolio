import styles from "./page.module.css";

type Item = {
  date: string;
  detail: string;
};

type Skill = {
  cat: string;
  detail: string[];
};

export default function About() {
  const school: Item[] = [
    { date: "2022.03", detail: "大阪明星学園 明星高等学校 卒業" },
    { date: "2023.04", detail: "法政大学 デザイン工学部 システムデザイン学科 入学" },
    { date: "2025.08", detail: "ビジュアライゼーションデザイン研究室 所属" },
    { date: "2026.03", detail: "法政大学 デザイン工学部 システムデザイン学科 卒業見込み" },
  ];
  const job: Item[] = [
    { date: "2023.08 -", detail: "ドトールコーヒーショップ アルバイト" },
    { date: "2026.02 -", detail: "株式会社 Laugh Mind 長期インターン" },
  ];
  const skill: Skill[] = [
    {
      cat: "Sowtware",
      detail: ["Illustrator", "Maya", "Blender", "Substance 3D Painter", "After Effects", "Fusion360"],
    },
    { cat: "Programing", detail: ["HTML / CSS", "JavaScript", "TypeScript", "React", "GSAP", "PHP"] },
  ];

  return (
    <main>
      <section className={`${styles.about} u-section-margin`}>
        <div className={`u-inner`}>
          <h1 className={`${styles.ttl} u-ff-en-h`}>ABOUT</h1>
          <div className={`${styles.section}`}>
            <h2 className={`${styles.name} u-ff-txt`}>
              <span className={`${styles.ja} u-ff-ja-r u-trim`}>国本 琉海</span>
              <span className={`${styles.en} u-ff-en-m u-trim`}>Ruka Kunimoto</span>
            </h2>
            <p className={`${styles.txt} u-ff-txt`}>
              大阪生まれ、東京在住。
              <br />
              興味を持ったことは、まず自分で試してみることを大切にしています。
              <br />
              <br />
              デザインや映像、3DCG、Web、電子工作など、分野を限定せず、必要だと思った技術は実際に手を動かしながら身につけてきました。新しいソフトや技術にも抵抗がなく、知らない領域でも試行錯誤しながら形にしていくことが得意です。
              <br />
              <br />
              一つの専門にとどまらず、異なる分野を横断しながら、自分にできることを少しずつ広げていきたいと考えています。
            </p>
            <h3 className={`${styles.skill} u-ff-en-h u-trim`}>SCHOOL</h3>
            <ul className={`${styles.list}`}>
              {school.map((item, index) => (
                <li className={`${styles.item}`} key={index}>
                  <span className={`${styles.date} u-ff-en-l u-trim`}>{item.date}</span>
                  <span className={`${styles.detail} u-ff-ja-r`}>{item.detail}</span>
                </li>
              ))}
            </ul>
            <h3 className={`${styles.skill} u-ff-en-h u-trim`}>JOB</h3>
            <ul className={`${styles.list}`}>
              {job.map((item, index) => (
                <li className={`${styles.item}`} key={index}>
                  <span className={`${styles.date} u-ff-en-l u-trim`}>{item.date}</span>
                  <span className={`${styles.detail} u-ff-txt`}>{item.detail}</span>
                </li>
              ))}
            </ul>
            <h3 className={`${styles.skill} u-ff-en-h u-trim`}>SKILL SETS</h3>
            {skill.map((skill, index) => (
              <div className={`${styles.skillBlock}`} key={index}>
                <h4 className={`${styles.cat} u-ff-en-m u-trim`}>{skill.cat}</h4>
                <ul className={`${styles.skillList}`}>
                  {skill.detail.map((item, itemIndex) => (
                    <li className={`${styles.skillItem} u-ff-en-l u-trim`} key={itemIndex}>
                      {item}
                      {itemIndex < skill.detail.length - 1 ? " ," : ""}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
