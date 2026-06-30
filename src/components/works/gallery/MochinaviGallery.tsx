import styles from "./MochinaviGallery.module.css";

export default function MochinaviGallery() {
  return (
    <div className={styles.gallery}>
      <div className={styles.movie}>
        <iframe
          src="https://www.youtube.com/embed/rcGubeA5V_0"
          title="MOCHINAVI PV YOUTUBE"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className={styles.images}>
        <div className={styles.img}>
          <img src="/mochinavi/mochinavi-001.png" alt="" />
        </div>
        <div className={styles.img}>
          <img src="/mochinavi/mochinavi-002.png" alt="" />
        </div>
        <div className={styles.img}>
          <img src="/mochinavi/mochinavi-003.png" alt="" />
        </div>
        <div className={styles.img}>
          <img src="/mochinavi/mochinavi-004.png" alt="" />
        </div>
        <div className={styles.img}>
          <img src="/mochinavi/mochinavi-005.png" alt="" />
        </div>
        <div className={styles.img}>
          <img src="/mochinavi/mochinavi-006.png" alt="" />
        </div>
      </div>
    </div>
  );
}
