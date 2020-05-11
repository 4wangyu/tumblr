import React from 'react';

import Btn from 'components/atoms/Btn';
import { ConfirmationModalContainer, Message, BtnContainer } from './ConfirmationModal.styled'

const ConfirmationModal = ({ message, onClose, onConfirm }) => {

  const handleConfirm = () => {
    onConfirm()
      .then(onClose);
  }

  return (
    <ConfirmationModalContainer>
      <Message>{message}</Message>
      <BtnContainer>
        <Btn size='large' type='secondary' onClick={onClose}>Cancel</Btn>
        <Btn size='large' onClick={handleConfirm}>OK</Btn>
      </BtnContainer>
    </ConfirmationModalContainer>
  )
}

export default ConfirmationModal;
