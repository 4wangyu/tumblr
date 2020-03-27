import { useState } from 'react';
import { wrap } from '@popmotion/popcorn';

const useSlider = ({ length = 0 }) => {
  const [[step, direction], setStep] = useState([0, 0]);
  const [isLocked, setLocked] = useState(false);

  let stepIndex = wrap(0, length, step);

  const next = newDirection => !isLocked && setStep(
    ([prevStep]) => [
      prevStep + newDirection,
      newDirection
    ]
  );

  const increment = () => next(1);
  const decrement = () => next(-1);
  const reset = () => setStep([0, 0]);
  const lock = () => setLocked(true);
  const unlock = () => setLocked(false);

  return {
    increment, decrement, reset,
    step, stepIndex, direction,
    lock, unlock, isLocked
  };
};

export default useSlider;