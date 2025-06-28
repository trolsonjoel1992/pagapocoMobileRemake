import Button from '@/src/components/atoms/Button';
import ContainerView from '@/src/components/atoms/ContainerView';
import HeaderMainComponent from '@/src/components/atoms/HeaderMainComponent';
import ImageUploader from '@/src/components/molecules/ImageUploader';

import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function Fotos() {
  const router = useRouter();
  const [imagenes, setImagenes] = useState<string[]>([]);

  // valida si hay imagenes antes de continuar
  const handleContinuar = () => {
    if (imagenes.length === 0) {
      Alert.alert('atención', 'por favor subí al menos una imagen antes de continuar');
      return;
    }
    router.push('/(trabajo_matias)/modal_terminosycondiciones');
  };

  return (
    <ContainerView>
      <HeaderMainComponent titulo="Vender" onBackPress={() => router.back()} />

      <FlatList
        data={[]}
        ListHeaderComponent={
          <View style={styles.content}>
            <Text style={styles.title}>Subí las fotos de tu vehículo</Text>
            <Text style={styles.subtitle}>Podés agregar hasta 8 imágenes</Text>

            {/* componente que permite subir imagenes y las muestra */}
            <ImageUploader maxImages={8} onChange={setImagenes} />

            {/* botón reutilizable para continuar */}
            <View style={styles.buttonContainer}>
              <Button variant="contained" onPress={handleContinuar}>
                Continuar
              </Button>
            </View>
          </View>
        }
        keyExtractor={(_, index) => index.toString()}
        renderItem={null}
      />
    </ContainerView>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 20,
    paddingBottom: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#000',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 16,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
});
