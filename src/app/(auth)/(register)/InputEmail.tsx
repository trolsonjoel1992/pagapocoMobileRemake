import HeaderMainComponent from '@/src/components/atoms/HeaderMainComponent'
import { router } from 'expo-router'
import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale, verticalScale } from 'react-native-size-matters'

const InputEmail = () => {
  const [email, setEmail] = useState('')

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <HeaderMainComponent titulo="Cuenta" />

      {/* Body */}
      <View style={styles.body}>
        <Text style={styles.textTitle}>Agrega tu email</Text>

        <TextInput
          style={styles.inputContainer}
          onChangeText={setEmail}
          value={email}
          placeholder="example@gmail.com"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {/* Uso de componente */}
        {/* <View style={{ width: moderateScale(150) }}>
          <BottomComponent titulo="Siguiente" />
        </View> */}
        <View style={{ width: moderateScale(150) }}>
          {/* Descarto uso de componentes - (solo de momento) */}
          <TouchableOpacity
            style={styles.buttomSiguienteContainer}
            onPress={() => router.push('/(auth)/(register)/InputPassword')}
          >
            <Text style={styles.buttomSiguienteText}>Siguiente</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}></View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  body: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingVertical: moderateScale(20),
    gap: verticalScale(30),
  },
  footer: {},
  textTitle: {
    color: 'black',
    fontSize: moderateScale(25),
    fontWeight: 'bold',
    marginBottom: moderateScale(20),
  },
  inputContainer: {
    width: '80%',
    padding: verticalScale(10),
    borderRadius: verticalScale(20),
    borderWidth: verticalScale(1),
    borderColor: 'gray',
    marginBottom: verticalScale(10),
  },
  // estilos de botones
  buttomSiguienteContainer: {
    backgroundColor: '#A230C7',
    width: '100%',
    paddingVertical: verticalScale(10),
    paddingHorizontal: verticalScale(10),
    borderRadius: moderateScale(20),
    alignItems: 'center',
  },
  buttomSiguienteText: {
    color: 'white',
    fontSize: moderateScale(13),
    fontWeight: 'bold',
  },
})

export default InputEmail
