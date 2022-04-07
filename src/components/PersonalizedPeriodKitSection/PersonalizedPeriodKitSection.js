import React from 'react'
import styles from './PersonalizedPeriodKitSection.module.css'
import PMS_Potion from '../../resources/PMS_Potion.png'
import rightArrowIcon from '../../resources/chevron_right.svg'

const PersonalizedPeriodKitSection = () => {
  return (
    <div className={styles.PersonalizedPeriodKitSectionContainer}>
      <h1 className={styles.heading}>Get your personalized period box</h1>
      <div className={styles.rowContainer}>
        <div className={styles.imageOverlay}></div>
        <img className={styles.image} src={PMS_Potion} alt='refresh' />
      </div>
      <p className={styles.text}>
        Tailor your monthly box of organic period products without the organic
        price tag (no pink taxing here). Get it delivered to your doorstep in
        sustainable packaging and track your subscription on our app.
        <div className={styles.rowContainer}>
          <div className={styles.createBoxContainer}>
            <p className={styles.createBoxContainerText}>
              Create your box on the app
            </p>
            <img className={styles.icon} src={rightArrowIcon} alt='refresh' />
          </div>
        </div>
      </p>
    </div>
  )
}

export default PersonalizedPeriodKitSection
