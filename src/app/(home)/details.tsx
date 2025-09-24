import ButtonMax from '@/src/components/atom/buttons/buttonMax';
import HeaderGeneric from '@/src/components/atom/header/headerGeneric';
import { useAuth } from '@/src/context/AuthContext';
import { usePublication } from '@/src/context/PublicationContext';
import { useTheme } from '@/src/context/ThemeContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Details = () => {
  const { colors } = useTheme();
  const { user } = useAuth();
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
    console.log('🔍 Mostrando publicaciones...');
    const publicationsString = await AsyncStorage.getItem('publications');
    console.log('📋 Raw data:', publicationsString);

    if (publicationsString) {
      const publications = JSON.parse(publicationsString);
      console.log('📊 Total publicaciones:', publications.length);
      console.log('📊 Publicaciones array:', publications);

      if (publications.length === 0) {
        setUserInfo('No hay publicaciones creadas');
      } else {
        let info = `TOTAL PUBLICACIONES: ${publications.length}\n\n`;

        // Mostrar TODAS las publicaciones con más detalles
        info += publications
          .map((pub: any, idx: number) => {
            return (
              `#${idx + 1}\n` +
              `ID: ${pub.id}\n` +
              `Propietario: ${pub.userEmail || 'No definido'}\n` +
              `Título: ${pub.title || 'Sin título'}\n` +
              `Categoría: ${pub.category || 'Sin categoría'}\n` +
              `Precio: ${pub.price || 'Sin precio'}\n` +
              `Premium: ${pub.isPremium ? 'Sí' : 'No'}\n` +
              `Fecha: ${pub.createdAt || 'Sin fecha'}\n`
            );
          })
          .join('\n');

        // Filtrar por usuario actual si existe
        if (user) {
          const userPublications = publications.filter(
            (pub: any) => pub.userEmail === user.email
          );
          info += `\n--- PUBLICACIONES DEL USUARIO ACTUAL (${user.email}) ---\n`;
          info += `Cantidad: ${userPublications.length}\n\n`;

          if (userPublications.length > 0) {
            info += userPublications
              .map((pub: any, idx: number) => {
                return (
                  `#${idx + 1} (Usuario)\n` +
                  `ID: ${pub.id}\n` +
                  `Título: ${pub.title}\n` +
                  `Categoría: ${pub.category}\n`
                );
              })
              .join('\n');
          }
        }

        setUserInfo(info);
      }
    } else {
      setUserInfo('No hay publicaciones creadas - AsyncStorage vacío');
    }
  };

  const handleShowImages = async () => {
    console.log('🖼️ Mostrando imágenes...');
    const publicationsString = await AsyncStorage.getItem('publications');
    if (!publicationsString) {
      setUserInfo('No hay publicaciones ni imágenes');
      return;
    }

    const publications = JSON.parse(publicationsString);
    let allImagesInfo = `TOTAL PUBLICACIONES: ${publications.length}\n\n`;

    for (const pub of publications) {
      const imagesString = await AsyncStorage.getItem(`images_${pub.id}`);
      const images = imagesString ? JSON.parse(imagesString) : [];

      console.log(`🖼️ Publicación ${pub.id}: ${images.length} imágenes`);

      allImagesInfo += `Publicación ID: ${pub.id}\n`;
      allImagesInfo += `Propietario: ${pub.userEmail || 'No definido'}\n`;
      allImagesInfo += `Título: ${pub.title || 'Sin título'}\n`;
      allImagesInfo += `Cantidad de imágenes: ${images.length}\n`;

      if (images.length > 0) {
        allImagesInfo += 'URIs de imágenes:\n';
        images.forEach((uri: string, index: number) => {
          allImagesInfo += `  ${index + 1}. ${uri.substring(0, 60)}...\n`;
        });
      } else {
        allImagesInfo += '❌ Sin imágenes\n';
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
        <ScrollView style={styles.infoContainer}>
          <Text style={[styles.infoText, { color: colors.textPrimary }]}>
            {userInfo}
          </Text>
        </ScrollView>
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
  infoContainer: {
    flex: 1,
    width: '90%',
    marginTop: 20,
  },
  infoText: {
    fontSize: 12,
    lineHeight: 18,
    fontFamily: 'monospace', // Para mejor legibilidad
  },
});
