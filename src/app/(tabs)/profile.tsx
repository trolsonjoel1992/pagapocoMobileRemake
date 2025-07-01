import { Color } from '@/src/constants/colors'
import IconsPath from '@/src/constants/IconsPath'
import ImagesPath from '@/src/constants/ImagesPath'
import { useApp } from '@/src/contexts/AppContext'
import { router } from 'expo-router'
import { useState } from 'react'
import {
  Image,
  Modal,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale } from 'react-native-size-matters'

const Profile = () => {
  // const { logout } = useAuth()
  const { logout } = useApp()

  const [isModalDeleteVisible, setIsModalDeleteVisible] = useState(false)

  const handleModalDelete = () => {
    setIsModalDeleteVisible(true)
  }

  const [isModalVisible, setIsModalVisible] = useState(false)

  const handleModal = () => {
    setIsModalVisible(true)
  }

  const cerrarSesion = () => {
    router.replace('/splash')
    logout()
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Color.primary} barStyle="light-content" />
      <ScrollView>
        <View style={styles.userInfo}>
          <Image source={ImagesPath.userimage} />
          <Text style={styles.username}>Un usuario</Text>
        </View>

        {/* Opciones */}
        <TouchableOpacity
          style={styles.option}
          onPress={() => router.push('/(profile)/information')}
        >
          <Image source={IconsPath.info} />
          <Text style={styles.optionLabel}>Información de la cuenta</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.option}
          onPress={() => router.push('/(profile)/config')}
        >
          <Image source={IconsPath.setting} />
          <Text style={styles.optionLabel}>Configuración</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.option}
          onPress={() => router.push('/(profile)/privacy')}
        >
          <Image source={IconsPath.private} />
          <Text style={styles.optionLabel}>Privacidad</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.option}
          onPress={() => router.push('/(profile)/photo')}
        >
          <Image source={IconsPath.profileIm} />
          <Text style={styles.optionLabel}>Foto de perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} onPress={handleModalDelete}>
          <Image source={IconsPath.drop} />
          <Text style={styles.optionLabel}>Eliminar cuenta</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} onPress={handleModal}>
          <Image source={IconsPath.close} />
          <Text style={styles.optionLabel}>Cerrar sesión</Text>
        </TouchableOpacity>
      </ScrollView>

      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image
              source={ImagesPath.iconCloseAccount}
              style={{ width: moderateScale(110), height: moderateScale(110) }}
              resizeMode="contain"
            />

            <Text style={styles.modalTitle}>Cerrar sesión</Text>
            <Text style={styles.modalText}>
              ¡Estás por cerrar la sesión actual!
            </Text>
            {/* <Text style={styles.modalText}>
              Ahora podes disfrutar de nuestra App.
            </Text> */}

            {/* Botón del modal */}
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => {
                  setIsModalVisible(false)
                  router.push('/(auth)/(login)/FormLogin') // navega hacia la pantalla principal
                }}
              >
                <Text style={styles.modalButtonText}>Entendido</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.modalButton2}
                onPress={() => {
                  setIsModalVisible(false)
                }}
              >
                <Text style={styles.modalButtonText2}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      //Este es el modal para borrar la cuenta
      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalDeleteVisible}
        onRequestClose={() => setIsModalDeleteVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image
              source={ImagesPath.iconDeleteAccount}
              style={{ width: moderateScale(110), height: moderateScale(110) }}
              resizeMode="contain"
            />

            <Text style={styles.modalTitle}>Borrar Cuenta</Text>
            <Text style={styles.modalText}>
              ¡¡¡Estás a punto de eliminar tu cuenta¡¡¡
            </Text>
            {/* <Text style={styles.modalText}>
              Ahora podes disfrutar de nuestra App.
            </Text> */}

            {/* Botón del modal */}
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => {
                  setIsModalDeleteVisible(false)
                  router.push('/(auth)/(login)/FormLogin') // navega hacia la pantalla principal
                }}
              >
                <Text style={styles.modalButtonText}>Entendido</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.modalButton2}
                onPress={() => {
                  setIsModalDeleteVisible(false)
                }}
              >
                <Text style={styles.modalButtonText2}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  // Estilos para el modal
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  //
  userInfo: {
    width: moderateScale(360),
    height: moderateScale(150),
    marginTop: moderateScale(35),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ECE6F0',
    borderRadius: moderateScale(20),
    paddingHorizontal: moderateScale(20),
  },
  username: {
    marginLeft: moderateScale(20),
    fontSize: 24,
    fontWeight: '500',
  },
  option: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: moderateScale(35),
    marginLeft: moderateScale(40),
  },
  optionLabel: {
    marginLeft: moderateScale(20),
    fontWeight: '500',
    fontSize: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '80%',
  },
  modalTitle: {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  modalText: {
    fontSize: moderateScale(16),
    marginBottom: 10,
    textAlign: 'center',
  },
  modalButton: {
    backgroundColor: '#A230C7',
    borderRadius: 20,
    padding: 12,
    marginTop: 15,
    width: '100%',
    alignItems: 'center',
  },
  modalButton2: {
    backgroundColor: '#ECE6F0',
    borderRadius: 20,
    padding: 12,
    marginTop: 15,
    width: '100%',
    alignItems: 'center',
  },
  modalButtonText: {
    color: 'white',
    fontSize: moderateScale(16),
    fontWeight: 'bold',
  },
  modalButtonText2: {
    color: 'black',
    fontSize: moderateScale(16),
    fontWeight: 'bold',
  },
  modalButtonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
  },
})

export default Profile
