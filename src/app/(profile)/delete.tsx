import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DeleteAccountModal = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* Botón para abrir el modal */}
      <TouchableOpacity
        style={styles.openButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.openButtonText}>Eliminar cuenta</Text>
      </TouchableOpacity>

      {/* Modal */}
      <Modal
        transparent
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            {/* Icono */}
            <Icon name="alert-decagram" size={60} color="red" />

            {/* Texto de advertencia */}
            <Text style={styles.modalText}>
              ¡¡¡Estas a punto de eliminar tu cuenta¡¡¡
            </Text>

            {/* Botones */}
            <Pressable
              style={styles.confirmButton}
              onPress={() => {
                setModalVisible(false);
                // Aquí puedes agregar lógica de eliminación
              }}
            >
              <Text style={styles.confirmButtonText}>Entendido</Text>
            </Pressable>

            <Pressable
              style={styles.cancelButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.cancelButtonText}>Cancelar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default DeleteAccountModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  openButton: {
    backgroundColor: '#9C27B0',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  openButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)', // Fondo oscuro
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#F7EDF9',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    width: 280,
    elevation: 10,
  },
  modalText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  confirmButton: {
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 25,
    marginBottom: 10,
    elevation: 3,
  },
  confirmButtonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: '#9C27B0',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 25,
  },
  cancelButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
