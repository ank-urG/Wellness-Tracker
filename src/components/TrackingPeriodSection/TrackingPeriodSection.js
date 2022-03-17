import React from "react";
import styles from "./TrackingPeriodSection.module.css";
import menstrual_calendarImg from "../../resources/menstrual_calendar.png"


const TrackingPeriodSection = () => {
  return (
    <div className={styles.TrackingPeriodSectionContainer}>
      <h1 className={styles.heading}>Track your Period</h1>
      <p className={styles.text}>
        Stay in the know with reliable AI-based and science-backed period,
        ovulation, and PMS predictions. The intuitive design makes tracking your
        cycle effortless and helps you stay on top of your monthly data.
      </p>
      <div className={styles.rowContainer}>
      <div className={styles.buttonContainer}>
          <button className={styles.button}>Track your period on the app</button>
      </div>
      </div>
      <img className={styles.image} src={menstrual_calendarImg} alt="refresh"/>
    </div>
  );
};

export default TrackingPeriodSection;
