import ImagesPath from '@/src/constants/ImagesPath';
import { router } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function FavoritosVacios() {
  return (
    <View style={styles.container}>
      
      {/* <TouchableOpacity onPress={() => router.push("/(favorites)/favorites")}> */}
        <Image
            source={ImagesPath.imageHeart}
            style={styles.image}
            resizeMode="contain"
        />
      {/* </TouchableOpacity> */}

      <Text style={styles.title}>¡Todavía no tenes publicaciones favoritas!</Text>
      <Text style={styles.subtitle}>
        Agragalas cliqueando en el corazón de la publicación
      </Text>
      <TouchableOpacity onPress={() => router.push("/(favorites)/favoritos")}>
        <Text style={styles.link}>Nuestros recomendados</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#000',
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: '#888',
    marginBottom: 20,
  },
  link: {
    fontSize: 14,
    color: '#007AFF',
    textDecorationLine: 'underline',
  },
});