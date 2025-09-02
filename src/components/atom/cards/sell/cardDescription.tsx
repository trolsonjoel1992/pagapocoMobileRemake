import ImagesPath from '@/src/constants/imagesPath';
import {
  globalFontSizeMid,
  globalFontWeightBold,
  globalIconsTiny,
} from '@/src/constants/styles/globalStyles';
import { useTheme } from '@/src/context/ThemeContext';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

type Props = {
  content: string;
  selected?: boolean;
  unSelected?: boolean;
  iconD: keyof typeof ImagesPath;
  iconS: keyof typeof ImagesPath;
  iconU: keyof typeof ImagesPath;
  strikeThrough?: boolean;
};

const CardDescription = ({
  content,
  selected,
  unSelected,
  strikeThrough = false,
  iconD,
  iconS,
  iconU,
}: Props) => {
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
        source={
          selected
            ? ImagesPath[iconS]
            : unSelected
              ? ImagesPath[iconU]
              : ImagesPath[iconD]
        }
        style={{
          width: globalIconsTiny,
          height: globalIconsTiny,
        }}
      />
      <Text
        style={{
          color: selected
            ? colors.textPrimary
            : unSelected
              ? colors.borderDis
              : colors.textPrimary,
          fontSize: globalFontSizeMid,
          fontWeight: globalFontWeightBold,
          textDecorationLine: strikeThrough ? 'line-through' : 'none',
        }}
      >
        {content}
      </Text>
    </View>
  );
};

export default CardDescription;
