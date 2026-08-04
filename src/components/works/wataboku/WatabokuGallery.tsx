import styles from "../gallery.module.css";
import myStyles from "./WatabokuGallery.module.css";
import FadeImage from "../FadeImage";

export default function WatabokuGallery() {
  return (
    <div className={styles.gallery}>
      <div className={styles.image}>
        <FadeImage src="/wataboku/wataboku.png" alt="" />
      </div>
      <div className={myStyles.imageGrid}>
        <div className={myStyles.img}>
          <FadeImage src="/wataboku/wataboku-about-001.png" alt="" />
        </div>
        <div className={myStyles.img}>
          <FadeImage src="/wataboku/wataboku-about-002.png" alt="" />
        </div>
      </div>
      <div className={`${styles.image} ${myStyles.image}`}>
        <FadeImage src="/wataboku/wataboku-how.png" alt="" />
      </div>
      <div className={myStyles.imageGrid}>
        <div className={myStyles.img}>
          <FadeImage src="/wataboku/wataboku-how-001.png" alt="" />
        </div>
        <div className={myStyles.img}>
          <FadeImage src="/wataboku/wataboku-how-002.png" alt="" />
        </div>
        <div className={myStyles.img}>
          <FadeImage src="/wataboku/wataboku-how-003.png" alt="" />
        </div>
        <div className={myStyles.img}>
          <FadeImage src="/wataboku/wataboku-how-004.png" alt="" />
        </div>
        <div className={myStyles.img}>
          <FadeImage src="/wataboku/wataboku-how-005.png" alt="" />
        </div>
        <div className={myStyles.img}>
          <FadeImage src="/wataboku/wataboku-how-006.png" alt="" />
        </div>
      </div>
      <div className={`${styles.image} ${myStyles.image}`}>
        <FadeImage src="/wataboku/wataboku-effect.png" alt="" />
      </div>
      <div className={myStyles.imageGrid}>
        <div className={myStyles.img}>
          <FadeImage src="/wataboku/wataboku-effect-001.png" alt="" />
        </div>
        <div className={myStyles.img}>
          <FadeImage src="/wataboku/wataboku-effect-002.png" alt="" />
        </div>
      </div>
    </div>
  );
}
