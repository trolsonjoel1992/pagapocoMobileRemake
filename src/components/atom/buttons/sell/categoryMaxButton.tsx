import ImagesPath from '@/src/constants/imagesPath';
import {
  globalBorderRadius,
  globalButtonElevation,
  globalFontSizeMid,
  globalFontWeightSemiBold,
} from '@/src/constants/styles/globalStyles';
import { useTheme } from '@/src/context/ThemeContext';
import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

type CategoryButtonProps = {
  iconSource: keyof typeof ImagesPath;
  label: string;
  onPress?: () => void;
};

const CategoryMaxButton = ({
  iconSource,
  onPress,
  label,
}: CategoryButtonProps) => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: '95%',
        alignItems: 'center',
        padding: moderateScale(15),
        elevation: globalButtonElevation,
        borderRadius: globalBorderRadius,
        backgroundColor: colors.backgroundBCI,
      }}
    >
      <Image
        source={ImagesPath[iconSource]}
        style={{
          width: moderateScale(100),
          height: moderateScale(100),
        }}
      />
      <Text
        style={{
          textAlign: 'center',
          color: colors.textPrimary,
          fontSize: globalFontSizeMid,
          fontWeight: globalFontWeightSemiBold,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryMaxButton;
