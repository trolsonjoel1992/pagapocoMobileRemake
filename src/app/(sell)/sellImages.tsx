import ButtonReg from '@/src/components/atom/buttons/buttonReg';
import ButtonRegDis from '@/src/components/atom/buttons/buttonRegDis'; // Add this import
import HeaderGeneric from '@/src/components/atom/header/headerGeneric';
import CardPictureS from '@/src/components/molecule/sell/cardPictureS';
import {
  globalFontSizeMid,
  globalFontSizeReg,
  globalFontWeightBold,
  globalFontWeightSemiBold,
} from '@/src/constants/styles/globalStyles';
import { useImages } from '@/src/context/ImageContext';
import { usePublication } from '@/src/context/PublicationContext';
import { useTheme } from '@/src/context/ThemeContext';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale } from 'react-native-size-matters';

const SellImages = () => {
  const { colors } = useTheme();
  const { publication } = usePublication();
  const { clearImages, images } = useImages();
  const [showWarning, setShowWarning] = useState(false); // Add this state

  const handleBack = async () => {
    if (publication?.id) {
      await clearImages(publication.id);
    }
    router.back();
  };

  const getTitleByCategory = () => {
    if (!publication?.category) return '';

    switch (publication.category) {
      case 'car':
      case 'pickup':
      case 'truck':
        return 'Subí las fotos de tu vehículo';
      case 'motorcycle':
        return 'Subí las fotos de tu motocicleta';
      case 'pieces':
        return 'Subí las fotos de la pieza';
      default:
        return '';
    }
  };

  const getImageLimitText = () => {
    const currentImages = images.length;
    const isPremium = publication?.isPremium;
    const limit = isPremium ? 8 : 4;

    if (showWarning && currentImages === 0) {
      return 'Agregá al menos una imagen';
    }

    if (currentImages >= limit) {
      return isPremium
        ? 'Has alcanzado el límite de 8 imágenes'
        : 'Pasate a Premium para subir más imágenes';
    }

    return isPremium
      ? `Podés agregar hasta 8 imágenes (${currentImages}/8)`
      : `Podés agregar hasta 4 imágenes (${currentImages}/4)`;
  };

  const handleDisabledPress = () => {
    setShowWarning(true);
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <HeaderGeneric title='Cargar imágenes' onBackPress={handleBack} />
      <Text style={[styles.title, { color: colors.textPrimary }]}>
        {getTitleByCategory()}
      </Text>
      <Text
        style={[
          styles.subtitle,
          {
            color:
              showWarning && images.length === 0
                ? colors.error
                : colors.textPrimary,
          },
        ]}
      >
        {getImageLimitText()}
      </Text>
      <CardPictureS />
      {images.length > 0 ? (
        <ButtonReg
          action='Continuar'
          onPress={() => router.push('/(sell)/sellTitle')}
        />
      ) : (
        <ButtonRegDis action='Continuar' onPress={handleDisabledPress} />
      )}
    </SafeAreaView>
  );
};

export default SellImages;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: globalFontSizeReg,
    fontWeight: globalFontWeightBold,
    marginTop: moderateScale(5),
  },
  subtitle: {
    fontSize: globalFontSizeMid,
    fontWeight: globalFontWeightSemiBold,
    marginBottom: moderateScale(5),
    textAlign: 'center',
  },
});
