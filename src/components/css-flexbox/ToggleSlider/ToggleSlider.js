"use client";

import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

import styles from "./ToggleSlider.module.css";

function ToggleSlider() {
  const [shownPrimaryAxis, setShownPrimaryAxis] = React.useState(false);

  const activeClassName = shownPrimaryAxis ? styles.active : null;
  return (
    <button
      className={styles.switch}
      onClick={() => setShownPrimaryAxis(!shownPrimaryAxis)}
    >
      <motion.div
        className={clsx(styles.slider, activeClassName)}
        initial={false}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 40,
        }}
        animate={{
          x: shownPrimaryAxis ? "100%" : "0%",
        }}
      />
    </button>
  );
}

export default ToggleSlider;
