import HeaderMainComponent from '@/src/components/atoms/HeaderMainComponent'
import { Color } from '@/src/constants/colors'
import React, { useState } from 'react'
import {
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const SettingsScreen = () => {
  const [showPhone, setShowPhone] = useState(true)
  const [postVisibility, setPostVisibility] = useState(true)
  const [ads, setAds] = useState(true)
  const [location, setLocation] = useState(true)
  const [darkMode, setDarkMode] = useState(false)

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Color.primary} barStyle="light-content" />
      {/* Encabezado */}
      <HeaderMainComponent titulo="Configuraciones" />

      {/* Opciones de configuración */}
      <View style={styles.option}>
        <Text style={styles.optionText}>Mostrar mi número de teléfono</Text>
        <Switch
          value={showPhone}
          onValueChange={setShowPhone}
          thumbColor={showPhone ? '#9C27B0' : '#ccc'}
          trackColor={{ false: '#ddd', true: '#e1bee7' }}
        />
      </View>

      <View style={styles.option}>
        <Text style={styles.optionText}>Visibilidad de mis publicaciones</Text>
        <Switch
          value={postVisibility}
          onValueChange={setPostVisibility}
          thumbColor={postVisibility ? '#9C27B0' : '#ccc'}
          trackColor={{ false: '#ddd', true: '#e1bee7' }}
        />
      </View>

      <View style={styles.option}>
        <Text style={styles.optionText}>Publicidad</Text>
        <Switch
          value={ads}
          onValueChange={setAds}
          thumbColor={ads ? '#9C27B0' : '#ccc'}
          trackColor={{ false: '#ddd', true: '#e1bee7' }}
        />
      </View>

      <View style={styles.option}>
        <Text style={styles.optionText}>Compartir ubicación</Text>
        <Switch
          value={location}
          onValueChange={setLocation}
          thumbColor={location ? '#9C27B0' : '#ccc'}
          trackColor={{ false: '#ddd', true: '#e1bee7' }}
        />
      </View>

      <View style={styles.option}>
        <Text style={styles.optionText}>Modo oscuro</Text>
        <Switch
          value={darkMode}
          onValueChange={setDarkMode}
          thumbColor={darkMode ? '#000' : '#ccc'}
          trackColor={{ false: '#ddd', true: '#888' }}
        />
      </View>

      {/* Botón eliminar cuenta */}
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => alert('Cuenta eliminada')}
      >
        <Text style={styles.deleteButtonText}>Eliminar Cuenta</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 0,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#9C27B0',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },
  optionText: {
    paddingHorizontal: 10,
    fontSize: 16,
  },
  deleteButton: {
    backgroundColor: '#9C27B0',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 30,
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
})

export default SettingsScreen
