import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

import { modalDialogStrings } from '../../utils/strings';
import { parseEmptyData } from '../../utils/helpers';

import { ModalContext } from '../../context/modal';

const EmptyDataCard = ({ subcategory }) => {
  const { title, description, buttonText } = parseEmptyData(subcategory);
  const { openModal } = useContext(ModalContext);

  return (
    <View style={styles.emptyDataCardView}>
      <View style={styles.textView}>
        <Text style={styles.titleText}> {title}</Text>
        <Text style={styles.descriptionText}> {description}</Text>
      </View>
      <View style={styles.touchableOpacityView}>
        <TouchableOpacity style={styles.touchableOpacity} onPress={() => openModal(modalDialogStrings.undeDevelopment)}>
          <Text style={styles.touchableOpacityText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EmptyDataCard;