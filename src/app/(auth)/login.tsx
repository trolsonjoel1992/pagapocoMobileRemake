import ButtonFinger from '@/src/components/atom/buttons/auth/buttonFinger';
import ButtonGoogle from '@/src/components/atom/buttons/auth/buttonGoogle';
import ButtonReg from '@/src/components/atom/buttons/buttonReg';
import ButtonRegDis from '@/src/components/atom/buttons/buttonRegDis';
import HeaderGeneric from '@/src/components/atom/header/headerGeneric';
import InputEmail from '@/src/components/atom/imputs/inputEmail';
import InputPass from '@/src/components/atom/imputs/inputPass';
import { lightColor } from '@/src/constants/colors';
import ImagesPath from '@/src/constants/imagesPath';
import {
  globalFontSizeSmall,
  globalFontSizeTitle,
  globalFontWeightBold,
} from '@/src/constants/styles/globalStyles';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale } from 'react-native-size-matters';

const Login = () => {
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPassValid, setIsPassValid] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <HeaderGeneric
        title='Inicio de sesión'
        onBackPress={() => router.push('/(tabs)/home')}
      />
      <Text style={styles.title}>Bienvenido</Text>
      <Image
        source={ImagesPath.logo}
        style={{
          width: 185,
          height: 120,
        }}
      />
      <InputEmail description='Email' onValidChange={setIsEmailValid} />
      <InputPass description='Contraseña' onValidChange={setIsPassValid} />
      {isEmailValid && isPassValid ? (
        <ButtonReg action='Ingresar' />
      ) : (
        <ButtonRegDis action='Ingresar' />
      )}
      <Text style={styles.quest}>¿No tienes una cuenta?</Text>
      <ButtonReg
        action='Crear cuenta'
        onPress={() => router.push('/(auth)/register')}
      />
      <ButtonGoogle />
      <ButtonFinger />
    </SafeAreaView>
  );
};

export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: lightColor.background,
  },
  title: {
    color: lightColor.textPrimary,
    fontSize: globalFontSizeTitle,
    fontWeight: globalFontWeightBold,
    marginBottom: moderateScale(10),
  },
  quest: {
    color: lightColor.textPrimary,
    fontSize: globalFontSizeSmall,
    fontWeight: globalFontWeightBold,
    marginTop: moderateScale(5),
    marginBottom: moderateScale(5),
  },
});
