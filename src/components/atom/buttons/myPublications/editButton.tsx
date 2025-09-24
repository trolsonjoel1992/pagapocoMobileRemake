import myPbsPath from '@/src/constants/icons/myPbsPath';
import {
  globalBorderRadius,
  globalButtonElevation,
  globalCardEditHeight,
  globalFontSizeTitle,
  globalFontWeightBold,
  globalIconsEx,
} from '@/src/constants/styles/globalStyles';
import { useTheme } from '@/src/context/ThemeContext';
import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';

type Props = {
  action: string;
  onPress?: () => void;
};

const EditButton = ({ action, onPress }: Props) => {
  const { colors, theme } = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: '95%',
        alignItems: 'center',
        flexDirection: 'row',
        padding: '5%',
        height: globalCardEditHeight,
        elevation: globalButtonElevation,
        borderRadius: globalBorderRadius,
        backgroundColor: colors.backgroundBCI,
      }}
    >
      <Image
        source={theme === 'dark' ? myPbsPath.editPD : myPbsPath.editP}
        style={{
          width: globalIconsEx,
          height: globalIconsEx,
          marginLeft: '2.5%',
          marginRight: '7.5%',
        }}
      />
      <Text
        style={{
          textAlign: 'left',
          color: colors.textPrimary,
          fontSize: globalFontSizeTitle,
          fontWeight: globalFontWeightBold,
        }}
      >
        {action}
      </Text>
    </TouchableOpacity>
  );
};

export default EditButton;
