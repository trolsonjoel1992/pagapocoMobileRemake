import ButtonReg from '@/src/components/atom/buttons/buttonReg';
import HeaderGeneric from '@/src/components/atom/header/headerGeneric';
import EditButtonSet from '@/src/components/molecule/myPublications/editButtonSet';
import {
  globalFontSizeTitle,
  globalFontWeightBold,
} from '@/src/constants/styles/globalStyles';
import { useTheme } from '@/src/context/ThemeContext';
import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const EditPublication = () => {
  const { colors } = useTheme();
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <HeaderGeneric title='Editar Publicacion' />
      <Text style={[styles.title, { color: colors.textPrimary }]}>
        ¿Que queres cambiar en tu publicacion?
      </Text>
      <EditButtonSet />
      <ButtonReg action='Salir' onPress={() => router.push('/(tabs)/home')} />
    </SafeAreaView>
  );
};

export default EditPublication;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    textAlign: 'center',
    fontSize: globalFontSizeTitle,
    fontWeight: globalFontWeightBold,
  },
});
