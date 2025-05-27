import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

const FinalModal = ({ isModalVisible }) => {
  const router = useRouter();

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={() => router.push('/(tabs)/home')}
    >
      <View style={styles.backdrop}>
        <View style={styles.modalView}>
          <View style={styles.iconContainer}>
            <Ionicons name="checkmark-circle" size={80} color="#22C55E" />
          </View>

          <Text style={styles.title}>¡Muy bien!</Text>
          <Text style={styles.text}>
            Has publicado tu venta con éxito. Pronto recibirás contacto de los
            usuarios. ¡Éxitos en tu venta!
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push('/(tabs)/home')}
          >
            <Text style={styles.buttonText}>Continuar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: '#F4EBF8',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    width: '85%',
  },
  iconContainer: {
    marginBottom: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  button: {
    backgroundColor: '#A02CFA',
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default FinalModal;
