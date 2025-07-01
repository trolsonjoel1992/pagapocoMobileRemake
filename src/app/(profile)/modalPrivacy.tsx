import React from 'react'
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

type LogoutWarningModalProps = {
  visible: boolean
  onCancel: () => void
  onConfirm: () => void
  onClose: () => void
}

const SuccessModal: React.FC<LogoutWarningModalProps> = ({
  visible,
  onClose,
}) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Image
            source={require('@/src/assets/images/imageProfile/SealCheck.png')} //Ruta de la imagen
            style={styles.icon}
          />
          <Text style={styles.title}>¡Perfecto!</Text>
          <Text style={styles.message}>Guardaste tus cambios.</Text>

          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>Continuar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

export default SuccessModal

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', // Fondo oscuro transparente
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: 280,
    backgroundColor: '#f6f0ff',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
  },
  icon: {
    width: 60,
    height: 60,
    marginBottom: 15,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  message: {
    fontSize: 16,
    color: '#444',
    marginVertical: 10,
    textAlign: 'center',
  },
  button: {
    marginTop: 10,
    backgroundColor: '#a331d6',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
})
