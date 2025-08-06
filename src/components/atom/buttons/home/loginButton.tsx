import { lightColor } from '@/src/constants/colors';
import IconsPath from '@/src/constants/iconsPath';
import {
  globalFontSizeMid,
  globalFontWeightBold,
  globalIconsSma,
} from '@/src/constants/styles/globalStyles';
import { router } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';

const LoginButton = () => {
  return (
    <TouchableOpacity
      onPress={() => router.push('/(auth)/login')}
      style={{ flexDirection: 'row', alignItems: 'center' }}
    >
      <Image
        source={IconsPath.login}
        style={{
          width: globalIconsSma,
          height: globalIconsSma,
        }}
      />
      <Text
        style={{
          marginLeft: 10,
          color: lightColor.textBlue,
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
