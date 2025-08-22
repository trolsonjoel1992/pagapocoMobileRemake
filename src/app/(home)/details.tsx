import ButtonMax from '@/src/components/atom/buttons/buttonMax';
import HeaderGeneric from '@/src/components/atom/header/headerGeneric';
import { useTheme } from '@/src/context/ThemeContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Details = () => {
  const { colors } = useTheme();
  const [userInfo, setUserInfo] = useState<string | null>(null);

  const handleDeleteAllUsers = async () => {
    await AsyncStorage.removeItem('users');
    await AsyncStorage.removeItem('user');
    alert('Todos los usuarios han sido eliminados');
    setUserInfo(null);
  };

  const handleShowUsers = async () => {
    const usersString = await AsyncStorage.getItem('users');
    if (usersString) {
      const users = JSON.parse(usersString);
      if (users.length === 0) {
        setUserInfo('No hay usuarios registrados');
      } else {
        const info = users
          .map(
            (u: any, idx: number) =>
              `#${idx + 1}\nEmail: ${u.email}\nPassword: ${u.password}\n`
          )
          .join('\n');
        setUserInfo(info);
      }
    } else {
      setUserInfo('No hay usuarios registrados');
    }
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <HeaderGeneric
        title='Detalles de la publicación'
        onBackPress={() => router.back()}
      />
      <ButtonMax
        action='borrar todos los usuarios'
        onPress={handleDeleteAllUsers}
      />
      <ButtonMax action='ver usuarios registrados' onPress={handleShowUsers} />
      {userInfo && (
        <Text style={{ color: colors.textPrimary, marginTop: 20 }}>
          {userInfo}
        </Text>
      )}
    </SafeAreaView>
  );
};

export default Details;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
