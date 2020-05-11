import React, { useContext } from "react";
import ReactDOM from 'react-dom';
import { ModalContext } from './ModalProvider';
import { ModalOverlay, ModalDialogue } from './Modal.styled';
import { motion } from 'framer-motion';
import { fade } from 'motions';

const Modal = ({ onClose, children, ...props }) => {
  const modalNode = useContext(ModalContext);

  return Boolean(modalNode) && ReactDOM.createPortal(
    <ModalOverlay
      as={motion.div}
      variants={fade.variants}
      initial="enterExit"
      animate="center"
      exit="enterExit"
      transition={fade.transitions}
      onClick={onClose}
    >
      <ModalDialogue>
        {children}
      </ModalDialogue>
    </ModalOverlay>,
    modalNode
  );
};

export default Modal;