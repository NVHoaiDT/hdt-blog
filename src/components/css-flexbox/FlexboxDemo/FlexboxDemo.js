//TODO: fix react class name & fix attribute select btn & fix selector label
"use client";

import React from "react";
import { LayoutGroup, motion } from "framer-motion";

import toPrimitive from "@/helpers/attribute-converter";
import { range } from "@/utils";
import styles from "./FlexboxDemo.module.css";

import ToggleSlider from "../ToggleSlider";
import ArrowShowPrimaryAxis from "../ArrowShowPrimaryAxis";

// const attributes = [
//   {
//     label: "flexDirection",
//     values: ["row", "column"],
//   },
//   {
//     label: "justifyContent",
//     values: [
//       "flex-start",
//       "flex-end",
//       "center",
//       "space-between",
//       "space-around",
//       "space-evenly",
//     ],
//   },
// ];

/* 
  const flexAttribute = {
    flexDirection: "row",
    justifyContent: "space-between",
  }
*/
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

  const elementLabels = ["Hello", "To", "The", "World"];
  const CUSTOM_SPRING = {
    type: "spring",
    stiffness: 300,
    damping: 30,
  };

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <ToggleSlider handleToggle={handleToggle} />
        <p className={styles.description}>Show primary Axis</p>
      </header>

      <div className={styles.demoArea} style={flexAttribute}>
        <LayoutGroup>
          {range(0, 4).map((index) => {
            return (
              <motion.div
                className={styles.flexItem}
                layout={true}
                transition={CUSTOM_SPRING}
                key={`element-${index}`}
              >
                {elementLabels[index]}
              </motion.div>
            );
          })}
        </LayoutGroup>
        {isShownPrimaryAxis && (
          <ArrowShowPrimaryAxis
            flexDirection={flexAttribute.flexDirection || "row"}
          />
        )}
      </div>

      <div className={styles.attributeSelector}>
        {attributes.map(({ label, values }) => {
          return (
            <div key={label} className={styles.selector}>
              <b className={styles.label}>{toPrimitive(label)}: </b>

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
