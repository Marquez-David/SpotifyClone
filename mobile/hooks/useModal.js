import { useState } from 'react';
import { modalStrings } from '../utils/strings';

/**
 * A custom hook for managing a modal, including its text content and visibility.
 * @returns {Object} An object containing the modal state and functions to set the modal state.
 */
export const useModal = () => {
  const [modal, setModal] = useState({
    text: '',
    buttonText: '',
    visible: false,
  });

  // Function to open the modal with a specified text
  const openModal = () => {
    setModal({
      text: modalStrings.undeDevelopment,
      buttonText: modalStrings.ok,
      visible: true,
    });
  };
  // Function to close the modal by resetting text and visibility
  const closeModal = () => {
    setModal({
      text: '',
      buttonText: '',
      visible: false,
    });
  };

  return { modal, openModal, closeModal }
};