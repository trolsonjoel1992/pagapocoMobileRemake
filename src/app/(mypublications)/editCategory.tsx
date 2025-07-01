import GenericModal from '@/src/components/atoms/GenericModal'
import HeaderMainComponent from '@/src/components/atoms/HeaderMainComponent'
import ImagesPath from '@/src/constants/ImagesPath'
import { router } from 'expo-router'
import { useState } from 'react'

import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale, verticalScale } from 'react-native-size-matters'

const EditCategory = () => {
  const [modalVisible, setModalVisible] = useState(false)

  const handleSubscribe = () => {
    setModalVisible(true)
  }

  const handleContinue = () => {
    setModalVisible(false)
    router.navigate('/(tabs)/myPublications')
  }

  const handleCancel = () => {
    setModalVisible(false)
  }

  return (
    <SafeAreaView style={styles.container}>
      <HeaderMainComponent
        titulo="Edicion"
        onBackPress={() => router.replace('/(tabs)/myPublications')}
      />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.subtitle}>
          Selecciona la categoria correcta para tu publicación
        </Text>
        <Text style={styles.subtitle}></Text>

        <View style={styles.categoryList}>
          <TouchableOpacity
            style={styles.card}
            onPress={handleSubscribe}
            /*             onPress={() => router.push('/(sell)/FormVehicle')}
             */
          >
            <Image source={ImagesPath.iconTruck} style={styles.icon} />
            <Text style={styles.cardText}>Camiones</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.card}
            onPress={handleSubscribe}
            /*             onPress={() => router.push('/(sell)/FormVehicle')}
             */
          >
            <Image source={ImagesPath.iconCarProfile} style={styles.icon} />
            <Text style={styles.cardText}>Camionetas</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.card}
            onPress={handleSubscribe}
            /*             onPress={() => router.push('/(sell)/FormVehicle')}
             */
          >
            <Image source={ImagesPath.iconCar} style={styles.icon} />
            <Text style={styles.cardText}>Autos</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.card}
            onPress={handleSubscribe}
            /*             onPress={() => router.push('/(sell)/FormMotorcycle')}
             */
          >
            <Image source={ImagesPath.iconMotorcycle} style={styles.icon} />
            <Text style={styles.cardText}>Motos</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.card}
            onPress={handleSubscribe}
            /*  onPress={() => router.push('/(sell)/FormGear')} */
          >
            <Image source={ImagesPath.iconGear} style={styles.icon} />
            <Text style={styles.cardText}>Piezas</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
      <TouchableOpacity
        style={styles.buttonBack}
        onPress={() => router.push('/(tabs)/myPublications')}
      >
        <Text style={styles.buttonText}>Volver</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  content: {
    paddingVertical: verticalScale(20),
    paddingHorizontal: moderateScale(20),
    alignItems: 'center',
  },
  title: {
    fontSize: moderateScale(28),
    fontWeight: 'bold',
    marginBottom: verticalScale(10),
  },
  subtitle: {
    fontSize: moderateScale(18),
    fontWeight: '500',
    marginBottom: verticalScale(5),
    textAlign: 'center',
  },
  categoryList: {
    width: '100%',
  },
  card: {
    backgroundColor: '#f1e9f9',
    flexDirection: 'row',
    alignItems: 'center',
    padding: moderateScale(20),
    borderRadius: 20,
    marginBottom: verticalScale(18),
  },
  icon: {
    marginRight: moderateScale(16),
  },
  cardText: {
    fontSize: moderateScale(24),
    fontWeight: '600',
    paddingLeft: moderateScale(10),
  },
  buttonBack: {
    width: moderateScale(170),
    height: moderateScale(55),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(20),
    marginBottom: moderateScale(20),
    backgroundColor: '#A230C7',
  },
  buttonText: {
    fontSize: moderateScale(16),
    color: 'white',
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

export default EditCategory
