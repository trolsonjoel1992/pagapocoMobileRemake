import CardDescription from '@/src/components/atom/cards/sell/cardDescription';
import ImagesPath from '@/src/constants/imagesPath';
import {
  globalBorderRadius,
  globalCardPlanHeight,
  globalFontSizeMid,
  globalFontSizeTitle,
  globalFontWeightBold,
  globalIconsLar,
} from '@/src/constants/styles/globalStyles';
import { useTheme } from '@/src/context/ThemeContext';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

type Props = {
  selectedP?: boolean;
  unSelectedP?: boolean;
  onPress?: () => void;
};

const CardPremiun = ({ selectedP, unSelectedP, onPress }: Props) => {
  const { colors, theme } = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        alignItems: 'center',
        width: '90%',
        height: globalCardPlanHeight,
        borderWidth: moderateScale(1),
        backgroundColor: selectedP
          ? colors.backgroundBCI
          : unSelectedP
            ? colors.backgroundDis
            : colors.backgroundBCI,
        borderColor: selectedP
          ? colors.primary
          : unSelectedP
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
          height: moderateScale(90),
          marginTop: moderateScale(-1),
          borderWidth: moderateScale(2),
          borderColor: selectedP
            ? colors.primary
            : unSelectedP
              ? colors.borderDis
              : colors.textPrimary,
          backgroundColor: selectedP
            ? colors.backgroundBCI
            : unSelectedP
              ? colors.backgroundDis
              : colors.backgroundBCI,
          borderRadius: globalBorderRadius,
          padding: moderateScale(25),
        }}
      >
        <Image
          source={
            selectedP
              ? theme === 'dark'
                ? ImagesPath.starD
                : ImagesPath.star
              : unSelectedP
                ? ImagesPath.starDis
                : theme === 'dark'
                  ? ImagesPath.starEnaD
                  : ImagesPath.starEna
          }
          style={{
            width: globalIconsLar,
            height: globalIconsLar,
          }}
        />
        <Text
          style={{
            marginLeft: moderateScale(50),
            color: selectedP
              ? colors.primary
              : unSelectedP
                ? colors.borderDis
                : colors.textPrimary,
            fontSize: globalFontSizeTitle,
            fontWeight: globalFontWeightBold,
          }}
        >
          Premiun
        </Text>
      </View>
      <View
        style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch' }}
      >
        <CardDescription
          content='Exposicion VIP'
          iconD='checkCEna'
          iconS='checkC'
          iconU='checkCDis'
          selected={selectedP}
          unSelected={unSelectedP}
        />
        <CardDescription
          content='Mas imagenes'
          iconD='checkCEna'
          iconS='checkC'
          iconU='checkCDis'
          selected={selectedP}
          unSelected={unSelectedP}
        />
        <CardDescription
          content='90 días de duración'
          iconD='checkCEna'
          iconS='checkC'
          iconU='checkCDis'
          selected={selectedP}
          unSelected={unSelectedP}
        />
        <CardDescription
          content='Contacto directo'
          iconD='checkCEna'
          iconS='checkC'
          iconU='checkCDis'
          selected={selectedP}
          unSelected={unSelectedP}
        />
      </View>
      <Text
        style={{
          textAlign: 'center',
          fontSize: globalFontSizeTitle,
          fontWeight: globalFontWeightBold,
          color: colors.textPrimary,
        }}
      >
        $3000
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontSize: globalFontSizeMid,
          fontWeight: globalFontWeightBold,
          color: colors.textPrimary,
        }}
      >
        Cargo por publicación
      </Text>
    </TouchableOpacity>
  );
};

export default CardPremiun;
