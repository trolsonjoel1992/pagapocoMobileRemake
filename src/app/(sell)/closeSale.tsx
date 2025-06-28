import GenericModal from '@/src/components/atoms/GenericModal'
import HeaderMainComponent from '@/src/components/atoms/HeaderMainComponent'
import IconsPath from '@/src/constants/IconsPath'
import ImagesPath from '@/src/constants/ImagesPath'
import { router } from 'expo-router'
import React, { useState } from 'react'
import {
  Image,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { moderateScale } from 'react-native-size-matters'

const CloseSale = () => {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [city, setCity] = useState('')
  const [showError, setShowError] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)

  const handleTitleChange = (text: string) => {
    setTitle(text)
    setShowError(false)
  }
  const handlePriceChange = (text: string) => {
    setPrice(text)
    setShowError(false)
  }

  const handleCityChange = (text: string) => {
    setCity(text)
    setShowError(false)
  }

  const handleFinalize = () => {
    if (price === '' && city === '') {
      setShowError(true)
    } else {
      setModalVisible(true) // Mostrar modal cuando los campos son válidos
    }
  }

  const handleModalContinue = () => {
    setModalVisible(false)
    // Redirigir solo después de aceptar el modal
    router.push('/(mypublications)/edit')
  }

  const isButtonDisabled = title === '' || price === '' || city === ''

  return (
    <SafeAreaView style={styles.container}>
      <HeaderMainComponent
        titulo="Precio y ciudad"
        onBackPress={() => router.push('/(mypublications)/edit')}
      />
      <Text style={styles.title}>Modificar precio y ubicación</Text>
      <View>
        <Image source={ImagesPath.priceImage} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>
          Modifica el titulo de la publicación
        </Text>
        <View style={styles.inputBox}>
          <Image source={IconsPath.titleIcon} />
          <TextInput
            placeholder="Ingresa el titulo "
            placeholderTextColor="#9A9292"
            style={styles.input}
            value={title}
            onChangeText={handleTitleChange}
          />
          <Image source={ImagesPath.iconNotePencil} />
        </View>
        <Text style={styles.inputTitle}>
          Modifica el precio de tu publicación
        </Text>
        <View style={styles.inputBox}>
          <Image source={IconsPath.priceIcon} />
          <TextInput
            placeholder="Ingresa el precio"
            placeholderTextColor="#9A9292"
            style={styles.input}
            value={price}
            onChangeText={handlePriceChange}
          />
          <Image source={ImagesPath.iconNotePencil} />
        </View>
        <Text style={styles.inputTitle}>
          Modifica la ciudad de la publicación
        </Text>
        <View style={styles.inputBox}>
          <Image source={IconsPath.cityIcon} />
          <TextInput
            placeholder="Ingresá tu ciudad"
            placeholderTextColor="#9A9292"
            style={styles.input}
            value={city}
            onChangeText={handleCityChange}
          />
          <Image source={ImagesPath.iconNotePencil} />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        {showError && (
          <Text style={styles.errorText}>
            Debe cambiar algún campo para finalizar
          </Text>
        )}
        <TouchableOpacity
          style={[
            styles.button,
            isButtonDisabled ? styles.buttonDisabled : styles.buttonEnabled,
          ]}
          onPress={handleFinalize}
          activeOpacity={0.7}
        >
          <Text
            style={[
              styles.buttonText,
              isButtonDisabled
                ? styles.buttonTextDisabled
                : styles.buttonTextEnabled,
            ]}
          >
            Finalizar
          </Text>
        </TouchableOpacity>
      </View>

      {/* Modal de confirmación */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <GenericModal
            imageSource={ImagesPath.modalConfirm}
            messages={[
              '¡Muy bien!',
              'Has realizado una publicación',
              '¡Exitos en tu venta!',
            ]}
            showCancelButton={false}
            onContinue={handleModalContinue}
            continueButtonText="Continuar"
          />
        </View>
      </Modal>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputTitle: {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
  },
  inputContainer: {
    gap: 15,
    marginBottom: 20,
  },
  inputBox: {
    width: moderateScale(310),
    height: moderateScale(50),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ECE6F0',
    borderRadius: 20,
    paddingHorizontal: 5,
  },
  input: {
    flex: 1,
    color: '#000',
    fontSize: 20,
    marginHorizontal: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonTextEnabled: {
    color: '#fff',
  },
  buttonTextDisabled: {
    color: '#484C52',
  },
  buttonEnabled: {
    backgroundColor: '#A230C7',
  },
  buttonDisabled: {
    backgroundColor: 'rgba(162, 48, 199, 0.4)',
  },
  button: {
    width: moderateScale(170),
    height: moderateScale(55),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(20),
    marginBottom: moderateScale(20),
  },
  buttonContainer: {
    alignItems: 'center',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
})

export default CloseSale
