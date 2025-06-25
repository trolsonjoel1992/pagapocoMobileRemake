import { useRouter } from 'expo-router'
import React from 'react'
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

const FinalModal = ({ isModalVisible }: { isModalVisible: boolean }) => {
  const router = useRouter()

  return (
    <Modal
      animationType="fade"
      transparent
      visible={isModalVisible}
      onRequestClose={() =>
        router.push('/srcapp(trabajo_matias)\notificaciones.tsx')
      }
    >
      {/* fondo oscuro semitransparente */}
      <View style={styles.backdrop}>
        {/* contenedor del modal */}
        <View style={styles.modalView}>
          {/* imagen de confirmación */}
          <Image
            source={require('@/src/assets/images/modalVariants/modalConfirm.png')}
            style={styles.image}
            resizeMode="contain"
          />

          {/* título */}
          <Text style={styles.title}>¡Muy bien!</Text>

          {/* texto de confirmación */}
          <Text style={styles.text}>
            Has publicado tu venta con éxito. Pronto recibirás contacto de los
            usuarios. ¡Éxitos en tu venta!
          </Text>

          {/* botón de cierre */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.replace('/(tabs)/home')}
          >
            <Text style={styles.buttonText}>Continuar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

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
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
    color: '#000',
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
})

export default FinalModal
