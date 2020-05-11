import React, { useRef, useState, useEffect } from 'react';
export const ModalContext = React.createContext();

const ModalProvider = ({ children }) => {
  const modalRef = useRef();
  const [context, setContext] = useState();

  useEffect(() => {
    setContext(modalRef.current);
  }, []);

  return (
    <div style={{ position: 'relative', zIndex: 0 }}>
      <ModalContext.Provider value={context}>
        {children}
      </ModalContext.Provider>
      <div ref={modalRef} />
    </div>
  );
}

export default ModalProvider;