import myPbsPath from '@/src/constants/icons/myPbsPath';
import {
  globalBorderRadius,
  globalButtonElevation,
  globalCardEditHeight,
  globalFontSizeTitle,
  globalFontWeightBold,
  globalIconsEx,
} from '@/src/constants/styles/globalStyles';
import { useTheme } from '@/src/context/ThemeContext';
import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';

type Props = {
  action: string;
  onPress?: () => void;
  image: keyof typeof myPbsPath;
  isSelected?: boolean;
};

const CategoryButton = ({ action, onPress, image, isSelected }: Props) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: '95%',
        alignItems: 'center',
        flexDirection: 'row',
        padding: '5%',
        height: globalCardEditHeight,
        elevation: globalButtonElevation,
        borderRadius: globalBorderRadius,
        backgroundColor: isSelected ? colors.primary : colors.backgroundBCI,
        borderWidth: isSelected ? 2 : 0,
        borderColor: isSelected ? colors.textPrimary : 'transparent',
      }}
    >
      <Image
        source={myPbsPath[image]}
        style={{
          width: globalIconsEx,
          height: globalIconsEx,
          marginLeft: '2.5%',
          marginRight: '7.5%',
        }}
      />
      <Text
        style={{
          textAlign: 'left',
          color: colors.textPrimary,
          fontSize: globalFontSizeTitle,
          fontWeight: globalFontWeightBold,
        }}
      >
        {action}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryButton;
