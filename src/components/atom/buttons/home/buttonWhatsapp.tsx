import { lightColor } from '@/src/constants/colors';
import {
  globalBorderRadius,
  globalButtonHeight,
  globalButtonWidthReg,
  globalFontSizeReg,
  globalFontWeightBold,
  globalIconsSma,
} from '@/src/constants/globalStyles';
import IconsPath from '@/src/constants/iconsPath';
import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

type ButtonWhatsappProps = {
  onPress?: () => void;
};
const ButtonWhatsapp = ({ onPress }: ButtonWhatsappProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: moderateScale(12.5),
        backgroundColor: lightColor.secondary,
        borderRadius: globalBorderRadius,
        height: globalButtonHeight,
        width: globalButtonWidthReg,
      }}
    >
      <Image
        source={IconsPath.whatsapp}
        style={{ width: globalIconsSma, height: globalIconsSma }}
      />
      <Text
        style={{
          color: lightColor.textInput,
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
