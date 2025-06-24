import HeaderMainComponent from '@/src/components/atoms/HeaderMainComponent'
import { MaterialIcons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'

export default function FinalizarPublicacion() {
  const router = useRouter()
  const [aceptaTerminos, setAceptaTerminos] = useState(true)

  const handleFinalizar = () => {
    if (aceptaTerminos) {
      router.push('/(trabajo_matias)/modal_publicadoexitoso')
    } else {
      Alert.alert('Atención', 'Debes aceptar los términos y condiciones para continuar.')
    }
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerWrapper}>
        <HeaderMainComponent
          titulo="Vender"
          onBackPress={() => router.back()}
        />
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.title}>¡Ya casi terminamos!</Text>

        <View style={styles.iconBox}>
          <Image
            source={require('@/src/assets/images/publicationsbuton/priceImage.png')}
            style={styles.iconImage}
            resizeMode="contain"
          />
          <Text style={styles.subtext}>Ingresá el precio para tu publicación</Text>
        </View>

        <View style={styles.inputWrapper}>
          <MaterialIcons name="attach-money" size={24} color="#333" style={styles.inputIcon} />
          <TextInput
            placeholder="Ingresá el precio"
            placeholderTextColor="#555"
            style={styles.input}
            keyboardType="numeric"
          />
          <MaterialIcons name="edit" size={20} color="#333" />
        </View>

        <View style={styles.terminosContainer}>
          <TouchableOpacity onPress={() => setAceptaTerminos(!aceptaTerminos)}>
            <MaterialIcons
              name={aceptaTerminos ? 'check-box' : 'check-box-outline-blank'}
              size={20}
              color="#A230C7"
            />
          </TouchableOpacity>
          <Text style={styles.terminosText}>
            Acepto los{' '}
            <Text style={styles.link}>Términos y condiciones</Text> y autorizo el uso de mis datos de
            acuerdo a la <Text style={styles.link}>Declaración de privacidad</Text>.
          </Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleFinalizar}>
          <Text style={styles.buttonText}>Finalizar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerWrapper: {
    backgroundColor: '#A230C7',
    width: '100%',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20,
    color: '#000',
  },
  iconBox: {
    alignItems: 'center',
    marginBottom: 25,
  },
  iconImage: {
    width: 220,
    height: 220,
  },
  subtext: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginTop: 12,
    fontWeight: 'bold',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f4fc',
    borderRadius: 20,
    paddingHorizontal: 15,
    height: 48,
    borderColor: '#999',
    borderWidth: 1,
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: '#000',
  },
  terminosContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 30,
  },
  terminosText: {
    marginLeft: 8,
    fontSize: 13,
    color: '#333',
    flex: 1,
    flexWrap: 'wrap',
  },
  link: {
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: '#A230C7',
    paddingVertical: 14,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
})


