'use client';

import React from 'react';

import { useSpring, animated } from 'react-spring';

import { normalize } from '@/utils';
import useMousePosition from '@react-hook/mouse-position';

import styles from './VennDiagram.module.css';

const springConfig = {
   tension: 110,
   friction: 19,
};
const OFFSET_BY = 25;

const RADIUS = 150;
const DIAMETER = RADIUS * 2;
const OVERLAP_RATIO = 0.5;

const TOTAL_WIDTH = DIAMETER * 2 - DIAMETER * OVERLAP_RATIO;
const VIEWBOX = `0 0 ${TOTAL_WIDTH} ${DIAMETER}`;

const LEFT_CENTER = { x: RADIUS - OFFSET_BY, y: RADIUS };
const RIGHT_CENTER = {
   x: TOTAL_WIDTH - RADIUS + OFFSET_BY,
   y: RADIUS,
};

export default function FlexVennDiagram() {
   const SCALE_BY = 1.1;

   const [hovering, setHovering] = React.useState({
      left: false,
      right: false,
   });

   const ref = React.useRef();

   const mousePosition = useMousePosition(ref);

   React.useEffect(() => {
      if (!mousePosition.x) {
         setHovering({ left: false, right: false });
         return;
      }

      const xInViewbox = normalize(
         mousePosition.x,
         0,
         mousePosition.elementWidth,
         0,
         TOTAL_WIDTH
      );
      const yInViewbox = normalize(
         mousePosition.y,
         0,
         mousePosition.elementHeight,
         0,
         DIAMETER
      );

      const distanceFromLeft = Math.sqrt(
         Math.abs(xInViewbox - LEFT_CENTER.x) ** 2 +
            Math.abs(yInViewbox - LEFT_CENTER.y) ** 2
      );

      const distanceFromRight = Math.sqrt(
         Math.abs(xInViewbox - RIGHT_CENTER.x) ** 2 +
            Math.abs(yInViewbox - RIGHT_CENTER.y) ** 2
      );

      setHovering({
         left: distanceFromLeft < RADIUS,
         right: distanceFromRight < RADIUS,
      });
   }, [mousePosition]);

   const hoveringOverCenter = hovering.left && hovering.right;
   const notHoveringAnything = !hovering.left && !hovering.right;

   const leftCircleStyle = useSpring({
      transform: hovering.left ? `scale(${SCALE_BY})` : 'scale(1)',
      fillOpacity: hovering.left ? 0.5 : 0.35,
      cx: hoveringOverCenter
         ? LEFT_CENTER.x + 10
         : hovering.left
         ? LEFT_CENTER.x - 20
         : LEFT_CENTER.x,
      config: springConfig,
   });

   const rightCircleStyle = useSpring({
      transform: hovering.right ? `scale(${SCALE_BY})` : 'scale(1)',
      fillOpacity: hovering.right ? 0.5 : 0.35,
      cx: hoveringOverCenter
         ? RIGHT_CENTER.x - 10
         : hovering.right
         ? RIGHT_CENTER.x + 20
         : RIGHT_CENTER.x,
      config: springConfig,
   });

   const shiftTextBy = mousePosition.elementWidth * 0.05;

   const leftStyles = {
      transform: hovering.left
         ? `translateX(-${shiftTextBy}px) scale(1.1)`
         : `translateX(0) scale(1)`,
      // prettier-ignore
      opacity: notHoveringAnything
      ? 0.75
      : hovering.left
        ? 1
        : 0.25,
   };
   const centerStyles = {
      transform: hoveringOverCenter
         ? `scale(1.1) translateX(0px)`
         : hovering.left
         ? `scale(1.1) translateX(-30px)`
         : hovering.right
         ? `scale(1.1) translateX(30px)`
         : `scale(1) translateX(0px)`,
      opacity: notHoveringAnything
         ? 0.75
         : hovering.left || hovering.right
         ? 1
         : 0.25,
   };
   const rightStyles = {
      transform: hovering.right
         ? `translateX(${shiftTextBy}px) scale(1.1)`
         : `translateX(0) scale(1)`,
      // prettier-ignore
      opacity: notHoveringAnything
      ? 0.75
      : hovering.right
        ? 1
        : 0.25,
   };

   const circleStrokeColor = 'hsl(50deg 100% 50%)';

   return (
      <div className={styles.wrapper}>
         <svg viewBox={VIEWBOX} ref={ref} className={styles.svg}>
            <animated.circle
               className={styles.circle}
               cx={RIGHT_CENTER.x}
               cy={RIGHT_CENTER.y}
               r={RADIUS}
               stroke={
                  hovering.right && !hovering.left
                     ? circleStrokeColor
                     : null
               }
               strokeWidth={3}
               fill="var(--color-venn-1)"
               {...rightCircleStyle}
            />
            <animated.circle
               className={styles.circle}
               cx={LEFT_CENTER.x}
               cy={LEFT_CENTER.y}
               r={RADIUS}
               stroke={
                  hovering.left && !hovering.right
                     ? circleStrokeColor
                     : null
               }
               strokeWidth={3}
               fill="var(--color-venn-0)"
               {...leftCircleStyle}
            />
         </svg>

         <div className={styles.titleLayer}>
            <animated.div
               style={leftStyles}
               className={`${styles.title} ${styles.leftTitle}`}
            >
               justify-content
            </animated.div>

            <animated.div
               style={rightStyles}
               className={`${styles.title} ${styles.rightTitle}`}
            >
               align-items
            </animated.div>
         </div>
         <div className={styles.textLayer}>
            <p style={leftStyles} className={styles.left}>
               <button
                  className={styles.textButton}
                  onFocus={() =>
                     setHovering({ left: true, right: false })
                  }
                  onBlur={() =>
                     setHovering({ left: false, right: false })
                  }
               >
                  <span className={styles.item}>space-between</span>
                  <span className={styles.item}>space-around</span>
                  <span className={styles.item}>space-evenly</span>
               </button>
            </p>

            <p style={rightStyles} className={styles.right}>
               <button
                  className={styles.textButton}
                  onFocus={() =>
                     setHovering({ left: false, right: true })
                  }
                  onBlur={() =>
                     setHovering({ left: false, right: false })
                  }
               >
                  <span className={styles.item}>stretch</span>
                  <span className={styles.item}>baseline</span>
               </button>
            </p>

            <p style={centerStyles} className={styles.center}>
               <span className={styles.item}>flex-start</span>
               <span className={styles.item}>center</span>
               <span className={styles.item}>flex-end</span>
            </p>
         </div>
      </div>
   );
}
