import React from "react"
import styles from "./NavbarSection.module.css"
import bellIcon from "../../resources/bellIcon.svg"
import menuIcon from "../../resources/menuIcon.svg"
import shoppingIcon from "../../resources/shoppingIcon.svg"

const NavbarSection =() => {
return (
    <div className={styles.NavbarContainer}>
        <img className={styles.Icon} src={menuIcon} alt="refresh"/>
        <div>
        <img className={styles.Icon} src={shoppingIcon} alt="refresh"/>
        <img className={styles.Icon} src={bellIcon} alt="refresh"/>
        </div>
    </div>
)
};

export default NavbarSection