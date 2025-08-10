import IconsPath from '@/src/constants/iconsPath';
import {
  globalFontSizeMid,
  globalFontWeightMedium,
  globalIconsSma,
} from '@/src/constants/styles/globalStyles';
import { useTheme } from '@/src/context/ThemeContext';
import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';

type PositionButtonProps = {
  content: string;
  onPress?: () => void;
  icon: keyof typeof IconsPath;
};

const PositionButton = ({ content, onPress, icon }: PositionButtonProps) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 'auto',
        height: 'auto',
      }}
      onPress={onPress}
    >
      <Image
        source={IconsPath[icon]}
        style={{ width: globalIconsSma, height: globalIconsSma }}
      />
      <Text
        style={{
          fontWeight: globalFontWeightMedium,
          fontSize: globalFontSizeMid,
          color: colors.textPrimary,
        }}
      >
        {content}
      </Text>
    </TouchableOpacity>
  );
};

export default PositionButton;
