import React from "react";
import styles from "./ProductsShoppingPage.module.css";

const ProductsShoppingPage = () => {
  return (
    <div className={styles.ProductsShoppingPageContainer}>
      <div className={styles.contentsContainer}>
        <h1 className={styles.ProductsShoppingPageHeading}>
          Liberate your everyday wellness
        </h1>
        <p className={styles.ProductsShoppingPageSubHeading}>
          Shop our self-care products
        </p>
        <p className={styles.ProductsShoppingPageText}>
          Gentle formulations thoughtfully engineered by specialist researchers
          and doctors to simplify your self-care and get results fast. And, we
          always list our ingredients - so what you see is what you get.
        </p>
        </div>
        <div className={styles.ProductsShoppingPageBottomContainer}>
        <div className={styles.rowContainer}>
        <div className={styles.buttonContainer}>
            <button className={styles.button}>Upgrade your self-care</button>
        </div>
        </div>
        <p className={styles.ProductsShoppingPagePromise}>#NoNasties, we promise!</p>
        </div>
        
      
    </div>
  );
};

export default ProductsShoppingPage;
