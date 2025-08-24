export const range = (start, end, step = 1) => {
   let output = [];
   if (typeof end === 'undefined') {
      end = start;
      start = 0;
   }
   for (let i = start; i < end; i += step) {
      output.push(i);
   }
   return output;
};

export const normalize = (
   number,
   currentScaleMin,
   currentScaleMax,
   newScaleMin = 0,
   newScaleMax = 1
) => {
   // FIrst, normalize the value between 0 and 1.
   const standardNormalization =
      (number - currentScaleMin) /
      (currentScaleMax - currentScaleMin);

   // Next, transpose that value to our desired scale.
   return (
      (newScaleMax - newScaleMin) * standardNormalization +
      newScaleMin
   );
};
