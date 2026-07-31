import styles from "../gallery.module.css";
import FadeImage from "../FadeImage";

export default function SusumuJukukaidoGallery() {
  return (
    <div className={styles.gallery}>
      <div className={`${styles.image}`}>
        <FadeImage src="/susumuJukukaido/susumuJukukaido-001.png" alt="" />
      </div>
      <div className={styles.imageGrid}>
        <div className={styles.img}>
          <FadeImage src="/susumuJukukaido/susumuJukukaido-002.png" alt="" />
        </div>
        <div className={styles.img}>
          <FadeImage src="/susumuJukukaido/susumuJukukaido-003.png" alt="" />
        </div>
        <div className={styles.img}>
          <FadeImage src="/susumuJukukaido/susumuJukukaido-004.png" alt="" />
        </div>
        <div className={styles.img}>
          <FadeImage src="/susumuJukukaido/susumuJukukaido-005.png" alt="" />
        </div>
        <div className={styles.img}>
          <FadeImage src="/susumuJukukaido/susumuJukukaido-006.png" alt="" />
        </div>
        <div className={styles.img}>
          <FadeImage src="/susumuJukukaido/susumuJukukaido-007.png" alt="" />
        </div>
        <div className={styles.img}>
          <FadeImage src="/susumuJukukaido/susumuJukukaido-008.png" alt="" />
        </div>
        <div className={styles.img}>
          <FadeImage src="/susumuJukukaido/susumuJukukaido-009.png" alt="" />
        </div>
      </div>
    </div>
  );
}
