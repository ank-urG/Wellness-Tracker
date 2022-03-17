import React from "react";
import styles from "./OurUniqueness.module.css";
import cx from "classnames";

const OurUniqueness = () => {
  return (
    <div className={styles.uniquenessContainer}>
      <h1 className={styles.uniquenessContainerHeading}>
        What makes us different?
      </h1>
      <p className={styles.uniquenessContainerSlogan}>
        Reimagining and rewiring self-care
      </p>
      <div className={styles.textContainer}>
        <p className={styles.uniquenessContainerDescription}>
          You care about conscious consumption, and so do we.
          <br />
          <br />
          When it comes to your health, “good enough” is not good enough. We’re
          here to flip the script on that narrative because you deserve the best
          <br />
          <br /> We collaborate with researchers and doctors to 
        </p>
        <ul className={styles.listContainer}>
          <li>
            Help you get granular about your health and self-care with
            personalized insights, and
          </li>
          <li className={styles.topMargin}>
            Equip you with simple, sustainable products that get the job done
          </li>
        </ul>
        <p className={styles.uniquenessContainerDescription}>No
          to-the-moon-and-back claims in this neck of the woods.<br/><br/>We’re just
          solving real problems for real people here.</p>
      </div>
    </div>
  );
};

export default OurUniqueness;
