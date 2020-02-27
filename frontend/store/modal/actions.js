import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
  openModal: ['component', 'options'],
  closeModal: null
});