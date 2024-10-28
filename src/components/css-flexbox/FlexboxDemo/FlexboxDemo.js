//TODO: refactor CSS classname, add state to start react
"use client";

import React from "react";

import styles from "./FlexboxDemo.module.css";

import ToggleSlider from "../ToggleSlider";

function FlexboxDemo() {
  const [isShownPrimaryAxis, setIsShownPrimaryAxis] = React.useState(false);
  function handleToggle() {
    setIsShownPrimaryAxis(!isShownPrimaryAxis);
  }

  const attributes = [
    {
      label: "flex-direction:",
      values: ["row", "column"],
    },
    {
      label: "justify-content:",
      values: ["center", "space-between"],
    },
  ];

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <ToggleSlider handleToggle={handleToggle} />
        <p className={styles.description}>Show primary Axis</p>
      </header>
      <div className={styles.demoArea}>
        <div className={styles.flexItem}>Hello</div>
        <div className={styles.flexItem}>To</div>
        <div className={styles.flexItem}>The</div>
        <div className={styles.flexItem}>World</div>

        {isShownPrimaryAxis && (
          <div className={styles.arrow}>
            <div className={styles.line}></div>
            <div className={styles.point}></div>
          </div>
        )}
      </div>
      <div className={styles.attributeSelector}>
        {attributes.map(({ label, values }) => {
          return (
            <div key={label} className={styles.selector}>
              <b className={styles.label}>{label}</b>

              {attributes.length === 1 ? (
                values.map((value) => {
                  return (
                    <button key={value} className={styles.button}>
                      {value}
                    </button>
                  );
                })
              ) : (
                <select className={styles.select}>
                  {values.map((value) => {
                    return (
                      <option key={value} value={value}>
                        {" "}
                        {value}
                      </option>
                    );
                  })}
                </select>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FlexboxDemo;
