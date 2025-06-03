import GenericModal from '@/src//components/atoms/GenericModal'
import HeaderMainComponent from '@/src/components/atoms/HeaderMainComponent'
import IconsPath from '@/src/constants/IconsPath'
import ImagesPath from '@/src/constants/ImagesPath'
import { router } from 'expo-router'
import React, { useState } from 'react'
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { moderateScale, verticalScale } from 'react-native-size-matters'

const categories = [
  { label: 'Exposición VIP' },
  { label: 'Hasta 8 fotos' },
  { label: 'Duracion de 90 dias' },
  { label: 'Republicacion automatica' },
] as const

const Premium = () => {
  const [modalVisible, setModalVisible] = useState(false)

  const handleSubscribe = () => {
    setModalVisible(true)
  }

  const handleContinue = () => {
    setModalVisible(false)
    router.navigate('/(tabs)/(myPublications)/myPublications')
  }

  const handleCancel = () => {
    setModalVisible(false)
  }

  return (
    <View style={styles.container}>
      <HeaderMainComponent titulo="Premium" onBackPress={() => router.back()} />
      <Text style={styles.title}>Suscribí tu publicación a{'\n'}¡Premium!</Text>

      <View style={styles.body}>
        <View style={styles.bodyStar}>
          <Image source={ImagesPath.imageStarP} style={styles.starImage} />
        </View>
        <Text style={styles.title}>Beneficios</Text>
        <View style={styles.bodyContainer}>
          {categories.map((item, index) => (
            <View
              key={index}
              style={{ flexDirection: 'row', alignItems: 'center' }}
            >
              <Image source={IconsPath.iconBullet} />
              <Text style={styles.bodyText}>{item.label}</Text>
            </View>
          ))}
          <Text style={styles.titleB}>$3.000</Text>
          <Text style={styles.title}>Cargo por publicación</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.buttonSusc} onPress={handleSubscribe}>
        <Text style={styles.buttonText}>Suscribir</Text>
      </TouchableOpacity>

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
              '¡Suscripción exitosa!',
              'Ahora tu publicación es Premium.',
              'Disfruta de todos los beneficios.',
            ]}
            showCancelButton={false}
            onContinue={handleContinue}
            onCancel={handleCancel}
            continueButtonText="Aceptar"
          />
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: moderateScale(24),
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: verticalScale(10),
  },
  body: {
    width: moderateScale(330),
    height: moderateScale(450),
    borderWidth: 1,
    borderRadius: moderateScale(20),
    backgroundColor: '#ECE6F0',
    borderColor: '#A230C7',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  bodyStar: {
    width: moderateScale(330),
    height: moderateScale(170),
    borderWidth: 2,
    borderRadius: moderateScale(20),
    backgroundColor: '#ECE6F0',
    borderColor: '#A230C7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  starImage: {
    width: moderateScale(70),
    height: moderateScale(70),
    resizeMode: 'contain',
  },
  bodyContainer: {
    gap: 10,
  },
  bodyText: {
    fontSize: moderateScale(16),
    marginLeft: moderateScale(50),
  },
  titleB: {
    fontSize: moderateScale(30),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonSusc: {
    width: 170,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(20),
    marginBottom: moderateScale(20),
    backgroundColor: '#A230C7',
  },
  buttonText: {
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
})

export default Premium
