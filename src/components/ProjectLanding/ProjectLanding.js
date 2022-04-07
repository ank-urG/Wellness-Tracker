import React from 'react'
import styles from './ProjectLanding.module.css'
import testTubeImg from '../../resources/testTube.svg'
import starsImg from '../../resources/stars.svg'
import phoneCallImg from '../../resources/phoneCall.svg'

const ProjectLanding = () => {
  return (
    <div className={styles.bgContainer}>
      <div className={styles.contentConatiner}>
        <h1 className={styles.aboutDiana}>About Diana</h1>
        <p className={styles.plateformTagline}>
          A platform that looks out for you
        </p>
        <p className={styles.plateformDescription}>
          Diana empowers you to understand how your body works so you can look
          and feel your best.
        </p>
        <hr className={styles.breakingLine} />
        <h1 className={styles.philosophyTitle}>Our Philosophy</h1>
        <p className={styles.philosophySlogan}>
          Sustainable wellness is a big-picture, inside out approach
        </p>
        <p className={styles.philosophySectionDescription}>
          Diana is on a mission to create thoughtful, science-backed solutions
          for women who want to make informed decisions about their health and
          wellness.
          <br />
          <br />
          That’s why we’ve created an integrated ecosystem of:
        </p>
        <div className={styles.imgContainer}>
          <img className={styles.testTubeImg} src={testTubeImg} alt='refresh' />
        </div>
        <div>
          <p className={styles.appFeatures}>
            Consciously formulated products that deliver feel-good results fast
          </p>
          <div className={styles.imgContainer}>
            <img className={styles.starsImg} src={starsImg} alt='refresh' />
          </div>

          <p className={styles.appFeatures}>
            In-app mood and period tracking options that help you cultivate a
            deeper connection with your mind and body
          </p>
          <div className={styles.imgContainer}>
            <img
              className={styles.phoneCallImg}
              src={phoneCallImg}
              alt='refresh'
            />
          </div>

          <p className={styles.appFeatures}>
            In-app consultation portals that connect you with compassionate
            wellness experts
          </p>
          <p className={styles.appFeatures}>
            Consider us your nerdy ally who spends their time perfecting
            products that work because they want you to feel your best everyday.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProjectLanding
