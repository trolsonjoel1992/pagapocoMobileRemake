import { lightColor } from '@/src/constants/colors';
import IconsPath from '@/src/constants/iconsPath';
import {
  globalFontSizeMid,
  globalFontWeightMedium,
  globalIconsSma,
} from '@/src/constants/styles/globalStyles';
import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';

type FilterButtonProps = {
  onPress?: () => void;
};
const FilterButton = ({ onPress }: FilterButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 'auto',
        height: 'auto',
      }}
      onPress={onPress}
    >
      <Image
        source={IconsPath.filter}
        style={{ width: globalIconsSma, height: globalIconsSma }}
      />
      <Text
        style={{
          fontWeight: globalFontWeightMedium,
          fontSize: globalFontSizeMid,
          color: lightColor.textPrimary,
        }}
      >
        Filtros
      </Text>
    </TouchableOpacity>
  );
};

export default FilterButton;
