import React from "react";
import styles from "./FooterSection.module.css";
import facebookIcon from "../../resources/facebookIcon.svg";
import twitterIcon from "../../resources/twitterIcon.svg";
import rightArrowIcon from "../../resources/chevron_right.svg";
import mailIcon from "../../resources/mailIcon.svg";

const FooterSection = () => {
  return (
    <div className={styles.FooterSectionContainer}>
      <div className={styles.socialMediaContainer}>
        <img className={styles.Icon} src={facebookIcon} alt="refresh" />
        <img className={styles.Icon} src={twitterIcon} alt="refresh" />
      </div>
      <ul className={styles.listContainer}>
      <li className={styles.listItme}>
          <p className={styles.listItmeText}>Products</p>
          <img
            className={styles.arrowIcon}
            src={rightArrowIcon}
            alt="refresh"
          />
        </li>
        <li className={styles.listItme}>
          <p className={styles.listItmeText}>Our Science</p>
          <img
            className={styles.arrowIcon}
            src={rightArrowIcon}
            alt="refresh"
          />
        </li>
        <li className={styles.listItme}>
          <p className={styles.listItmeText}>Vision & Mission</p>
          <img
            className={styles.arrowIcon}
            src={rightArrowIcon}
            alt="refresh"
          />
        </li>
        <li className={styles.listItme}>
          <p className={styles.listItmeText}>About Us</p>
          <img
            className={styles.arrowIcon}
            src={rightArrowIcon}
            alt="refresh"
          />
        </li>
        <li className={styles.listItme}><hr className={styles.breakingLine}/></li>
        <li >
        <label className={styles.labelText} for="email">Subscribe to our Newsletter</label><br/>
        <div className={styles.rowContainer}>
        <input className={styles.inputBox} type="text" id="email" name="email" placeholder="Enter your email..."/>
             
        <div className={styles.ActivateContainer}>
            <img className={styles.mailIcon} src={mailIcon} alt="refresh"/>
            <p className={styles.ActivateText}>Activate</p>
        </div>
        </div> 
        </li>
      </ul>
      
    </div>
  );
};
export default FooterSection;
