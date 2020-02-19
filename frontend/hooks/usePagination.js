import { useState } from 'react';

const usePagination = initial => {
  const increment = initial;
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(increment);
  const [count, setCountData] = useState(20);
  const [end, setEnd] = useState(false);

  const paginate = () => {
    if (remaining() <= 0) {
      setEnd(true);
    } else {
      setEnd(false);
      setLimit(Math.min(remaining(), limit));
      setOffset(prevOffset => prevOffset + increment);
    }
  };

  const setCount = val => {
    setCountData(val);
    paginate();
  };

  const remaining = () => {
    return count - (offset + limit);
  };

  return [offset, limit, setCount, end];
}

export default usePagination;