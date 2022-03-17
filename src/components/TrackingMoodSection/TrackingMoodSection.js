import React from "react";
import styles from "./TrackingMoodSection.module.css";
import cx from "classnames"
import woman_img_1 from "../../resources/woman_img_1.png";
import woman_img_2 from "../../resources/woman_img_2.png";
import woman_img_3 from "../../resources/woman_img_3.png";
import woman_img_4 from "../../resources/woman_img_4.png";

const TrackingMoodSection = () => {
  return (
    <div className={styles.TrackingMoodSectionContainer}>
      <h1 className={styles.TrackingMoodSectionHeading}>Track your mood</h1>
      <p className={styles.TrackingMoodSectionText}>
        All days and all moods are not made equal. But we can only improve what
        we measure. Track your mood and vitals (including skin and hair health)
        so you can take better care of yourself every day.
      </p>
      <div className={styles.buttonContainer}>
        <button className={styles.button}>Track your mood on the app</button>
      </div>
      <div className={styles.imagesContianer}>
        <div className={styles.imagesRowContainer}>
          <img className={styles.image} src={woman_img_1} alt="refresh" />
          <img className={styles.image} src={woman_img_2} alt="refresh"/>
        </div>
        <div className={cx(styles.imagesRowContainer, styles.extraBottomMargin)}>
          <img className={styles.image} src={woman_img_3} alt="refresh"/>
          <img className={styles.image} src={woman_img_4} alt="refresh"/>
        </div>
      </div>
    </div>
  );
};

export default TrackingMoodSection;
