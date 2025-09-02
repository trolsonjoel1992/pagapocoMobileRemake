import CardDescription from '@/src/components/atom/cards/sell/cardDescription';
import ImagesPath from '@/src/constants/imagesPath';
import {
  globalBorderRadius,
  globalCardPlanHeight,
  globalFontSizeTitle,
  globalFontWeightBold,
  globalIconsLar,
} from '@/src/constants/styles/globalStyles';
import { useTheme } from '@/src/context/ThemeContext';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

type Props = {
  selectedF?: boolean;
  unSelectedF?: boolean;
  onPress?: () => void;
};

const CardFremiun = ({ selectedF, unSelectedF, onPress }: Props) => {
  const { colors, theme } = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        alignItems: 'center',
        width: '90%',
        height: globalCardPlanHeight,
        borderWidth: moderateScale(1),
        backgroundColor: unSelectedF
          ? colors.backgroundDis
          : colors.backgroundBCI,
        borderColor: selectedF
          ? colors.primary
          : unSelectedF
            ? colors.borderDis
            : colors.textPrimary,
        borderRadius: globalBorderRadius,
      }}
    >
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          width: '100.3%',
          height: 100,
          marginTop: moderateScale(-1),
          borderWidth: moderateScale(2),
          borderColor: selectedF
            ? colors.primary
            : unSelectedF
              ? colors.borderDis
              : colors.textPrimary,
          backgroundColor: unSelectedF
            ? colors.backgroundDis
            : colors.backgroundBCI,
          borderRadius: globalBorderRadius,
          padding: moderateScale(25),
        }}
      >
        <Image
          source={
            selectedF
              ? theme === 'dark'
                ? ImagesPath.starHalfD
                : ImagesPath.starHalf
              : unSelectedF
                ? ImagesPath.starHalfDis
                : theme === 'dark'
                  ? ImagesPath.starHalfEnaD
                  : ImagesPath.starHalfEna
          }
          style={{
            width: globalIconsLar,
            height: globalIconsLar,
          }}
        />
        <Text
          style={{
            marginLeft: moderateScale(50),
            color: selectedF
              ? colors.primary
              : unSelectedF
                ? colors.borderDis
                : colors.textPrimary,
            fontSize: globalFontSizeTitle,
            fontWeight: globalFontWeightBold,
          }}
        >
          Fremiun
        </Text>
      </View>
      <View
        style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch' }}
      >
        <CardDescription
          content='Exposisción limitada'
          iconD='warningCEna'
          iconS='warningC'
          iconU='warningCDis'
          selected={selectedF}
          unSelected={unSelectedF}
        />
        <CardDescription
          content='Menos imagenes'
          iconD='warningCEna'
          iconS='warningC'
          iconU='warningCDis'
          selected={selectedF}
          unSelected={unSelectedF}
        />
        <CardDescription
          content='15 días de duración'
          iconD='warningCEna'
          iconS='warningC'
          iconU='warningCDis'
          selected={selectedF}
          unSelected={unSelectedF}
        />
        <CardDescription
          content='Contacto directo'
          iconD='crossCEna'
          iconS='crossC'
          iconU='crossCDis'
          selected={selectedF}
          unSelected={unSelectedF}
          strikeThrough
        />
      </View>
    </TouchableOpacity>
  );
};

export default CardFremiun;
