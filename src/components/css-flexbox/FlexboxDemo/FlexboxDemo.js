//TODO: Fix framer-motion for flexItems & fix react class name & fix attribute select btn
//  & fix selector label  :))))))
"use client";

import React from "react";
import { LayoutGroup, motion } from "framer-motion";

import toPrimitive from "@/helpers/attribute-converter";
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

  const CUSTOM_SPRING = {
    type: "spring",
    stiffness: 300,
    damping: 100,
  };

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <ToggleSlider handleToggle={handleToggle} />
        <p className={styles.description}>Show primary Axis</p>
      </header>

      <div className={styles.demoArea} style={flexAttribute}>
        <LayoutGroup>
          <motion.div
            className={styles.flexItem}
            layout={true}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            key="test1"
          >
            Hello
          </motion.div>
          <motion.div
            className={styles.flexItem}
            layout={true}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 35,
            }}
            key="test2"
          >
            To
          </motion.div>
          <motion.div
            className={styles.flexItem}
            layout={true}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 40,
            }}
            key="test3"
          >
            The
          </motion.div>
          <motion.div
            className={styles.flexItem}
            layout={true}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 45,
            }}
            key="test4"
          >
            World
          </motion.div>
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
