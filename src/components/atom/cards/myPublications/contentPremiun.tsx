import ImagesPath from '@/src/constants/imagesPath';
import {
  globalFontSizeReg,
  globalFontWeightBold,
  globalIconsMid,
} from '@/src/constants/styles/globalStyles';
import { useTheme } from '@/src/context/ThemeContext';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

type Props = {
  content: string;
  iconS: keyof typeof ImagesPath;
};

const ContentPremium = ({ content, iconS }: Props) => {
  const { colors } = useTheme();

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: moderateScale(10),
      }}
    >
      <Image
        source={ImagesPath[iconS]}
        style={{
          width: globalIconsMid,
          height: globalIconsMid,
        }}
      />
      <Text
        style={{
          color: colors.textPrimary,
          fontSize: globalFontSizeReg,
          fontWeight: globalFontWeightBold,
        }}
      >
        {content}
      </Text>
    </View>
  );
};

export default ContentPremium;
