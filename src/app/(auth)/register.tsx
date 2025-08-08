import ButtonFinger from '@/src/components/atom/buttons/auth/buttonFinger';
import ButtonGoogle from '@/src/components/atom/buttons/auth/buttonGoogle';
import ButtonReg from '@/src/components/atom/buttons/buttonReg';
import ButtonRegDis from '@/src/components/atom/buttons/buttonRegDis';
import HeaderGeneric from '@/src/components/atom/header/headerGeneric';
import InputEmail from '@/src/components/atom/imputs/auth/inputEmail';
import InputPass from '@/src/components/atom/imputs/auth/inputPass';
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

const Register = () => {
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPassValid, setIsPassValid] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <HeaderGeneric
        title='Crear cuenta'
        onBackPress={() => router.push('/(auth)/login')}
      />
      <Text style={styles.title}>Bienvenido</Text>
      <Image
        source={ImagesPath.logo}
        style={{
          width: 185,
          height: 120,
        }}
      />
      <InputEmail
        description='Cargá tu Email'
        onValidChange={setIsEmailValid}
      />
      <InputPass
        description='Creá una Contraseña'
        onValidChange={setIsPassValid}
      />
      {isEmailValid && isPassValid ? (
        <ButtonReg action='Registrar' />
      ) : (
        <ButtonRegDis action='Registrar' />
      )}
      <Text style={styles.quest}>¿Ya tenés cuenta?</Text>
      <ButtonReg
        action='Ingresa'
        onPress={() => router.push('/(auth)/login')}
      />
      <ButtonGoogle />
      <ButtonFinger />
    </SafeAreaView>
  );
};

export default Register;
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
    marginBottom: 10,
  },
  quest: {
    color: lightColor.textPrimary,
    fontSize: globalFontSizeSmall,
    fontWeight: globalFontWeightBold,
    marginTop: 10,
    marginBottom: 5,
  },
});
