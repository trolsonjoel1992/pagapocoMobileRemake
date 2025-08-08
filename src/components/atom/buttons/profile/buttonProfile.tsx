import IconsPath from '@/src/constants/iconsPath';
import {
  globalBorderRadius,
  globalButtonElevation,
  globalButtonHeight,
  globalButtonHeightSma,
  globalButtonWidthSma,
  globalFontSizeMid,
  globalFontWeightSemiBold,
  globalIconsMid,
} from '@/src/constants/styles/globalStyles';
import { useTheme } from '@/src/context/ThemeContext';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

type Props = {
  title: string;
  icon: keyof typeof IconsPath;
  onPress?: () => void;
};
const ButtonProfile = ({ title, icon, onPress }: Props) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      style={{
        backgroundColor: colors.backgroundBCI,
        borderRadius: globalBorderRadius,
        height: globalButtonHeight,
        width: '80%',
        padding: moderateScale(5),
        elevation: globalButtonElevation,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        position: 'relative',
      }}
      onPress={onPress}
    >
      <View
        style={{
          backgroundColor: colors.primary,
          width: globalButtonWidthSma,
          height: globalButtonHeightSma,
          borderRadius: globalBorderRadius,
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: 0,
        }}
      >
        <Image
          source={IconsPath[icon]}
          style={{
            width: globalIconsMid,
            height: globalIconsMid,
          }}
        />
      </View>
      <Text
        style={{
          position: 'absolute',
          left: globalButtonWidthSma,
          right: 0,
          color: colors.textPrimary,
          fontSize: globalFontSizeMid,
          textAlign: 'center',
          fontWeight: globalFontWeightSemiBold,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonProfile;
