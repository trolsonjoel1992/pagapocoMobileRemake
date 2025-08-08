import IconsPath from '@/src/constants/iconsPath';
import {
  globalFontSizeTiny,
  globalFontWeightSemiBold,
  globalIconsSma,
} from '@/src/constants/styles/globalStyles';
import { useTheme } from '@/src/context/ThemeContext';
import { router } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

type CategoryIconProps = {
  name: string;
  icon: keyof typeof IconsPath;
  enableRoute: boolean;
  onPress?: () => void;
};

const CategoryIcon = ({
  name,
  icon,
  enableRoute,
  onPress,
  index,
}: CategoryIconProps & { index: number }) => {
  const { colors } = useTheme();
  const handlePress = () => {
    if (enableRoute) {
      router.push({
        pathname: '/(home)/homeCategory',
        params: { hiddenIndex: index },
      });
    }
    if (onPress) onPress();
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Image
        source={IconsPath[icon]}
        style={{ width: globalIconsSma, height: globalIconsSma }}
      />
      <Text
        style={{
          fontSize: globalFontSizeTiny,
          fontWeight: globalFontWeightSemiBold,
          color: colors.textPrimary,
          marginTop: moderateScale(5),
        }}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryIcon;
