import styles from "../gallery.module.css";
import FadeImage from "../FadeImage";

export default function SplitKeyboardGallery() {
  return (
    <div className={styles.gallery}>
      <div className={`${styles.image}`}>
        <FadeImage src="/splitKeyboard/splitKeyboard-005.png" alt="" />
      </div>
      <div className={styles.imageGrid}>
        <div className={styles.img}>
          <FadeImage src="/splitKeyboard/splitKeyboard-001.png" alt="" />
        </div>
        <div className={styles.img}>
          <FadeImage src="/splitKeyboard/splitKeyboard-002.png" alt="" />
        </div>
        <div className={styles.img}>
          <FadeImage src="/splitKeyboard/splitKeyboard-003.png" alt="" />
        </div>
        <div className={styles.img}>
          <FadeImage src="/splitKeyboard/splitKeyboard-004.png" alt="" />
        </div>
      </div>
    </div>
  );
}
