import React from 'react'
import { useDispatch } from 'react-redux';
import { Creators as Modal } from 'store/modal/actions';
import { Confirmation, ConfirmationMsg, ConfirmationBtns } from './ConfirmationModal.styled'
import Btn from 'styled/base/Btn.styled';

const DeletePostModal = ({ onConfirm, message }) => {
  const dispatch = useDispatch();
  const closeModal = () => dispatch(Modal.closeModal());

  const handleConfirm = e => {
    onConfirm()
      .then(closeModal);
  }

  return (
    <Confirmation>
      <ConfirmationMsg>{message}</ConfirmationMsg>
      <ConfirmationBtns>
        <Btn large secondary onClick={closeModal}>Cancel</Btn>
        <Btn large onClick={handleConfirm}>OK</Btn>
      </ConfirmationBtns>
    </Confirmation>
  )
};

export default DeletePostModal;
