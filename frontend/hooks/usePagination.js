import { useMemo, useState } from 'react';

const usePagination = ({ limit: _limit = 2, offset: _offset = 0, increment: _increment }) => {
  const increment = _increment || _limit
  const [offset, setOffset] = useState(_offset);
  const [limit, setLimit] = useState(_limit);
  const [count, _setCount] = useState(20);

  const remaining = useMemo(() => count - (limit + offset), [count, limit, offset]);

  const hasNext = useMemo(() => remaining > 0, [remaining])

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