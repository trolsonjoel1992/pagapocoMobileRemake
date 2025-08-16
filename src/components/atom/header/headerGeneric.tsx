import IconsPath from '@/src/constants/iconsPath';
import {
  globalFontSizeMid,
  globalFontWeightBold,
  globalHeaderHeight,
  globalIconsSma,
} from '@/src/constants/styles/globalStyles';
import { useTheme } from '@/src/context/ThemeContext';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

type HeaderProps = {
  title: string;
  onBackPress?: () => void;
};

const HeaderGeneric = ({ title, onBackPress }: HeaderProps) => {
  const { colors, theme } = useTheme();
  const iconBack =
    theme === 'dark' ? IconsPath.darkIconBack : IconsPath.iconBack;

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: globalHeaderHeight,
        backgroundColor: colors.primary,
        paddingHorizontal: moderateScale(20),
      }}
    >
      <TouchableOpacity onPress={onBackPress}>
        <Image
          source={iconBack}
          style={{
            width: globalIconsSma,
            height: globalIconsSma,
          }}
        />
      </TouchableOpacity>
      <Text
        style={{
          color: colors.textPrimary,
          fontSize: globalFontSizeMid,
          fontWeight: globalFontWeightBold,
          flex: 1,
          textAlign: 'center',
          marginRight: moderateScale(30),
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export default HeaderGeneric;
