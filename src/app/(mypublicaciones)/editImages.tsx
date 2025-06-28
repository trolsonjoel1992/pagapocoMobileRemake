import GenericModal from '@/src/components/atoms/GenericModal'
import HeaderMainComponent from '@/src/components/atoms/HeaderMainComponent'
import IconsPath from '@/src/constants/IconsPath'
import ImagesPath from '@/src/constants/ImagesPath'
import { router } from 'expo-router'
import React, { useState } from 'react'
import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { moderateScale, verticalScale } from 'react-native-size-matters'

const EditImages = () => {
  const [showContainers, setShowContainers] = useState(false)
  const [containerCount, setContainerCount] = useState(3)
  const [imageType, setImageType] = useState<'FreS' | 'PreS'>('FreS')
  const [actionMessage, setActionMessage] = useState<string | null>(null)
  const [showWarning, setShowWarning] = useState(false)
  const [isFinalizeEnabled, setIsFinalizeEnabled] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)

  const handleContainerPress = (index: number) => {
    if (containerCount === 3 && index === 0) {
      setContainerCount(4)
      setShowWarning(false)
      setIsFinalizeEnabled(false)
    } else if (containerCount === 4 && index === 3) {
      setContainerCount(7)
      setImageType('PreS')
      setShowWarning(false)
      setIsFinalizeEnabled(false)
    } else if (containerCount === 7 && index === 4) {
      setContainerCount(8)
      setShowWarning(false)
      setIsFinalizeEnabled(false)
    } else if (containerCount === 8 && index === 7) {
      setContainerCount(3)
      setImageType('FreS')
      setShowWarning(false)
      setIsFinalizeEnabled(false)
    }
  }

  const toggleContainers = () => {
    setShowContainers(!showContainers)
    setActionMessage(null)
  }

  const handleLoadPress = () => {
    setActionMessage('Cargar imagenes desde dispositivo')
    setShowContainers(true)
    setIsFinalizeEnabled(true)
  }

  const handleCapturePress = () => {
    setActionMessage('Tomar fotos desde la cámara')
    setShowContainers(true)
    setIsFinalizeEnabled(true)
  }

  const handleDeletePress = () => {
    if (containerCount === 4 || containerCount === 8) {
      setShowWarning(true)
    } else {
      setActionMessage('Imagenes eliminadas')
      setShowContainers(true)
      setIsFinalizeEnabled(true)
    }
  }

  const handleFinalizePress = () => {
    setModalVisible(true)
  }

  const handleModalContinue = () => {
    setModalVisible(false)
    router.navigate('/(tabs)/(myPublications)/myPublications')
  }

  const renderContainers = () => {
    if (actionMessage) {
      return (
        <View style={styles.messageContainer}>
          <Text style={styles.messageText}>{actionMessage}</Text>
        </View>
      )
    }

    const containers = []
    const imageSource =
      imageType === 'FreS' ? ImagesPath.imageFreS : ImagesPath.imagePreS

    for (let i = 0; i < containerCount; i++) {
      containers.push(
        <TouchableOpacity
          key={i}
          style={styles.square}
          onPress={() => handleContainerPress(i)}
        >
          <Image source={imageSource} />
        </TouchableOpacity>
      )
    }

    return containers
  }

  const getDeleteIcon = () => {
    if (containerCount === 4 || containerCount === 8) {
      return IconsPath.nDeleteIcon
    }
    return IconsPath.yDeleteIcon
  }

  const getButtonStyle = () => {
    return isFinalizeEnabled ? styles.buttonEnabled : styles.buttonDisabled
  }

  const getButtonTextStyle = () => {
    return isFinalizeEnabled
      ? styles.buttonTextEnabled
      : styles.buttonTextDisabled
  }

  return (
    <View style={styles.container}>
      <HeaderMainComponent titulo="Fotos" onBackPress={() => router.back()} />
      <TouchableOpacity onPress={toggleContainers}>
        <Text style={styles.titulo}>Imagenes seleccionadas</Text>
      </TouchableOpacity>
      {showWarning && (
        <Text style={styles.warningText}>
          No está permitido eliminar todas las imagenes
        </Text>
      )}
      <View style={styles.box}>
        <Text style={styles.uploadText}>Edita o elimina las fotos</Text>
        <View style={styles.iconBox}>
          <TouchableOpacity style={styles.miniBox} onPress={handleLoadPress}>
            <Image source={IconsPath.loadIcon} />
            <Text>Cargar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.miniBox} onPress={handleCapturePress}>
            <Image source={IconsPath.cameraicon} />
            <Text>Capturar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.miniBox} onPress={handleDeletePress}>
            <Image source={getDeleteIcon()} />
            <Text>Eliminar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bodyContainer}>
        {showContainers && (
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <View style={styles.gridContainer}>{renderContainers()}</View>
          </ScrollView>
        )}
      </View>

      <View style={styles.fixedButtonContainer}>
        <TouchableOpacity
          style={getButtonStyle()}
          disabled={!isFinalizeEnabled}
          onPress={handleFinalizePress}
        >
          <Text style={getButtonTextStyle()}>Finalizar</Text>
        </TouchableOpacity>
      </View>

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
              '¡Proceso completado con éxito!',
              'Tus imágenes han sido guardadas correctamente.',
            ]}
            showCancelButton={false}
            onContinue={handleModalContinue}
            onCancel={() => setModalVisible(false)}
            continueButtonText="Continuar"
          />
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: moderateScale(30),
    marginBottom: moderateScale(20),
  },
  warningText: {
    color: 'red',
    marginBottom: moderateScale(10),
  },
  box: {
    width: moderateScale(360),
    height: moderateScale(150),
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: 'black',
    borderRadius: moderateScale(20),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: '#f1e9f9',
  },
  iconBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: moderateScale(15),
    columnGap: moderateScale(35),
  },
  uploadText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
  },
  miniBox: {
    alignItems: 'center',
  },
  bodyContainer: {
    width: '100%',
    flex: 1,
    backgroundColor: '#fff',
    padding: moderateScale(20),
    marginBottom: verticalScale(75),
  },
  messageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  messageText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  scrollContent: {
    flexGrow: 1,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  square: {
    width: moderateScale(120),
    height: moderateScale(120),
    margin: moderateScale(20),
    backgroundColor: '#f1e9f9',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(20),
  },
  fixedButtonContainer: {
    position: 'absolute',
    bottom: verticalScale(25),
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonEnabled: {
    width: moderateScale(170),
    height: moderateScale(55),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(20),
    backgroundColor: '#A230C7',
  },
  buttonDisabled: {
    width: moderateScale(170),
    height: moderateScale(55),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(20),
    backgroundColor: 'rgba(162, 48, 199, 0.4)',
  },
  buttonTextEnabled: {
    fontSize: moderateScale(16),
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonTextDisabled: {
    fontSize: moderateScale(16),
    color: '#4C4C4C',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
})

export default EditImages
