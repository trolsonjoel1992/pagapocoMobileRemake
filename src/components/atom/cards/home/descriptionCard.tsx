import {
  globalFontSizeMid,
  globalFontSizeReg,
  globalFontSizeTitle,
  globalFontWeightBold,
  globalFontWeightMedium,
} from '@/src/constants/styles/globalStyles';
import { Publication } from '@/src/context/PublicationContext';
import { useTheme } from '@/src/context/ThemeContext';
import React from 'react';
import { Text, View } from 'react-native';

const DescriptionCard = ({ publication }: { publication: Publication }) => {
  const { colors } = useTheme();
  return (
    <View style={{ alignItems: 'flex-start', width: '100%', padding: 10 }}>
      <Text
        style={{
          fontSize: globalFontSizeTitle,
          fontWeight: globalFontWeightBold,
          color: colors.textPrimary,
        }}
      >
        {publication.price}
      </Text>
      <View style={{ flexDirection: 'row' }}>
        <Text
          style={{
            fontSize: globalFontSizeReg,
            fontWeight: globalFontWeightBold,
            color: colors.textPrimary,
          }}
        >
          Año:
        </Text>
        <Text
          style={{
            fontSize: globalFontSizeReg,
            fontWeight: globalFontWeightMedium,
            color: colors.textPrimary,
          }}
        >
          {publication.year}
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontSize: globalFontSizeReg,
            fontWeight: globalFontWeightBold,
            color: colors.textPrimary,
          }}
        >
          Kilómetros:
        </Text>
        <Text
          style={{
            fontSize: globalFontSizeMid,
            fontWeight: globalFontWeightMedium,
            color: colors.textPrimary,
          }}
        >
          {publication.kilometers} km
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontSize: globalFontSizeReg,
            fontWeight: globalFontWeightBold,
            color: colors.textPrimary,
          }}
        >
          Descripción:
        </Text>
        {publication.description ? (
          <Text
            numberOfLines={1}
            ellipsizeMode='tail'
            style={{
              fontSize: globalFontSizeMid,
              fontWeight: globalFontWeightMedium,
              color: colors.textPrimary,
            }}
          >
            {publication.description}
          </Text>
        ) : (
          <Text
            style={{
              fontSize: globalFontSizeReg,
              fontWeight: globalFontWeightMedium,
              color: colors.textPrimary,
            }}
          >
            -Sin descripción-
          </Text>
        )}
      </View>
    </View>
  );
};

export default DescriptionCard;
