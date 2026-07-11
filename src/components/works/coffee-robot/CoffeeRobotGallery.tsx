import styles from "./CoffeeRobotGallery.module.css";

export default function CoffeeRobotGallery() {
  return (
    <div className={styles.gallery}>
      <div className={styles.movie}>
        <iframe
          src="https://www.youtube.com/embed/MR6wVM8Cb8I"
          title="COFFEE ROBOT YOUTUBE"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className={styles.image}>
        <img src="/coffeeRobot/coffeeRobot-001.png" alt="" />
      </div>
      <div className={styles.images01}>
        <div className={styles.img}>
          <img src="/coffeeRobot/coffeeRobot-002.png" alt="" />
        </div>
        <div className={styles.img}>
          <img src="/coffeeRobot/coffeeRobot-003.png" alt="" />
        </div>
        <div className={styles.img}>
          <img src="/coffeeRobot/coffeeRobot-004.png" alt="" />
        </div>
        <div className={styles.img}>
          <img src="/coffeeRobot/coffeeRobot-005.png" alt="" />
        </div>
        <div className={styles.img}>
          <img src="/coffeeRobot/coffeeRobot-006.png" alt="" />
        </div>
        <div className={styles.img}>
          <img src="/coffeeRobot/coffeeRobot-007.png" alt="" />
        </div>
        <div className={styles.img}>
          <img src="/coffeeRobot/coffeeRobot-008.png" alt="" />
        </div>
        <div className={styles.img}>
          <img src="/coffeeRobot/coffeeRobot-009.png" alt="" />
        </div>
      </div>
      <div className={styles.images02}>
        <div className={styles.img}>
          <img src="/coffeeRobot/coffeeRobot-010.png" alt="" />
        </div>
        <div className={styles.img}>
          <img src="/coffeeRobot/coffeeRobot-011.png" alt="" />
        </div>
        <div className={styles.img}>
          <img src="/coffeeRobot/coffeeRobot-012.png" alt="" />
        </div>
      </div>
    </div>
  );
}
