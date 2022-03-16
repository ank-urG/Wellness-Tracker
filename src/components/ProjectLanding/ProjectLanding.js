import React from "react";
import styles from "./ProjectLanding.module.css";

const ProjectLanding = () => {
  return (
    <div className={styles.bgContainer}>
      <h1 className={styles.aboutDiana}>About Diana</h1>
      <p className={styles.plateformTagline}>A platform that looks out for you</p>
      <p className={styles.plateformDescription}>Diana empowers you to understand how your body works so you can look and feel your best.</p>
      <hr className={styles.breakingLine}/>
      <h1 className={styles.philosophyTitle}>Our Philosophy</h1>
    </div>
  );
};

export default ProjectLanding;
