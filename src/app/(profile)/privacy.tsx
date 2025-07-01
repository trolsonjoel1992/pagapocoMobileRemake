import HeaderMainComponent from '@/src/components/atoms/HeaderMainComponent'
import { Color } from '@/src/constants/colors'
import ImagesPath from '@/src/constants/ImagesPath'
import React, { useState } from 'react'
import {
  Modal,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale } from 'react-native-size-matters'
import Icon from 'react-native-vector-icons/MaterialIcons'

const PrivacyScreen = ({}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const [isModalVisible, setIsModalVisible] = useState(false)
  const handleModal = () => {
    setIsModalVisible(true)
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Color.primary} barStyle="light-content" />
      {/* Header */}
      <HeaderMainComponent titulo="Opciones de privacidad" />
      {/* Cambiar nombre de usuario */}
      <View style={styles.body}>
        <Text style={styles.label}>Cambiar nombre de usuario</Text>
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            placeholder="Nuevo usuario"
            placeholderTextColor="#666"
            value={username}
            onChangeText={setUsername}
          />
          <Icon name="edit" size={20} color="#555" />
        </View>

        {/* Cambiar contraseña */}
        <Text style={styles.label}>Cambiar contraseña</Text>
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            placeholder="Nueva contraseña"
            placeholderTextColor="#666"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <Icon name="edit" size={20} color="#555" />
        </View>
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            placeholder="Repetir contraseña"
            placeholderTextColor="#666"
            secureTextEntry
            value={repeatPassword}
            onChangeText={setRepeatPassword}
          />
          <Icon name="edit" size={20} color="#555" />
        </View>

        {/* Cambiar correo electrónico */}
        <Text style={styles.label}>Cambiar correo electrónico</Text>
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            placeholder="Nuevo correo"
            placeholderTextColor="#666"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <Icon name="edit" size={20} color="#555" />
        </View>

        {/* Cambiar teléfono */}
        <Text style={styles.label}>Cambiar teléfono</Text>
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            placeholder="Nuevo telefono"
            placeholderTextColor="#666"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />
          <Icon name="edit" size={20} color="#555" />
        </View>

        {/* Botón guardar */}
        <TouchableOpacity
          style={styles.saveButton}
          onPress={handleModal}
        >
          <Text style={styles.saveButtonText}>Guardar cambios</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image
              source={ImagesPath.iconCheck}
              style={{ width: moderateScale(110), height: moderateScale(110) }}
              resizeMode="contain"
            />

            <Text style={styles.modalTitle}>¡Perfecto!</Text>
            <Text style={styles.modalText}>
              Guardaste tus cambios
            </Text>
            {/* <Text style={styles.modalText}>
              Ahora podes disfrutar de nuestra App.
            </Text> */}

            {/* Botón del modal */}
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => {
                setIsModalVisible(false)
              }}
            >
              <Text style={styles.modalButtonText}>Continuar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  )
}

export default PrivacyScreen

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
  label: {
    fontSize: 15,
    marginBottom: 6,
    paddingHorizontal: 15,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1e7f7',
    borderRadius: 15,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 12,
    fontSize: 15,
    color: '#000',
  },
  saveButton: {
    backgroundColor: '#9C27B0',
    paddingVertical: 15,
    borderRadius: 25,
    marginTop: 25,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  body: {
    flex: 1,
    padding: 20,
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
    borderRadius: 10,
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
})
