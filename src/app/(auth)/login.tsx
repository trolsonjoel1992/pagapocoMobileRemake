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
import { useAuth } from '@/src/context/AuthContext';
import { useTheme } from '@/src/context/ThemeContext';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale } from 'react-native-size-matters';

const Login = () => {
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPassValid, setIsPassValid] = useState(false);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');
  const { colors } = useTheme();
  const { login } = useAuth();

  const handleLogin = async () => {
    setError('');
    const success = await login(email, pass);
    if (success) {
      router.replace('/(tabs)/home');
    } else {
      setError('Email o contraseña incorrectos');
    }
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <HeaderGeneric
        title='Inicio de sesión'
        onBackPress={() => router.push('/(tabs)/home')}
      />
      <Text style={[styles.title, { color: colors.textPrimary }]}>
        Bienvenido
      </Text>
      <Image
        source={ImagesPath.logo}
        style={{
          width: 185,
          height: 120,
        }}
      />
      <InputEmail
        description='Email'
        onValidChange={setIsEmailValid}
        value={email}
        onChangeText={setEmail}
      />
      <InputPass
        description='Contraseña'
        onValidChange={setIsPassValid}
        value={pass}
        onChangeText={setPass}
      />
      {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
      {isEmailValid && isPassValid ? (
        <ButtonReg action='Ingresar' onPress={handleLogin} />
      ) : (
        <ButtonRegDis action='Ingresar' />
      )}
      <Text style={[styles.quest, { color: colors.textPrimary }]}>
        ¿No tienes una cuenta?
      </Text>
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
  },
  title: {
    fontSize: globalFontSizeTitle,
    fontWeight: globalFontWeightBold,
    marginBottom: moderateScale(10),
  },
  quest: {
    fontSize: globalFontSizeSmall,
    fontWeight: globalFontWeightBold,
    marginTop: moderateScale(5),
    marginBottom: moderateScale(5),
  },
});
