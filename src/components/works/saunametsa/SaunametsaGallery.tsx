import styles from "../gallery.module.css";
import FadeImage from "../FadeImage";

export default function SaunametsaGallery() {
  return (
    <div className={styles.gallery}>
      <div className={`${styles.image}`}>
        <FadeImage src="/saunametsa/saunametsa-001.png" alt="" />
      </div>
      <div className={styles.imageGrid}>
        <div className={styles.img}>
          <FadeImage src="/saunametsa/saunametsa-002.png" alt="" />
        </div>
        <div className={styles.img}>
          <FadeImage src="/saunametsa/saunametsa-003.png" alt="" />
        </div>
        <div className={styles.img}>
          <FadeImage src="/saunametsa/saunametsa-004.png" alt="" />
        </div>
        <div className={styles.img}>
          <FadeImage src="/saunametsa/saunametsa-005.png" alt="" />
        </div>
      </div>
    </div>
  );
}
