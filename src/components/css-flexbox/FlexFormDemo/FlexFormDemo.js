'use client';

import React from 'react';

import styles from './FlexFormDemo.module.css';
import SliderControl from '@/components/SliderControl';

function FlexFormDemo() {
   const [containerWidth, setContainerWidth] = React.useState(800);
   const containerWidthStyle = `${containerWidth}px`;
   return (
      <div className={styles.demo}>
         <div className={styles.sliderWarper}>
            <SliderControl
               label="Container width:"
               className={styles.slider}
               step={2}
               min={300}
               max={800}
               value={Number(containerWidth)}
               onChange={(ev) => setContainerWidth(ev.target.value)}
            />
            <div className={styles.hint}>
               Drag me! <span className={styles.arrow}>↩</span>
            </div>
         </div>

         <div
            className={styles.container}
            style={{
               '--container-width': containerWidthStyle,
            }}
         >
            <form className={styles.form}>
               <input
                  type="text"
                  placeholder="Name"
                  className={styles.input}
               />
               <input
                  type="email"
                  placeholder="Email Address"
                  className={styles.input}
               />
               <input
                  type="submit"
                  value="Subscribe"
                  className={styles.input}
               />
            </form>
         </div>
      </div>
   );
}

export default FlexFormDemo;
