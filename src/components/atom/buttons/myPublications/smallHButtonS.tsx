import myPbsPath from '@/src/constants/icons/myPbsPath';
import {
  globalBorderRadius,
  globalButtonElevation,
  globalButtonHeightSp,
  globalIconsSma,
} from '@/src/constants/styles/globalStyles';
import { useTheme } from '@/src/context/ThemeContext';
import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

type Props = {
  icon: keyof typeof myPbsPath;
  onPress?: () => void;
};
const SmallHButtonS = ({ icon, onPress }: Props) => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        borderRadius: globalBorderRadius,
        elevation: globalButtonElevation,
        backgroundColor: colors.primary,
        width: globalButtonHeightSp,
        height: globalButtonHeightSp,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Image
        source={myPbsPath[icon]}
        style={{ width: globalIconsSma, height: globalIconsSma }}
      />
    </TouchableOpacity>
  );
};

export default SmallHButtonS;
