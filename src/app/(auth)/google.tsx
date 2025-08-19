import ImagesPath from '@/src/constants/imagesPath';
import { useAuth } from '@/src/context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

const Google = () => {
  const { login } = useAuth();

  const handleGoogleLogin = async () => {
    const email = 'google@mail.com';
    const password = '123456';

    // Obtiene usuarios registrados
    const usersString = await AsyncStorage.getItem('users');
    let users = [];
    if (usersString) {
      users = JSON.parse(usersString);
    }

    // Si no existe, lo registra
    const exists = users.some((u: any) => u.email === email);
    if (!exists) {
      users.push({ email, password });
      await AsyncStorage.setItem('users', JSON.stringify(users));
    }

    // Intenta loguear
    const success = await login(email, password);
    if (success) {
      router.replace('/(tabs)/home');
    }
  };

  return (
    <TouchableOpacity
      onPress={handleGoogleLogin}
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
    >
      <Image
        source={ImagesPath.google}
        style={{
          width: '100%',
          height: '100%',
        }}
        resizeMode='contain'
      />
    </TouchableOpacity>
  );
};

export default Google;
