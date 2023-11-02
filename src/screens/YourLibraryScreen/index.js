import React, { useState, useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';

import { parseSubcategoryRoute } from '../../utils/helpers';
import { categories, modalDialogStrings, subcategories } from '../../utils/strings';
import colors from '../../utils/colors';
import styles from './styles';

import { useSavedContent } from '../../hooks/useSavedContent';
import { useSubcategory } from '../../hooks/useSubcategory';
import { ModalContext } from '../../context/modal';
import { PlayerContext } from '../../context/player';

import VerticalSlider from '../../components/VerticalSlider';
import FallbackDataCard from '../../components/FallbackDataCard';
import CategorySelector from '../../components/CategorySelector';
import SubcategorySelector from '../../components/SubcategorySelector';

const YourLibraryScreen = () => {
  const [category, setCategory] = useState(categories.music);
  const { subcategory, setSubcategory } = useSubcategory(category);
  const { openModal } = useContext(ModalContext);
  const { player } = useContext(PlayerContext);
  const { isLoading, isError, data, refetch } = useSavedContent(parseSubcategoryRoute(subcategory));

  return (
    <View style={player.visible ? styles.margedBackground : styles.background}>
      <CategorySelector selected={category} setSelected={setCategory} />
      <SubcategorySelector category={category} selected={subcategory} setSelected={setSubcategory} />
      {isLoading || isError || data?.length === 0 ?
        <View style={styles.fallbackView}>
          {isLoading && <ActivityIndicator color={colors.spotifyGreen} />}
          {isError && <FallbackDataCard type={subcategories.error} onPressAction={refetch} />}
          {data?.length === 0 && <FallbackDataCard type={subcategory} onPressAction={() => openModal(modalDialogStrings.undeDevelopment, modalDialogStrings.ok)} />}
        </View> :
        <VerticalSlider data={data} subcategory={subcategory} />
      }
    </View>
  );
};

export default YourLibraryScreen;