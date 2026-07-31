import styles from "../gallery.module.css";
import myStyles from "./CoffeeRobotGallery.module.css";
import FadeImage from "../FadeImage";
import FadeVideo from "../FadeVideo";

export default function CoffeeRobotGallery() {
  return (
    <div className={styles.gallery}>
      <div className={styles.movie}>
        <FadeVideo src="https://www.youtube.com/embed/MR6wVM8Cb8I" title="COFFEE ROBOT YOUTUBE" />
      </div>
      <div className={`${styles.image} ${myStyles.image}`}>
        <FadeImage src="/coffeeRobot/coffeeRobot-001.png" alt="" />
      </div>
      <div className={myStyles.images01}>
        <div className={myStyles.img}>
          <FadeImage src="/coffeeRobot/coffeeRobot-002.png" alt="" />
        </div>
        <div className={myStyles.img}>
          <FadeImage src="/coffeeRobot/coffeeRobot-003.png" alt="" />
        </div>
        <div className={myStyles.img}>
          <FadeImage src="/coffeeRobot/coffeeRobot-004.png" alt="" />
        </div>
        <div className={myStyles.img}>
          <FadeImage src="/coffeeRobot/coffeeRobot-005.png" alt="" />
        </div>
        <div className={myStyles.img}>
          <FadeImage src="/coffeeRobot/coffeeRobot-006.png" alt="" />
        </div>
        <div className={myStyles.img}>
          <FadeImage src="/coffeeRobot/coffeeRobot-007.png" alt="" />
        </div>
        <div className={myStyles.img}>
          <FadeImage src="/coffeeRobot/coffeeRobot-008.png" alt="" />
        </div>
        <div className={myStyles.img}>
          <FadeImage src="/coffeeRobot/coffeeRobot-009.png" alt="" />
        </div>
      </div>
      <div className={myStyles.images02}>
        <div className={myStyles.img}>
          <FadeImage src="/coffeeRobot/coffeeRobot-010.png" alt="" />
        </div>
        <div className={myStyles.img}>
          <FadeImage src="/coffeeRobot/coffeeRobot-011.png" alt="" />
        </div>
        <div className={myStyles.img}>
          <FadeImage src="/coffeeRobot/coffeeRobot-012.png" alt="" />
        </div>
      </div>
    </div>
  );
}
