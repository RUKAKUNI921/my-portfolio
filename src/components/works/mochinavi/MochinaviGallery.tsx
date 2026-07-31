import styles from "../gallery.module.css";
import FadeImage from "../FadeImage";
import FadeVideo from "../FadeVideo";

export default function MochinaviGallery() {
  return (
    <div className={styles.gallery}>
      <div className={styles.movie}>
        <FadeVideo src="https://www.youtube.com/embed/rcGubeA5V_0" title="MOCHINAVI PV YOUTUBE" />
      </div>
      <div className={styles.imageGrid}>
        <div className={styles.img}>
          <FadeImage src="/mochinavi/mochinavi-001.png" alt="" />
        </div>
        <div className={styles.img}>
          <FadeImage src="/mochinavi/mochinavi-002.png" alt="" />
        </div>
        <div className={styles.img}>
          <FadeImage src="/mochinavi/mochinavi-003.png" alt="" />
        </div>
        <div className={styles.img}>
          <FadeImage src="/mochinavi/mochinavi-004.png" alt="" />
        </div>
        <div className={styles.img}>
          <FadeImage src="/mochinavi/mochinavi-005.png" alt="" />
        </div>
        <div className={styles.img}>
          <FadeImage src="/mochinavi/mochinavi-006.png" alt="" />
        </div>
      </div>
    </div>
  );
}
