import { lightColor } from '@/src/constants/colors';
import {
  globalBorderRadius,
  globalButtonElevation,
  globalButtonHeightReg,
  globalButtonWidthReg,
  globalFontSizeButton,
  globalFontWeightButton,
} from '@/src/constants/globalStyles';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
type ButtonProps = {
  action: string;
};
const ButtonReg = ({ action }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: lightColor.primary,
        borderRadius: globalBorderRadius,
        width: globalButtonWidthReg,
        height: globalButtonHeightReg,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: globalButtonElevation,
      }}
    >
      <Text
        style={{
          color: lightColor.textSecondary,
          fontWeight: globalFontWeightButton,
          fontSize: globalFontSizeButton,
        }}
      >
        {action}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonReg;
