import React from "react";

import styles from "./FlexboxDemo.module.css";

import ToggleSlider from "../ToggleSlider";

function FlexboxDemo() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <ToggleSlider></ToggleSlider>
      </header>
      <div className={styles.demoArea}></div>
    </div>
  );
}

export default FlexboxDemo;
