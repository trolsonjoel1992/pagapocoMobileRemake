import HeaderGeneric from '@/src/components/atom/header/headerGeneric';
import InputsTCP from '@/src/components/molecule/sell/inputsTCP';
import ImagesPath from '@/src/constants/imagesPath';
import {
  globalFontSizeReg,
  globalFontWeightBold,
} from '@/src/constants/styles/globalStyles';
import { useTheme } from '@/src/context/ThemeContext';
import { router } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale } from 'react-native-size-matters';

const SellTitle = () => {
  const { colors } = useTheme();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <HeaderGeneric
        title='Título de Venta'
        onBackPress={() => router.back()}
      />
      <Text style={[styles.title, { color: colors.textPrimary }]}>
        ¡Ya casi terminamos!
      </Text>
      <Image
        source={ImagesPath.sale}
        style={{ width: moderateScale(250), height: moderateScale(250) }}
      />
      <InputsTCP />
    </SafeAreaView>
  );
};

export default SellTitle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: globalFontSizeReg,
    fontWeight: globalFontWeightBold,
    marginTop: moderateScale(5),
  },
});
