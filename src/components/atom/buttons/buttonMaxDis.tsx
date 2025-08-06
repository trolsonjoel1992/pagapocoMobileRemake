import { lightColor } from '@/src/constants/colors';
import {
  globalBorderRadius,
  globalButtonElevation,
  globalButtonHeight,
  globalButtonWidthLar,
  globalFontSizeReg,
  globalFontWeightBold,
} from '@/src/constants/globalStyles';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
type ButtonProps = {
  action: string;
  onPress?: () => void;
};
const ButtonMaxDis = ({ action, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: lightColor.secondary,
        borderRadius: globalBorderRadius,
        width: globalButtonWidthLar,
        height: globalButtonHeight,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: globalButtonElevation,
      }}
    >
      <Text
        style={{
          color: lightColor.textInput,
          fontWeight: globalFontWeightBold,
          fontSize: globalFontSizeReg,
        }}
      >
        {action}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonMaxDis;
