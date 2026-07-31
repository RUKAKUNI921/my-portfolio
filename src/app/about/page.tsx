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
              興味を持ったら、まず手を動かしてみる。新しい領域に踏み込むことをおそれず、まずアイデアを考え、実際に手を動かしながら形にしていくことを大切にしています。専門を一つに絞るのではなく、興味を持ったものにはできる限り取り組み、経験を積み重ねてきました。
              <br />
              <br />
              これからも、その時々で必要な技術や手法を自ら学びながら、自分にできることの幅を広げていきたいと考えています。
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
