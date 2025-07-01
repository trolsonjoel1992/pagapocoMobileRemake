import { useApp } from '@/src/contexts/AppContext';
import { router } from 'expo-router';
import React from 'react';
import { Modal, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

type LogoutWarningModalProps = {
  visible: boolean;
  onCancel: () => void;
  onConfirm: () => void;
};
/* 
const { logout } = useApp()

const cerrarSesion = () => {
    router.replace('/splash')
    logout()
  }
   */
const LogoutWarningModal: React.FC<LogoutWarningModalProps> = ({ visible, onCancel, onConfirm }) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Image
            source={require('@/src/assets/images/imageProfile/SealWarning.png')} // Usá tu ícono de advertencia amarillo
            style={styles.icon}
          />
          <Text style={styles.title}>¡Estás por cerrar la sesión actual!</Text>

          <View style={styles.buttonGroup}>
            <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
              <Text style={styles.cancelText}>Cancelar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.confirmButton} onPress={onConfirm}>
              <Text style={styles.confirmText}>Entendido</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default LogoutWarningModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', // Fondo semitransparente
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: 280,
    backgroundColor: '#f6f0ff',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  icon: {
    width: 60,
    height: 60,
    marginBottom: 15,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonGroup: {
    width: '100%',
    gap: 10,
  },
  cancelButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#888',
    marginBottom: 10,
    alignItems: 'center',
  },
  cancelText: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 16,
  },
  confirmButton: {
    backgroundColor: '#a331d6',
    paddingVertical: 10,
    borderRadius: 30,
    alignItems: 'center',
  },
  confirmText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
