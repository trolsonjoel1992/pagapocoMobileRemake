import myPbsPath from '@/src/constants/icons/myPbsPath';
import {
  globalBorderRadius,
  globalButtonElevation,
  globalButtonHeight,
  globalIconsMid,
} from '@/src/constants/styles/globalStyles';
import { useTheme } from '@/src/context/ThemeContext';
import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

type Props = {
  icon: keyof typeof myPbsPath;
  onPress?: () => void;
};
const RegHButton = ({ icon, onPress }: Props) => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        borderRadius: globalBorderRadius,
        elevation: globalButtonElevation,
        backgroundColor: colors.primary,
        width: globalButtonHeight,
        height: globalButtonHeight,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Image
        source={myPbsPath[icon]}
        style={{ width: globalIconsMid, height: globalIconsMid }}
      />
    </TouchableOpacity>
  );
};

export default RegHButton;
