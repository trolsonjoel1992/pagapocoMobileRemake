import ButtonFinger from '@/src/components/atom/buttons/auth/buttonFinger';
import ButtonGoogle from '@/src/components/atom/buttons/auth/buttonGoogle';
import ButtonReg from '@/src/components/atom/buttons/buttonReg';
import HeaderGeneric from '@/src/components/atom/header/headerGeneric';
import Login from '@/src/components/molecule/auth/login';
import Register from '@/src/components/molecule/auth/register';
import ImagesPath from '@/src/constants/imagesPath';
import {
  globalFontSizeTitle,
  globalFontWeightBold,
} from '@/src/constants/styles/globalStyles';
import { useTheme } from '@/src/context/ThemeContext';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale } from 'react-native-size-matters';

const fullLogin = () => {
  const { colors } = useTheme();
  const [showRegister, setShowRegister] = useState(false);

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <HeaderGeneric
        title={showRegister ? 'Crear cuenta' : 'Inicio de sesión'}
        onBackPress={() => {
          router.back();
        }}
      />
      <Text style={[styles.title, { color: colors.textPrimary }]}>
        {showRegister ? 'Unite a la comunidad' : 'Bienvenido'}
      </Text>
      <Image
        source={ImagesPath.logo}
        style={{
          width: moderateScale(185),
          height: moderateScale(120),
        }}
      />
      {showRegister ? <Register /> : <Login />}
      <ButtonReg
        action={showRegister ? 'Ingresa' : 'Crear cuenta'}
        onPress={() => setShowRegister(!showRegister)}
      />
      <ButtonGoogle />
      <ButtonFinger />
    </SafeAreaView>
  );
};

export default fullLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: globalFontSizeTitle,
    fontWeight: globalFontWeightBold,
    marginBottom: moderateScale(10),
  },
});
