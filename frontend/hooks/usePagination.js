import { useMemo, useState } from 'react';

const usePagination = ({ increment = 2 }) => {

  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(increment);
  const [count, _setCount] = useState(20);

  const remaining = useMemo(() => count - (limit + offset), [count, limit, offset]);

  const hasNext = useMemo(() => remaining > 0, [remaining])

  const reset = () => {
    setOffset(0);
    setLimit(increment);
    setCount(20);
  }

  const paginate = () => {
    if (hasNext) {
      setLimit(Math.min(remaining, limit));
      setOffset(prevOffset => prevOffset + increment);
    }
  };

  const setCount = val => {
    _setCount(val);
    paginate();
  };

  return { offset, limit, setCount, hasNext };
}

export default usePagination;