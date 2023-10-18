import { View, Text, Modal, Pressable } from 'react-native';
import { useContext } from 'react';
import { ModalContext } from '../../context/modal';

import { modalDialogStrings } from '../../utils/strings';
import styles from './styles';

const ModalDialog = ({ text, visible }) => {
  const { closeModal } = useContext(ModalContext);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}>
      <View style={styles.modalView}>
        <Text style={styles.textStyle}>{text}</Text>
        <Pressable
          style={styles.button}
          onPress={closeModal}>
          <Text style={styles.pressableText}>{modalDialogStrings.ok}</Text>
        </Pressable>
      </View>
    </Modal>
  );
};

export default ModalDialog;