import React from 'react'
import styles from './FinalMessageSection.module.css'

const FinalMessage = () => {
  return (
    <div className={styles.FinalMessageContainer}>
      <div className={styles.blurContainer}>
        <div className={styles.blurOverlay}></div>
        <p className={styles.text}>
          With Diana, you’re in control of your health, your every day, and your
          story.
        </p>
      </div>
    </div>
  )
}

export default FinalMessage
