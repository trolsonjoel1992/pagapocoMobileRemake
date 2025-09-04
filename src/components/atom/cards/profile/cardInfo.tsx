import ImagesPath from '@/src/constants/imagesPath';
import {
  globalBorderRadius,
  globalButtonElevation,
  globalFontSizeMid,
  globalFontSizeReg,
  globalFontWeightSemiBold,
} from '@/src/constants/styles/globalStyles';
import { useTheme } from '@/src/context/ThemeContext';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';

type Props = {
  profileImage?: string;
  username?: string;
  email: string; // email es requerido
};

const CardInfo = ({ profileImage, username, email }: Props) => {
  const imageDimensions = moderateScale(75);
  const { colors, theme } = useTheme();
  const defaultImage = theme === 'dark' ? ImagesPath.darkUser : ImagesPath.user;

  // Usar imagen de perfil si existe, si no usar la imagen por defecto
  const imageSource = profileImage ? { uri: profileImage } : defaultImage;

  // Usar nombre de usuario si existe, si no mostrar "Sin nombre"
  const displayName = username || 'Sin nombre';

  return (
    <TouchableOpacity
      style={{
        backgroundColor: colors.background,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '80%',
        height: verticalScale(85),
        padding: moderateScale(10),
        borderRadius: globalBorderRadius,
        elevation: globalButtonElevation,
      }}
    >
      <Image
        source={imageSource}
        style={{
          width: imageDimensions,
          height: imageDimensions,
          borderRadius: imageDimensions / 2, // Hacer la imagen circular
        }}
      />
      <View style={{ gap: moderateScale(5) }}>
        <Text
          style={{
            color: colors.textPrimary,
            fontSize: globalFontSizeReg,
            fontWeight: globalFontWeightSemiBold,
          }}
        >
          {displayName}
        </Text>
        <Text
          style={{
            color: colors.textPrimary,
            fontSize: globalFontSizeMid,
            fontWeight: globalFontWeightSemiBold,
          }}
        >
          {email}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardInfo;
