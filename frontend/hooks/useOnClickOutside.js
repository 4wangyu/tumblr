import { useEffect } from 'react';

const useOnClickOutside = ({ ref, onClickOutside }) => {

  useEffect(
    () => {
      const handleClickOutside = e => {
        e.stopPropagation();
        if (ref.current && !ref.current.contains(e.target)) onClickOutside();
      };

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    },
    [ref]
  );

};

export default useOnClickOutside