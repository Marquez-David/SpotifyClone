import { View, Text, Modal, TouchableOpacity } from 'react-native';
import { useContext } from 'react';
import { ModalContext } from '../../context/modal';

import styles from './styles';

const ModalDialog = ({ visible, text, buttonText }) => {
  const { closeModal } = useContext(ModalContext);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}>
      <View style={styles.modalView}>
        <Text style={styles.textStyle}>{text}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={closeModal}>
          <Text style={styles.touchableOpacityText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default ModalDialog;