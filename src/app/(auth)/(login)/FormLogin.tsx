import HeaderMainComponent from '@/src/components/atoms/HeaderMainComponent'
import ImagesPath from '@/src/constants/ImagesPath'
import { useApp } from '@/src/contexts/AppContext'
import { router } from 'expo-router'
import React, { useState } from 'react'
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale, verticalScale } from 'react-native-size-matters'

const FormLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // const { login, isLoading } = useAuth()
  const { login } = useApp()

  const handleLogin = async () => {
    const ok = await login(email, password)

    if (ok) {
      router.replace('/(tabs)/home')
    }
    // try {
    //   await login(email, password)
    //   router.replace('/(tabs)/home')
    // } catch (error) {
    //   let errorMessage = 'Error al iniciar sesión'

    //   // Verificar si es un Error estándar
    //   if (error instanceof Error) {
    //     errorMessage = error.message
    //   }
    //   // Verificar si es un objeto con propiedad message
    //   else if (
    //     typeof error === 'object' &&
    //     error !== null &&
    //     'message' in error
    //   ) {
    //     errorMessage = String(error.message)
    //   }

    //   Alert.alert('Error', errorMessage)
    // }
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* No hay header pero usamos el componente */}
      <HeaderMainComponent
        titulo="Inicio de sesión"
        onBackPress={() => router.back()} //router.push("/(tabs)/home")
      />

      {/* Body */}
      <View style={styles.body}>
        {/* Titulo */}
        <Text style={styles.textTitulo}>Bienvenido de nuevo</Text>

        {/* Logo */}
        <Image
          source={ImagesPath.logo}
          style={styles.logoPagaPoco}
          resizeMode="contain"
        />

        {/* Inputs */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          {/* <Text>Contraseña</Text> */}
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="Contraseña"
            secureTextEntry
          />
        </View>

        {/* Boton para acceder */}
        {/* <View style={styles.buttomAccederContainer}>
          <TouchableOpacity
            style={styles.buttomAcceder}
            // onPress={handleLogin} // abre modal
          >
            <Text style={styles.buttomAccederText}>Continuar</Text>
          </TouchableOpacity>
        </View> */}
        <TouchableOpacity
          style={styles.buttomAcceder}
          onPress={handleLogin}
          // disabled={isLoading}
        >
          <Text style={styles.buttomAccederText}>
            {/* {isLoading ? 'Cargando...' : 'Continuar'} */}
            Continuar
          </Text>
        </TouchableOpacity>

        {/* Texto para que se registre */}
        <View style={styles.textDePregunta}>
          <Text>¿No tienes una cuenta? </Text>
          <TouchableOpacity
            onPress={() => router.push('/(auth)/(register)/FormRegister')}
          >
            <Text style={styles.textLinks}>Registrate</Text>
          </TouchableOpacity>
        </View>

        {/* Separador */}
        <View style={styles.separatorContainer}>
          <View style={styles.separator} />
          <Text>O</Text>
          <View style={styles.separator} />
        </View>

        {/* Botones de otros inicios de sesion */}
        <View style={styles.buttomContainerOtrosLogin}>
          {/* Boton de google */}
          <View style={styles.buttomOtrosContainer}>
            <TouchableOpacity
              style={styles.buttomOtros}
              //onPress={() => router.push("/(auth)/google_login")}
            >
              <Image
                source={ImagesPath.iconGoogle}
                style={styles.iconGoogleStyle}
                resizeMode="contain"
              />

              {/* <AntDesign name="google" size={moderateScale(18)} color="black" /> */}

              <Text style={styles.buttomOtrosText}>Continuar con Google</Text>
            </TouchableOpacity>
          </View>

          {/* Boton de microsoft */}
          {/* <View style={styles.buttomOtrosContainer}>
            <TouchableOpacity
              style={styles.buttomOtros}
              //onPress={() => router.push("/(auth)/google_login")}
            >
              <Image
                source={ImagesPath.iconMicrosoft}
                style={styles.iconGoogleStyle}
                resizeMode="contain"
              />

              <Text style={styles.buttomOtrosText}>
                Continuar con Microsoft
              </Text>
            </TouchableOpacity>
          </View> */}

          <View style={styles.buttomOtrosContainer}>
            <TouchableOpacity
              style={styles.buttomOtros}
              //onPress={() => router.push("/(auth)/google_login")}
            >
              <Image
                source={ImagesPath.iconPhone}
                style={styles.iconGoogleStyle}
                resizeMode="contain"
              />

              {/* <Feather name="phone" size={moderateScale(18)} color="black" /> */}

              <Text style={styles.buttomOtrosText}>
                Continuar con el teléfono
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        {/* <Text>Footer</Text> */}
        <View style={styles.ButtomFooterContainer}>
          <TouchableOpacity>
            <Text style={styles.textLinks}>Términos de uso</Text>
          </TouchableOpacity>
          <View style={styles.separatorButtomFooter} />
          <TouchableOpacity>
            <Text style={styles.textLinks}>Política de privacidad</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  // estilos de la estructura
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
    //paddingVertical: verticalScale(20),
  },
  header: {
    height: moderateScale(40),
    width: '100%',
    //backgroundColor: "red",
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    height: moderateScale(600),
    width: '80%',
    //backgroundColor: "yellow",
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    height: moderateScale(80),
    width: '100%',
    //backgroundColor: "red",
    textAlign: 'center',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  // estilos del titulo
  textTitulo: {
    fontSize: 24,
    marginBottom: moderateScale(10),
    fontWeight: 'bold',
  },
  // estilo del logo
  logoPagaPoco: {
    width: moderateScale(120),
    height: moderateScale(120),
    marginBottom: verticalScale(20),
  },
  // estilos para los inputs
  inputContainer: {
    width: '100%',
    //backgroundColor: "green",
    gap: moderateScale(5),
  },
  input: {
    width: '100%',
    padding: verticalScale(10),
    borderRadius: verticalScale(20),
    borderWidth: verticalScale(1),
    borderColor: 'black',
    marginBottom: verticalScale(10),
  },
  // estilos del boton de Acceder
  buttomAccederContainer: {
    width: '100%', // moderateScale(150)
    //backgroundColor: "red",
    marginBottom: verticalScale(10),
  },
  buttomAcceder: {
    backgroundColor: '#A230C7',
    width: '100%',
    paddingVertical: verticalScale(10),
    paddingHorizontal: verticalScale(10),
    borderRadius: moderateScale(20),
    alignItems: 'center',
    //marginBottom: verticalScale(10),
  },
  buttomAccederText: {
    color: 'white',
    fontSize: moderateScale(13),
    fontWeight: 'bold',
  },
  // estilos del registro
  textDePregunta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: verticalScale(10),
  },
  textLinks: {
    color: 'blue',
    fontWeight: 'bold',
  },
  // estilos del separador
  separatorContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    //backgroundColor: "red",
    marginBottom: verticalScale(10),
  },
  separator: {
    width: moderateScale(135), // 46%
    height: moderateScale(1.5),
    backgroundColor: 'black',
    marginHorizontal: moderateScale(4),
  },
  // estilos de los demas inicios de sesion
  buttomContainerOtrosLogin: {
    width: '100%',
    //backgroundColor: "red",
    //marginBottom: verticalScale(10),
    gap: moderateScale(10),
  },
  // estilos boton google
  buttomOtrosContainer: {
    width: '100%',
    //backgroundColor: "green",
  },
  buttomOtros: {
    backgroundColor: '#fff',
    width: '100%',
    paddingVertical: verticalScale(8),
    paddingHorizontal: verticalScale(15),
    borderRadius: moderateScale(20),
    alignItems: 'center',
    flexDirection: 'row',
    //elevation: 5, // sombreado
    borderWidth: verticalScale(1),
    borderColor: 'black',
  },
  iconGoogleStyle: {
    paddingHorizontal: moderateScale(24),
    width: moderateScale(20),
    height: moderateScale(20),
  },
  buttomOtrosText: {
    color: 'black',
    fontSize: moderateScale(16),
    paddingHorizontal: moderateScale(20),
    fontWeight: 'bold',
  },
  // estilos de los botones del footer
  ButtomFooterContainer: {
    width: '100%',
    height: moderateScale(30),
    flexDirection: 'row',
    //backgroundColor: "green",
    justifyContent: 'center',
    alignItems: 'center',
    gap: moderateScale(10),
  },
  // estilo del separador de los botones del footer
  separatorButtomFooter: {
    width: moderateScale(2), // 46%
    height: moderateScale(15),
    backgroundColor: 'black',
    marginHorizontal: moderateScale(4),
  },
})

export default FormLogin
