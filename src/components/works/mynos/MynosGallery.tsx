import styles from "./MynosGallery.module.css";

export default function MynosGallery() {
  return (
    <div className={styles.gallery}>
      <div className={styles.image}>
        <img src="/mynos/mynos-001.png" alt="" />
      </div>
      <div className={styles.images}>
        <div className={styles.img}>
          <img src="/mynos/mynos-002.png" alt="" />
        </div>
        <div className={styles.img}>
          <img src="/mynos/mynos-003.png" alt="" />
        </div>
        <div className={styles.img}>
          <img src="/mynos/mynos-004.png" alt="" />
        </div>
        <div className={styles.img}>
          <img src="/mynos/mynos-005.png" alt="" />
        </div>
        <div className={styles.img}>
          <img src="/mynos/mynos-006.png" alt="" />
        </div>
        <div className={styles.img}>
          <img src="/mynos/mynos-007.png" alt="" />
        </div>
        <div className={styles.img}>
          <img src="/mynos/mynos-008.png" alt="" />
        </div>
      </div>
    </div>
  );
}
