import React from "react";

import styles from "./ArrowShowPrimaryAxis.module.css";

function ArrowShowPrimaryAxis({ flexDirection }) {
  const cName = `${styles.arrow} ${styles[flexDirection]}`;
  console.log(cName);
  return (
    <div className={`${styles.arrow} ${styles[flexDirection]}`}>
      <div className={styles.line}>
        <span className={styles.primaryAxisLabel}>Primary axis</span>
      </div>
      <div className={styles.point}></div>
    </div>
  );
}

export default ArrowShowPrimaryAxis;
