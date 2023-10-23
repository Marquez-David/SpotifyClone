import { useState } from 'react';

/**
 * A custom hook for managing a modal, including its text content and visibility.
 * @returns {Object} An object containing the modal state and functions to set the modal state.
 */
export const useModal = () => {
  const [modal, setModal] = useState({
    text: '',
    visible: false,
  });

  // Function to open the modal with a specified text
  const openModal = (text2) => {
    setModal({
      text: text2,
      visible: true,
    });
  };

  // Function to close the modal by resetting text and visibility
  const closeModal = () => {
    setModal({
      text: '',
      visible: false,
    });
  };

  return { modal, openModal, closeModal }
};