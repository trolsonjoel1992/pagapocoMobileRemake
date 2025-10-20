import ButtonReg from '@/src/components/atom/buttons/buttonReg';
import ButtonRegDis from '@/src/components/atom/buttons/buttonRegDis';
import HeaderGeneric from '@/src/components/atom/header/headerGeneric';
import CardPictureE from '@/src/components/molecule/myPublications/viewMypbs/cardpictureE';
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
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale } from 'react-native-size-matters';

const EditImages = () => {
  const { colors } = useTheme();
  const { publication } = usePublication();
  const { getImages } = useImages();
  const [localImages, setLocalImages] = useState<string[]>([]);
  const [originalImages, setOriginalImages] = useState<string[]>([]);
  const [showWarning, setShowWarning] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasChanges, setHasChanges] = useState(false);
  useEffect(() => {
    const loadExistingImages = async () => {
      if (publication?.id) {
        try {
          setIsLoading(true);
          const existingImages = await getImages(publication.id);
          setLocalImages(existingImages);
          setOriginalImages(existingImages);
        } catch (error) {
          console.error('Error loading existing images:', error);
        } finally {
          setIsLoading(false);
        }
      }
    };
    loadExistingImages();
  }, [publication?.id]);
  useEffect(() => {
    const checkChanges = () => {
      if (localImages.length !== originalImages.length) {
        setHasChanges(true);
        return;
      }
      const sortedLocal = [...localImages].sort();
      const sortedOriginal = [...originalImages].sort();
      const changed = sortedLocal.some(
        (img, index) => img !== sortedOriginal[index]
      );
      setHasChanges(changed);
    };
    checkChanges();
  }, [localImages, originalImages]);
  const getTitleByCategory = () => {
    if (!publication?.category) return 'Editá las fotos';
    switch (publication.category) {
      case 'car':
      case 'pickup':
      case 'truck':
        return 'Editá las fotos de tu vehículo';
      case 'motorcycle':
        return 'Editá las fotos de tu motocicleta';
      case 'pieces':
        return 'Editá las fotos de la pieza';
      default:
        return 'Editá las fotos';
    }
  };
  const getImageLimitText = () => {
    const currentImages = localImages.length;
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
  const handleSaveChanges = async () => {
    if (!publication?.id) return;
    try {
      router.back();
    } catch (error) {
      console.error('Error saving changes:', error);
    }
  };
  if (isLoading) {
    return (
      <SafeAreaView
        style={[styles.container, { backgroundColor: colors.background }]}
      >
        <HeaderGeneric
          title='Cargar imágenes'
          onBackPress={() => router.back()}
        />
        <View style={styles.loadingContainer}>
          <ActivityIndicator size='large' color={colors.textPrimary} />
          <Text style={[styles.loadingText, { color: colors.textPrimary }]}>
            Cargando imágenes...
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <HeaderGeneric
        title='Editar imágenes'
        onBackPress={() => router.back()}
      />
      <Text style={[styles.title, { color: colors.textPrimary }]}>
        {getTitleByCategory()}
      </Text>
      <Text
        style={[
          styles.subtitle,
          {
            color:
              showWarning && localImages.length === 0
                ? colors.error
                : colors.textPrimary,
          },
        ]}
      >
        {getImageLimitText()}
      </Text>
      <CardPictureE images={localImages} setImages={setLocalImages} />
      {localImages.length > 0 ? (
        <ButtonReg
          action={hasChanges ? 'Guardar' : 'Volver'}
          onPress={handleSaveChanges}
        />
      ) : (
        <ButtonRegDis
          action={hasChanges ? 'Guardar' : 'Volver'}
          onPress={handleDisabledPress}
        />
      )}
    </SafeAreaView>
  );
};

export default EditImages;

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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: moderateScale(10),
  },
  loadingText: {
    fontSize: globalFontSizeMid,
    fontWeight: globalFontWeightSemiBold,
  },
});
