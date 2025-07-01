import GenericModal from '@/src/components/atoms/GenericModal'
import HeaderMainComponent from '@/src/components/atoms/HeaderMainComponent'
import IconsPath from '@/src/constants/IconsPath'
import ImagesPath from '@/src/constants/ImagesPath'
import { useApp } from '@/src/contexts/AppContext'
import { useCreatePublication } from '@/src/contexts/CreatePublicationContext'
import { router } from 'expo-router'
import React, { useState } from 'react'
import {
  Image,
  KeyboardAvoidingView,
  Modal,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { moderateScale } from 'react-native-size-matters'

const CloseSale = () => {
  const { publicationData, setPublicationData } = useCreatePublication()
  const { createPublication, currentUser } = useApp()
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
    if (title === '' || price === '' || city === '') {
      setShowError(true)
    } else {
      setPublicationData({
        ...publicationData,
        title,
        price: parseFloat(price),
        city,
      })
      createPublication({
        ...publicationData,
        title,
        price: parseInt(price),
        city,
        user_id: currentUser.id,
      })
      setModalVisible(true)
    }
  }

  const handleModalContinue = () => {
    setModalVisible(false)
    router.push('/(tabs)/home')
  }

  const isButtonDisabled = title === '' || price === '' || city === ''

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
          <HeaderMainComponent
            titulo="Vender"
            onBackPress={() => router.back()}
          />

          <Text style={styles.title}>Modificar precio y ubicación</Text>

          <View style={styles.imageContainer}>
            <Image
              source={ImagesPath.priceImage}
              style={styles.priceImage}
              resizeMode="contain"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputTitle}>
              Modifica el titulo de la publicación
            </Text>
            <View style={styles.inputBox}>
              <Image source={IconsPath.titleIcon} />
              <TextInput
                placeholder="Ingresa el titulo"
                placeholderTextColor="#9A9292"
                style={styles.input}
                value={title}
                onChangeText={handleTitleChange}
                returnKeyType="next"
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
                keyboardType="numeric"
                returnKeyType="next"
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
                returnKeyType="done"
              />
              <Image source={ImagesPath.iconNotePencil} />
            </View>
          </View>

          <View style={styles.buttonContainer}>
            {showError && (
              <Text style={styles.errorText}>
                Todos los campos son obligatorios
              </Text>
            )}
            <TouchableOpacity
              style={[
                styles.button,
                isButtonDisabled ? styles.buttonDisabled : styles.buttonEnabled,
              ]}
              onPress={handleFinalize}
              activeOpacity={0.7}
              disabled={isButtonDisabled}
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
        </ScrollView>
      </KeyboardAvoidingView>

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
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  priceImage: {
    width: moderateScale(200),
    height: moderateScale(150),
  },
  inputTitle: {
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    marginBottom: 5,
    marginLeft: 10,
    color: '#000',
  },
  inputContainer: {
    gap: 15,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  inputBox: {
    width: '100%',
    height: moderateScale(50),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ECE6F0',
    borderRadius: 20,
    paddingHorizontal: 15,
  },
  input: {
    flex: 1,
    color: '#000',
    fontSize: moderateScale(16),
    marginHorizontal: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
    fontSize: moderateScale(14),
  },
  buttonText: {
    fontSize: moderateScale(18),
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
    marginTop: 10,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
})

export default CloseSale
