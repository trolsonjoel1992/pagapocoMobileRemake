import ImagesPath from '@/src/constants/imagesPath';
import { globalIconsLar } from '@/src/constants/styles/globalStyles';
import { useAuth } from '@/src/context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const ButtonFinger = () => {
  const { login } = useAuth();

  const handleFingerLogin = async () => {
    const usersString = await AsyncStorage.getItem('users');
    if (usersString) {
      const users = JSON.parse(usersString);
      if (users.length > 0) {
        const firstUser = users[0];
        // Intenta loguear con el primer usuario
        const success = await login(firstUser.email, firstUser.password);
        if (success) {
          router.replace('/(tabs)/home');
        }
      }
    }
    // Si no hay usuarios, no hace nada
  };

  return (
    <TouchableOpacity onPress={handleFingerLogin}>
      <Image
        source={ImagesPath.finger}
        style={{
          width: globalIconsLar,
          height: globalIconsLar,
          marginTop: moderateScale(20),
        }}
      />
    </TouchableOpacity>
  );
};

export default ButtonFinger;
