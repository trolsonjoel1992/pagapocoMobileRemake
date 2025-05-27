import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const WarningModal = ({ isModalVisible }) => {
  const router = useRouter();

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={() => router.push("/(trabajo_matias)/finalizar")}
    >
      <View style={styles.backdrop}>
        <View style={styles.modalView}>
          <View style={styles.iconContainer}>
            <Ionicons name="alert-circle" size={80} color="#FFD600" />
          </View>

          <Text style={styles.text}>
            Aceptá los términos y condiciones para continuar
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/(trabajo_matias)/finalizar")}
          >
            <Text style={styles.buttonText}>Entendido</Text>
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
  text: {
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#000',
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

export default WarningModal;

