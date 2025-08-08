import IconsPath from '@/src/constants/iconsPath';
import {
  globalBorderRadius,
  globalButtonElevation,
  globalButtonHeight,
  globalButtonWidthReg,
  globalFontSizeReg,
  globalFontWeightBold,
  globalIconsSma,
} from '@/src/constants/styles/globalStyles';
import { useTheme } from '@/src/context/ThemeContext';
import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

type ButtonWhatsappProps = {
  enabled: boolean;
  onPress?: () => void;
};
const ButtonWhatsapp = ({ enabled, onPress }: ButtonWhatsappProps) => {
  const { colors, theme } = useTheme();
  let whatsappIcon;
  let bckgrdColor;
  let txtColor;
  if (theme === 'dark') {
    whatsappIcon = enabled ? IconsPath.whatsappD : IconsPath.whatsappDisD;
    bckgrdColor = enabled ? colors.primary : colors.secondary;
    txtColor = enabled ? colors.textSecondary : colors.textInput;
  } else {
    whatsappIcon = enabled ? IconsPath.whatsappL : IconsPath.whatsappDisL;
    bckgrdColor = enabled ? colors.primary : colors.secondary;
    txtColor = enabled ? colors.textSecondary : colors.textInput;
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={!enabled}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: moderateScale(12.5),
        elevation: globalButtonElevation,
        backgroundColor: bckgrdColor,
        borderRadius: globalBorderRadius,
        height: globalButtonHeight,
        width: globalButtonWidthReg,
      }}
    >
      <Image
        source={whatsappIcon}
        style={{ width: globalIconsSma, height: globalIconsSma }}
      />
      <Text
        style={{
          color: txtColor,
          fontWeight: globalFontWeightBold,
          fontSize: globalFontSizeReg,
        }}
      >
        Whatsapp
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonWhatsapp;
