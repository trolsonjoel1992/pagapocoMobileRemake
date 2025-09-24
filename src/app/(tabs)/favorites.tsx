import CardVisual from '@/src/components/atom/cards/myPublications/cardVisual';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function FavoritesScreen() {
  const [selectedPublicationId, setSelectedPublicationId] =
    useState<string>('');
  const [availablePublications, setAvailablePublications] = useState<any[]>([]);

  // Cargar las publicaciones reales al iniciar
  useEffect(() => {
    loadPublications();
  }, []);

  const loadPublications = async () => {
    try {
      const publicationsString = await AsyncStorage.getItem('publications');
      if (publicationsString) {
        const publications = JSON.parse(publicationsString);
        console.log('📋 Publicaciones encontradas:', publications.length);

        setAvailablePublications(publications);

        // Seleccionar la primera publicación por defecto
        if (publications.length > 0) {
          setSelectedPublicationId(publications[0].id);
        }
      }
    } catch (error) {
      console.error('Error cargando publicaciones:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.testSection}>
          <Text style={styles.testTitle}>Visualizador de Imágenes</Text>

          <View style={styles.buttonContainer}>
            {availablePublications.length > 0 ? (
              availablePublications.map((publication, index) => (
                <TouchableOpacity
                  key={publication.id}
                  style={[
                    styles.button,
                    selectedPublicationId === publication.id &&
                      styles.buttonActive,
                  ]}
                  onPress={() => setSelectedPublicationId(publication.id)}
                >
                  <Text
                    style={[
                      styles.buttonText,
                      selectedPublicationId === publication.id &&
                        styles.buttonTextActive,
                    ]}
                  >
                    {publication.title || `Publicación ${index + 1}`}
                  </Text>
                  <Text
                    style={[
                      styles.buttonSubText,
                      selectedPublicationId === publication.id &&
                        styles.buttonTextActive,
                    ]}
                  >
                    ID: {publication.id}
                  </Text>
                </TouchableOpacity>
              ))
            ) : (
              <View style={styles.noPublicationsContainer}>
                <Text style={styles.noPublicationsText}>
                  No hay publicaciones disponibles
                </Text>
                <TouchableOpacity
                  style={[styles.button, { backgroundColor: '#ff9800' }]}
                  onPress={loadPublications}
                >
                  <Text style={[styles.buttonText, { color: '#fff' }]}>
                    🔄 Recargar
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>

          {selectedPublicationId ? (
            <View style={styles.visualizerContainer}>
              <CardVisual publicationId={selectedPublicationId} />
            </View>
          ) : (
            <View style={styles.noSelectionContainer}>
              <Text style={styles.noSelectionText}>
                Selecciona una publicación para ver sus imágenes
              </Text>
            </View>
          )}

          {/* Información de debug */}
          <View style={styles.debugInfo}>
            <Text style={styles.debugText}>
              Publicaciones encontradas: {availablePublications.length}
            </Text>
            <Text style={styles.debugText}>
              ID seleccionado: {selectedPublicationId || 'Ninguno'}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    flexGrow: 1,
  },
  testSection: {
    padding: 20,
    alignItems: 'center',
  },
  testTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
    color: '#333333',
  },
  buttonContainer: {
    width: '100%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#F0F0F0',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 2,
    borderColor: '#E0E0E0',
  },
  buttonActive: {
    backgroundColor: '#007AFF',
    borderColor: '#0056CC',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333333',
    textAlign: 'center',
  },
  buttonSubText: {
    fontSize: 10,
    color: '#666666',
    textAlign: 'center',
    marginTop: 2,
  },
  buttonTextActive: {
    color: '#FFFFFF',
  },
  visualizerContainer: {
    width: '100%',
    marginBottom: 20,
  },
  noPublicationsContainer: {
    alignItems: 'center',
    padding: 20,
  },
  noPublicationsText: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 10,
    textAlign: 'center',
  },
  noSelectionContainer: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    marginBottom: 20,
  },
  noSelectionText: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
  },
  debugInfo: {
    backgroundColor: '#F8F8F8',
    padding: 12,
    borderRadius: 8,
    width: '100%',
  },
  debugText: {
    fontSize: 12,
    color: '#666666',
    marginBottom: 4,
  },
});
