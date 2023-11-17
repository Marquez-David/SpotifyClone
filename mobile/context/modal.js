import { createContext } from 'react'
import ModalDialog from '../components/ModalDialog';
import { useModal } from '../hooks/useModal';

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const { modal, openModal, closeModal } = useModal();

  return (
    <ModalContext.Provider value={{ modal, openModal, closeModal }}>
      {children}
      <ModalDialog visible={modal.visible} text={modal.text} buttonText={modal.buttonText} />
    </ModalContext.Provider>
  )
};