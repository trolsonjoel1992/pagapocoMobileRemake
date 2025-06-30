import HeaderMainComponent from '@/src/components/atoms/HeaderMainComponent'
import { Color } from '@/src/constants/colors'
import React from 'react'
import {
  Alert,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/MaterialIcons'

const ProfilePhotoScreen = ({}) => {
  const takePhoto = () => {
    Alert.alert('Tomar foto', 'Función de cámara no implementada aún')
  }

  const uploadPhoto = () => {
    Alert.alert('Subir foto', 'Función de galería no implementada aún')
  }

  const confirmPhoto = () => {
    Alert.alert('Foto de perfil', 'Foto confirmada')
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Color.primary} barStyle="light-content" />
      {/* Header */}
      <HeaderMainComponent titulo="Foto de perfil" />

      {/* Tomar foto */}
      <TouchableOpacity style={styles.option} onPress={takePhoto}>
        <Text style={styles.optionText}>Tomate una foto</Text>
        <Icon name="photo-camera" size={36} color="#444" />
      </TouchableOpacity>

      {/* Subir foto */}
      <TouchableOpacity style={styles.option} onPress={uploadPhoto}>
        <Text style={styles.optionText}>Subir una foto</Text>
        <Icon name="image" size={36} color="#444" />
      </TouchableOpacity>

      {/* Botón confirmar */}
      <TouchableOpacity style={styles.button} onPress={confirmPhoto}>
        <Text style={styles.buttonText}>Confirmar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default ProfilePhotoScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#9C27B0',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginHorizontal: -20,
    marginBottom: 30,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  option: {
    backgroundColor: '#f1e7f7',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#999',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  optionText: {
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#9C27B0',
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
})
