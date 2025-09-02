import ButtonMax from '@/src/components/atom/buttons/buttonMax';
import HeaderGeneric from '@/src/components/atom/header/headerGeneric';
import { usePublication } from '@/src/context/PublicationContext';
import { useTheme } from '@/src/context/ThemeContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Alert, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Details = () => {
  const { colors } = useTheme();
  const [userInfo, setUserInfo] = useState<string | null>(null);
  const { publication } = usePublication();

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

  const handleShowPublications = async () => {
    const publicationsString = await AsyncStorage.getItem('publications');
    if (publicationsString) {
      const publications = JSON.parse(publicationsString);
      if (publications.length === 0) {
        setUserInfo('No hay publicaciones creadas');
      } else {
        const info = publications
          .map(
            (pub: any, idx: number) =>
              `#${idx + 1}\nCategoría: ${pub.category}\nPremium: ${
                pub.isPremium ? 'Sí' : 'No'
              }\nID: ${pub.id}\n`
          )
          .join('\n');
        setUserInfo(info);
      }
    } else {
      setUserInfo('No hay publicaciones creadas');
    }
  };

  const handleShowImages = async () => {
    const publicationsString = await AsyncStorage.getItem('publications');
    if (!publicationsString) {
      setUserInfo('No hay publicaciones ni imágenes');
      return;
    }

    const publications = JSON.parse(publicationsString);
    let allImagesInfo = '';

    for (const pub of publications) {
      const imagesString = await AsyncStorage.getItem(`images_${pub.id}`);
      const images = imagesString ? JSON.parse(imagesString) : [];

      allImagesInfo += `Publicación ID: ${pub.id}\n`;
      allImagesInfo += `Cantidad de imágenes: ${images.length}\n`;
      if (images.length > 0) {
        allImagesInfo += 'URIs:\n';
        images.forEach((uri: string, index: number) => {
          allImagesInfo += `${index + 1}. ${uri}\n`;
        });
      }
      allImagesInfo += '\n';
    }

    setUserInfo(allImagesInfo || 'No hay imágenes guardadas');
  };

  const handleDeleteAllPublications = async () => {
    try {
      // Get all publications first
      const publicationsString = await AsyncStorage.getItem('publications');
      if (publicationsString) {
        const publications = JSON.parse(publicationsString);

        // Delete all associated images first
        for (const pub of publications) {
          await AsyncStorage.removeItem(`images_${pub.id}`);
        }
      }

      // Then delete the publications
      await AsyncStorage.removeItem('publications');

      Alert.alert(
        'Éxito',
        'Todas las publicaciones y sus imágenes han sido eliminadas',
        [{ text: 'OK' }]
      );

      setUserInfo(null);
    } catch (error) {
      Alert.alert('Error', 'No se pudieron eliminar las publicaciones', [
        { text: 'OK' },
      ]);
    }
  };

  const confirmDeletePublications = () => {
    Alert.alert(
      'Confirmar eliminación',
      '¿Estás seguro que deseas eliminar todas las publicaciones y sus imágenes?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Eliminar',
          onPress: handleDeleteAllPublications,
          style: 'destructive',
        },
      ]
    );
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
      <ButtonMax
        action='ver publicaciones creadas'
        onPress={handleShowPublications}
      />
      <ButtonMax action='ver imágenes guardadas' onPress={handleShowImages} />
      <ButtonMax
        action='eliminar publicaciones e imágenes'
        onPress={confirmDeletePublications}
      />
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
