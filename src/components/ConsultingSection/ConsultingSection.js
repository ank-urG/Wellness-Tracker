import React from "react";
import styles from "./ConsultingSection.module.css";
import cunsultantImg from "../../resources/cunsultantImg.png"

const ConsultingSection = () => {
  return (
    <div className={styles.ConsultingSectionContainer}>
      <h1 className={styles.heading}>Consult with wellness experts</h1>
      <p className={styles.text}>
        Set up health consultations with experienced doctors and therapists on
        our app. Simply select a service, answer a few questions, and we’ll
        connect you to someone who is the right-fit for you.
      </p>
      <div className={styles.buttonsContainer}>
          <button className={styles.button}>Get a consultation</button>
      </div>
      <img className={styles.image} src={cunsultantImg} alt="refresh"/>
    </div>

  );
};

export default ConsultingSection;
