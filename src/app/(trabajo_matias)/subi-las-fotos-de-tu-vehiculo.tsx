// archivo: src/app/fotos.tsx
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Fotos = () => {
  const router = useRouter();
  const [imagenes, setImagenes] = useState([null, null, null, null]);

  const handleVolver = () => {
    router.back();
  };

  const handleSubirFoto = () => {
    alert('Subir foto...');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleVolver}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Vender</Text>
      </View>

      {/* Instrucciones */}
      <Text style={styles.titulo}>Subí las fotos de tu vehículo</Text>
      <Text style={styles.subtitulo}>Podés agregar 4 imágenes:</Text>

      {/* Subir imágenes */}
      <TouchableOpacity style={styles.uploadBox} onPress={handleSubirFoto}>
        <Ionicons name="cloud-upload-outline" size={32} color="#333" />
        <Text style={styles.uploadText}>Subí tus foto aquí</Text>
        <Text style={styles.formatText}>Archivo Jpg, Jpeg y Png</Text>
        <Ionicons name="camera-outline" size={32} color="#333" style={{ marginTop: 10 }} />
      </TouchableOpacity>

      {/* Vista previa de imágenes */}
      <View style={styles.previewContainer}>
        {imagenes.map((img, i) => (
          <View
            key={i}
            style={{
              width: 100,
              height: 100,
              borderRadius: 10,
              backgroundColor: '#f2ecf8',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 20,
              overflow: 'hidden',
            }}
          >
            <Ionicons name="image-outline" size={60} color="#333" />
          </View>
        ))}
      </View>

      {/* Botón Continuar */}
      <TouchableOpacity
        style={styles.botonContinuar}
        onPress={() => router.push("/(trabajo_matias)/modal_terminosycondiciones")}
      >
        <Text style={styles.botonTexto}>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Fotos;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#B833E1',
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 15,
    gap: 15,
  },
  headerText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  subtitulo: {
    fontSize: 16,
    marginTop: 5,
    color: '#555',
  },
  uploadBox: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#aaa',
    borderRadius: 15,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: '#f5f0fa',
  },
  uploadText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  formatText: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  previewContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
    justifyContent: 'space-between',
    marginTop: 30,
  },
  botonContinuar: {
    marginTop: 40,
    backgroundColor: '#B833E1',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  botonTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

