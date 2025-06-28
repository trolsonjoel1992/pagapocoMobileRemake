import Button from '@/src/components/atoms/Button'
import { useRouter } from 'expo-router'
import React from 'react'
import { Image, Modal, StyleSheet, Text, View } from 'react-native'

type Props = {
  isModalVisible: boolean
  onClose?: () => void // opcional: por si se quiere cerrarlo manual
}

const WarningModal = ({ isModalVisible, onClose }: Props) => {
  const router = useRouter()

  const handleClose = () => {
    // controlar el cierre externo o por navegación
    if (onClose) {
      onClose()
    } else {
      router.push('/(sell)/closeSale')
    }
  }

  return (
    <Modal
      animationType="fade"
      transparent
      visible={isModalVisible}
      onRequestClose={handleClose}
    >
      <View style={styles.backdrop}>
        <View style={styles.modalView}>
          <Image
            source={require('@/src/assets/images/modalVariants/modalWarning.png')}
            style={styles.image}
            resizeMode="contain"
          />

          <Text style={styles.text}>
            Aceptá los términos y condiciones para continuar
          </Text>

          <Button variant="contained" onPress={handleClose}>
            Entendido
          </Button>
        </View>
      </View>
    </Modal>
  )
}

export default WarningModal

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
  text: {
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#000',
  },
})
