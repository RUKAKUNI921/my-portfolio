import styles from "./page.module.css";

export default function About() {
  return (
    <main>
      <section className={`${styles.about} u-section-margin`}>
        <div className={`u-inner`}>
          <h1 className={`${styles.ttl} u-ff-en-h`}>ABOUT</h1>
          <div className={`${styles.section}`}>
            <h2 className={`${styles.name} u-ff-txt`}>
              <span className={`${styles.ja} u-ff-ja-r u-trim`}>国本 琉海</span>
              <span className={`${styles.en} u-trim`}>Ruka Kunimoto</span>
            </h2>
            <p className={`${styles.txt} u-ff-txt`}>
              はじめまして、国本琉海です。UI/UXデザインやCGアニメーション制作を中心に活動しています。大学では情報デザインを専攻し、在学中から個人制作・グループ制作を問わずさまざまなプロジェクトに携わってきました。ユーザーの体験を軸に、見た目の美しさだけでなく「使いやすさ」まで含めて設計することを大切にしています。今後はプロダクトデザインの領域にも挑戦し、表現の幅を広げていきたいと考えています。
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
