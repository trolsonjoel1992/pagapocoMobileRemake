import HeaderMainComponent from '@/src/components/atoms/HeaderMainComponent'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const ContactaConElVendedor = () => {
  const router = useRouter()

  return (
    <SafeAreaView style={styles.container}>
      <HeaderMainComponent
        titulo="Hacé tu consulta"
        onBackPress={() => router.back()}
      />

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.contentContainer}>
          <Text style={styles.subtitle}>Completá tus datos de contacto</Text>

          {['Nombre', 'Apellido', 'E-mail', 'Teléfono'].map((label, index) => (
            <View key={index} style={styles.inputGroup}>
              <Text style={styles.label}>{label}:</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder={`Ingresá tu ${label.toLowerCase()}`}
                  placeholderTextColor="#aaa"
                />
                <Ionicons name="create-outline" size={20} color="#333" />
              </View>
            </View>
          ))}

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Consulta:</Text>
            <View style={styles.inputContainerLarge}>
              <TextInput
                style={styles.textArea}
                placeholder="Escribí tu pregunta"
                placeholderTextColor="#aaa"
                multiline
                numberOfLines={4}
              />
              <Ionicons name="create-outline" size={20} color="#333" />
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => router.push('/(trabajo_matias)/plan_de_venta')}
            >
              <Text style={styles.buttonText}>Continuar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 15,
    textAlign: 'center',
    color: '#333',
  },
  inputGroup: {
    marginBottom: 20,
    width: '100%',
  },
  label: {
    fontWeight: '600',
    marginBottom: 8,
    fontSize: 16,
    color: '#444',
  },
  inputContainer: {
    backgroundColor: '#f1e8f8',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    height: 50,
  },
  inputContainerLarge: {
    backgroundColor: '#f1e8f8',
    borderRadius: 12,
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    minHeight: 120,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    paddingVertical: 12,
  },
  textArea: {
    flex: 1,
    fontSize: 16,
    textAlignVertical: 'top',
    color: '#333',
    maxHeight: 150,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#A230C7',
    borderRadius: 20,
    padding: 16,
    alignItems: 'center',
    marginTop: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    width: 170,
    height: 55,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
})

export default ContactaConElVendedor
