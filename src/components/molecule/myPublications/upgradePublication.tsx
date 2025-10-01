import ContentPremium from '@/src/components/atom/cards/myPublications/contentPremiun';
import myPbsPath from '@/src/constants/icons/myPbsPath';
import {
  globalBorderRadius,
  globalFontSizeReg,
  globalFontSizeTitle,
  globalFontWeightBold,
  globalIcons2X,
} from '@/src/constants/styles/globalStyles';
import { useTheme } from '@/src/context/ThemeContext';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const UpgradePublication = () => {
  const { colors, theme } = useTheme();

  return (
    <View
      style={{
        alignItems: 'center',
        width: '90%',
        height: '65%',
        borderWidth: moderateScale(1),
        backgroundColor: colors.backgroundBCI,
        borderColor: colors.textPrimary,
        borderRadius: globalBorderRadius,
      }}
    >
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          width: '100.3%',
          height: moderateScale(170),
          marginTop: moderateScale(-1),
          borderWidth: moderateScale(2),
          borderColor: colors.textPrimary,
          backgroundColor: colors.backgroundBCI,
          borderRadius: globalBorderRadius,
          padding: moderateScale(25),
        }}
      >
        <Image
          source={theme === 'dark' ? myPbsPath.premiunD : myPbsPath.premiun}
          style={{
            width: globalIcons2X,
            height: globalIcons2X,
          }}
        />
      </View>
      <View
        style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch' }}
      >
        <ContentPremium content='Exposicion VIP' iconS='checkC' />
        <ContentPremium content='Mas imagenes' iconS='checkC' />
        <ContentPremium content='90 días de duración' iconS='checkC' />
        <ContentPremium content='Contacto directo' iconS='checkC' />
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
            fontSize: globalFontSizeReg,
            fontWeight: globalFontWeightBold,
            color: colors.textPrimary,
          }}
        >
          Cargo por publicación
        </Text>
      </View>
    </View>
  );
};

export default UpgradePublication;
