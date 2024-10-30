//TODO: Fix framer-motion for flexItems & fix react class name :))
"use client";

import React from "react";
import { motion } from "framer-motion";

import styles from "./FlexboxDemo.module.css";

import ToggleSlider from "../ToggleSlider";

const attributes = [
  {
    label: "flex-direction",
    values: ["row", "column"],
  },
  {
    label: "justify-content",
    values: ["center", "space-between"],
  },
];

function FlexboxDemo({ attributes }) {
  let initialFlexAttribute = {};
  attributes.map(({ label, values }) => {
    initialFlexAttribute[label] = values[0];
  });

  const [isShownPrimaryAxis, setIsShownPrimaryAxis] = React.useState(false);
  const [flexAttribute, setFlexAttribute] =
    React.useState(initialFlexAttribute);

  function handleToggle() {
    setIsShownPrimaryAxis(!isShownPrimaryAxis);
  }

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <ToggleSlider handleToggle={handleToggle} />
        <p className={styles.description}>Show primary Axis</p>
      </header>

      <div className={styles.demoArea} style={flexAttribute}>
        <motion.div className={styles.flexItem} layout={true} key="test1">
          Hello
        </motion.div>
        <motion.div className={styles.flexItem} layout={true} key="test2">
          To
        </motion.div>
        <motion.div className={styles.flexItem} layout={true} key="test3">
          The
        </motion.div>
        <motion.div className={styles.flexItem} layout={true} key="test4">
          World
        </motion.div>

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
              <b className={styles.label}>{label}: </b>

              {attributes.length === 1 ? (
                values.map((value) => {
                  return (
                    <button
                      key={value}
                      className={styles.button}
                      onClick={() => {
                        const nextFlexAttribute = {
                          ...flexAttribute,
                          [label]: value,
                        };
                        setFlexAttribute(nextFlexAttribute);
                      }}
                    >
                      {value}
                    </button>
                  );
                })
              ) : (
                <select
                  className={styles.select}
                  onChange={(event) => {
                    const nextFlexAttribute = {
                      ...flexAttribute,
                      [label]: event.target.value,
                    };
                    setFlexAttribute(nextFlexAttribute);
                    console.log(nextFlexAttribute);
                  }}
                >
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
