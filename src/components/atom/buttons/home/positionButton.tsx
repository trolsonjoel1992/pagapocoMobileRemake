import { lightColor } from '@/src/constants/colors';
import {
  globalFontSizeMid,
  globalFontWeightMedium,
  globalIconsSma,
} from '@/src/constants/globalStyles';
import IconsPath from '@/src/constants/iconsPath';
import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
type PositionButtonProps = {
  content: string;
  onPress?: () => void;
  icon: keyof typeof IconsPath;
};
const PositionButton = ({ content, onPress, icon }: PositionButtonProps) => {
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
          color: lightColor.textPrimary,
        }}
      >
        {content}
      </Text>
    </TouchableOpacity>
  );
};

export default PositionButton;
