import ButtonMax from '@/src/components/atom/buttons/buttonMax';
import CardPicture from '@/src/components/atom/cards/profile/cardPicture';
import HeaderGeneric from '@/src/components/atom/header/headerGeneric';
import { useTheme } from '@/src/context/ThemeContext';
import { router } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Picture = () => {
  const { colors, theme } = useTheme();
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <HeaderGeneric title='Foto de perfil' onBackPress={() => router.back()} />
      <CardPicture
        icon={theme === 'dark' ? 'cameraD' : 'camera'}
        title='Tómate una foto'
      />
      <CardPicture
        icon={theme === 'dark' ? 'galleryD' : 'gallery'}
        title='Subir foto'
      />
      <CardPicture
        icon={theme === 'dark' ? 'trashD' : 'trash'}
        title='Eliminar foto'
      />
      <ButtonMax action='Regresar a perfil' onPress={() => router.back()} />
    </SafeAreaView>
  );
};

export default Picture;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
