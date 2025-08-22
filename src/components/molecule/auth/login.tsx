import ButtonReg from '@/src/components/atom/buttons/buttonReg';
import ButtonRegDis from '@/src/components/atom/buttons/buttonRegDis';
import InputEmail from '@/src/components/atom/imputs/auth/inputEmail';
import InputPass from '@/src/components/atom/imputs/auth/inputPass';
import {
  globalFontSizeSmall,
  globalFontWeightBold,
} from '@/src/constants/styles/globalStyles';
import { useAuth } from '@/src/context/AuthContext';
import { useTheme } from '@/src/context/ThemeContext';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
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
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.background,
        gap: moderateScale(10),
      }}
    >
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
      <Text
        style={{
          fontSize: globalFontSizeSmall,
          fontWeight: globalFontWeightBold,
          marginTop: moderateScale(5),
          marginBottom: moderateScale(5),
          color: colors.textPrimary,
        }}
      >
        ¿No tienes una cuenta?
      </Text>
    </View>
  );
};

export default Login;
