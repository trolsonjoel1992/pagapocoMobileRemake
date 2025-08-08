import {
  globalBorderRadius,
  globalBorderWidth,
  globalFontSizeMid,
  globalFontWeightMedium,
  globalInputHeight,
  globalInputWidth,
} from '@/src/constants/styles/globalStyles';
import { useTheme } from '@/src/context/ThemeContext';
import React from 'react';
import { Text, View } from 'react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';

type CardTextProps = {
  name: string;
  content: string;
};
const CardText = ({ name, content }: CardTextProps) => {
  const { colors } = useTheme();
  return (
    <View style={{ marginTop: verticalScale(10) }}>
      <Text
        style={{
          color: colors.textPrimary,
          fontSize: globalFontSizeMid,
          fontWeight: globalFontWeightMedium,
        }}
      >
        {name}
      </Text>
      <View
        style={{
          justifyContent: 'center',
          height: globalInputHeight,
          width: globalInputWidth,
          borderRadius: globalBorderRadius,
          backgroundColor: colors.backgroundBCI,
          padding: moderateScale(10),
          borderWidth: globalBorderWidth,
          borderColor: colors.textPrimary,
          marginTop: verticalScale(10),
        }}
      >
        <Text
          style={{ color: colors.textPrimary, fontSize: globalFontSizeMid }}
        >
          {content}
        </Text>
      </View>
    </View>
  );
};

export default CardText;
