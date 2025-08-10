import ButtonFinger from '@/src/components/atom/buttons/auth/buttonFinger';
import ButtonGoogle from '@/src/components/atom/buttons/auth/buttonGoogle';
import ButtonReg from '@/src/components/atom/buttons/buttonReg';
import ButtonRegDis from '@/src/components/atom/buttons/buttonRegDis';
import HeaderGeneric from '@/src/components/atom/header/headerGeneric';
import InputEmail from '@/src/components/atom/imputs/auth/inputEmail';
import InputPass from '@/src/components/atom/imputs/auth/inputPass';
import ImagesPath from '@/src/constants/imagesPath';
import {
  globalFontSizeSmall,
  globalFontSizeTitle,
  globalFontWeightBold,
} from '@/src/constants/styles/globalStyles';
import { useTheme } from '@/src/context/ThemeContext';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Register = () => {
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPassValid, setIsPassValid] = useState(false);
  const { colors } = useTheme();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <HeaderGeneric
        title='Crear cuenta'
        onBackPress={() => router.push('/(tabs)/home')}
      />
      <Text style={[styles.title, { color: colors.textPrimary }]}>
        Unite a la comunidad
      </Text>
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
      <Text style={[styles.quest, { color: colors.textPrimary }]}>
        ¿Ya tenés cuenta?
      </Text>
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
  },
  title: {
    fontSize: globalFontSizeTitle,
    fontWeight: globalFontWeightBold,
    marginBottom: 10,
  },
  quest: {
    fontSize: globalFontSizeSmall,
    fontWeight: globalFontWeightBold,
    marginTop: 10,
    marginBottom: 5,
  },
});
