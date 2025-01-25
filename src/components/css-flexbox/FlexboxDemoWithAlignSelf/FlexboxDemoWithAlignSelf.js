//todo: fix framer motion

"use client";
import React from "react";
import { LayoutGroup, motion } from "framer-motion";
import clsx from "clsx";
import toPrimitive from "@/helpers/attribute-converter";
import { range } from "@/utils";
import styles from "./FlexboxDemoWithAlignSelf.module.css";

import ToggleSlider from "../ToggleSlider";
import ArrowShowPrimaryAxis from "../ArrowShowPrimaryAxis";

const alignList = ["stretch", "flex-start", "flex-end", "center", "baseline"];

function FlexboxDemoWithAlignSelf({ attributes }) {
  let initialFlexAttribute = {};
  attributes.map(({ label, values }) => {
    initialFlexAttribute[label] = values[0];
  });

  const [isShownPrimaryAxis, setIsShownPrimaryAxis] = React.useState(false);
  const [flexAttribute, setFlexAttribute] =
    React.useState(initialFlexAttribute);

  const [alignAttribute, setAlignAttribute] = React.useState({
    alignSelf: alignList[0],
  });

  function handleToggle() {
    setIsShownPrimaryAxis(!isShownPrimaryAxis);
  }

  const elementLabels = ["Hello", "To", "The", "World"];
  const alignIndexs = [0];
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
            return alignIndexs.includes(index) ? (
              <motion.div
                className={`${styles.flexItem} ${styles.alignElement}`}
                layout={true}
                transition={CUSTOM_SPRING}
                key={`element-${index}`}
                style={alignAttribute}
              >
                {elementLabels[index]}
              </motion.div>
            ) : (
              <motion.div
                className={`${styles.flexItem}`}
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
            </div>
          );
        })}
        <div className={styles.selector}>
          <b className={`${styles.label} ${styles.highlightText}`}>
            align-self:{" "}
          </b>
          <select
            className={`${styles.select} ${styles.alignElement}`}
            onChange={(event) => {
              const nextAlignAttribute = {
                alignSelf: event.target.value,
              };
              setAlignAttribute(nextAlignAttribute);
            }}
          >
            {alignList.map((value) => {
              return (
                <option key={value} value={value}>
                  {" "}
                  {value}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </div>
  );
}

export default FlexboxDemoWithAlignSelf;
