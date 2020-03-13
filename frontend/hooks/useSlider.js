import { useState } from 'react';
import { wrap } from '@popmotion/popcorn';

const useSlider = ({ length = 0 }) => {
  const [[step, direction], setStep] = useState([0, 0]);

  let stepIndex = wrap(0, length, step);

  const next = newDirection => setStep(
    ([prevStep]) => [
      prevStep + newDirection,
      newDirection
    ]
  );

  const increment = () => next(1);
  const decrement = () => next(-1);


  return {
    increment, decrement,
    step, stepIndex, direction
  };
};

export default useSlider;