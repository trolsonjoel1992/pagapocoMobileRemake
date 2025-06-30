import { Color } from '@/src/constants/colors'
import IconsPath from '@/src/constants/IconsPath'
import ImagesPath from '@/src/constants/ImagesPath'
import { useApp } from '@/src/contexts/AppContext'
import { router } from 'expo-router'
import {
  Image,
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

        <TouchableOpacity
          style={styles.option}
          onPress={() => router.push('/(profile)/modalDelete')}
        >
          <Image source={IconsPath.drop} />
          <Text style={styles.optionLabel}>Eliminar cuenta</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.option} 
          onPress={() => router.push('/(profile)/modalCloseAcc')}>
          <Image source={IconsPath.close} />
          <Text style={styles.optionLabel}>Cerrar sesión</Text>
        </TouchableOpacity>
      </ScrollView>
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
})

export default Profile
