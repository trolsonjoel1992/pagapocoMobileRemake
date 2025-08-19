import IconsPath from '@/src/constants/iconsPath';
import {
  globalFontSizeMid,
  globalFontWeightBold,
  globalIconsSma,
} from '@/src/constants/styles/globalStyles';
import { useAuth } from '@/src/context/AuthContext';
import { useTheme } from '@/src/context/ThemeContext';
import { router } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';

const LoginButton = () => {
  const { colors, theme } = useTheme();
  const { user } = useAuth();
  const loginIcon = theme === 'dark' ? IconsPath.darkLogin : IconsPath.login;

  if (user) return null; // Oculta el botón si hay usuario logueado

  return (
    <TouchableOpacity
      onPress={() => router.push('/(auth)/login')}
      style={{ flexDirection: 'row', alignItems: 'center' }}
    >
      <Image
        source={loginIcon}
        style={{
          width: globalIconsSma,
          height: globalIconsSma,
        }}
      />
      <Text
        style={{
          marginLeft: 10,
          color: colors.textBlue,
          fontSize: globalFontSizeMid,
          fontWeight: globalFontWeightBold,
        }}
      >
        Iniciar Sesión
      </Text>
    </TouchableOpacity>
  );
};

export default LoginButton;
