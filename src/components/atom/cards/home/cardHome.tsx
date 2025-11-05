import {
  globalBorderRadius,
  globalButtonElevation,
  globalFontSizeMid,
  globalFontSizeSmall,
  globalFontSizeTiny,
  globalFontWeightBold,
  globalFontWeightSemiBold,
} from '@/src/constants/styles/globalStyles';
import { Publication } from '@/src/context/PublicationContext';
import { useTheme } from '@/src/context/ThemeContext';
import { useMyPublication } from '@/src/hooks/mypublication/useMyPublication';
import { router } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';

const CardHome = ({ publication }: { publication: Publication }) => {
  const { colors } = useTheme();
  const { firstImage } = useMyPublication(publication);

  const handlePress = () => {
    router.push({
      pathname: '/(home)/publication',
      params: { id: publication.id },
    });
  };

  return (
    <TouchableOpacity
      style={{
        flex: 1,
        maxWidth: '48%',
        height: verticalScale(180),
        backgroundColor: colors.background,
        alignItems: 'center',
        justifyContent: 'space-between',
        elevation: globalButtonElevation,
        borderRadius: globalBorderRadius,
        padding: moderateScale(5),
        marginBottom: moderateScale(7.5),
      }}
      onPress={handlePress}
    >
      {firstImage ? (
        <Image
          source={{ uri: firstImage }}
          style={{
            width: '100%',
            height: 120,
            borderRadius: globalBorderRadius,
          }}
          resizeMode='cover'
        />
      ) : (
        <Image
          style={{
            width: '100%',
            height: 120,
            borderRadius: globalBorderRadius,
            backgroundColor: colors.background,
          }}
        />
      )}
      {publication.isPremium ? (
        <Text
          style={{
            color: colors.textBlue,
            fontWeight: globalFontWeightBold,
            fontSize: globalFontSizeTiny,
          }}
        >
          Recomendada
        </Text>
      ) : null}
      <Text
        numberOfLines={1}
        ellipsizeMode='tail'
        style={{
          color: colors.textPrimary,
          fontWeight: globalFontWeightBold,
          fontSize: globalFontSizeMid,
        }}
      >
        {publication.title}
      </Text>
      <Text
        style={{
          color: colors.textPrimary,
          fontSize: globalFontSizeSmall,
          fontWeight: globalFontWeightSemiBold,
        }}
      >
        {publication.price}
      </Text>
    </TouchableOpacity>
  );
};

export default CardHome;
