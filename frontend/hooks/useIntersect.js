import { useEffect, useRef, useState } from "react";

const useIntersect = ({ root = null, rootMargin, threshold = 0.9 }) => {
  const [entry, updateEntry] = useState({});
  const [node, setNode] = useState(null);

  const observer = useRef(
    new window.IntersectionObserver(([entry]) => updateEntry(entry), {
      root,
      rootMargin,
      threshold
    })
  );

  useEffect(
    () => {
      const { current: currentObserver } = observer;
      currentObserver.disconnect();

      if (node) currentObserver.observe(node);

      return () => currentObserver.disconnect();
    },
    [node]
  );

  return [setNode, entry];
};

useIntersect.buildThresholdArray = () => Array.from(Array(100).keys(), i => i / 100);

export default useIntersect;