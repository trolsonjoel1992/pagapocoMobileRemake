import IconsPath from '@/src/constants/iconsPath';
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
  iconSource: keyof typeof IconsPath;
  onPress?: () => void;
};

const ButtonIconDis = ({ iconSource, onPress }: Props) => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: colors.secondary,
        borderRadius: globalBorderRadius,
        elevation: globalButtonElevation,
        height: globalButtonHeight,
        width: globalButtonHeight,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Image
        source={IconsPath[iconSource]}
        style={{ width: globalIconsMid, height: globalIconsMid }}
      />
    </TouchableOpacity>
  );
};

export default ButtonIconDis;
