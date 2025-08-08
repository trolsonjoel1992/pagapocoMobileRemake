import IconsPath from '@/src/constants/iconsPath';
import {
  globalFontSizeMid,
  globalFontWeightMedium,
  globalIconsSma,
} from '@/src/constants/styles/globalStyles';
import { useTheme } from '@/src/context/ThemeContext';
import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';

type FilterButtonProps = {
  onPress?: () => void;
};
const FilterButton = ({ onPress }: FilterButtonProps) => {
  const { colors, theme } = useTheme();
  const filterIcon = theme === 'dark' ? IconsPath.darkFilter : IconsPath.filter;

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
        source={filterIcon}
        style={{ width: globalIconsSma, height: globalIconsSma }}
      />
      <Text
        style={{
          fontWeight: globalFontWeightMedium,
          fontSize: globalFontSizeMid,
          color: colors.textPrimary,
        }}
      >
        Filtros
      </Text>
    </TouchableOpacity>
  );
};

export default FilterButton;
