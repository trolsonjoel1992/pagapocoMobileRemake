import CustomTabs from '@/src/components/atoms/CustomTabs'
import iconsPath from '@/src/constants/IconsPath'
import { useAuth } from '@/src/hooks/useAuth'
import { Slot, useRouter, useSegments } from 'expo-router'
import React, { useState } from 'react'
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const TabsLayout = () => {
  const router = useRouter()
  const segments = useSegments()
  const { user, isLoading } = useAuth()
  const [showAuthModal, setShowAuthModal] = useState(false)

  const getActiveTab = () => {
    const route = segments.join('/')

    if (route.includes('home')) return 'home'
    if (route.includes('myPublications')) return 'publications'
    if (route.includes('sell')) return 'sell'
    if (route.includes('favorites')) return 'favorites'
    if (route.includes('profile')) return 'profile'

    return 'home'
  }

  const activeTab = getActiveTab()

  const tabs = [
    { id: 'home', icon: iconsPath.home },
    { id: 'publications', icon: iconsPath.publications },
    { id: 'sell', icon: iconsPath.sell },
    { id: 'favorites', icon: iconsPath.favorites },
    { id: 'profile', icon: iconsPath.profile },
  ]

  const handleTabPress = (tabId: string) => {
    if (tabId === 'home') {
      router.replace('/home')
      return
    }

    if (!user) {
      setShowAuthModal(true)
      return
    }

    switch (tabId) {
      case 'publications':
        router.replace('/(tabs)/(myPublications)/emptyPublications')
        break
      case 'sell':
        router.replace('/sell')
        break
      case 'favorites':
        router.replace('/(favorites)/emptyFavorites')
        break
      case 'profile':
        router.replace('/profile')
        break
      default:
        router.replace('/home')
    }
  }

  return (
    <View style={styles.container}>
      {/* Contenido principal */}
      <View style={styles.content}>
        {isLoading ? (
          <View style={styles.skeleton}>
            <Text>Cargando...</Text>
          </View>
        ) : (
          <Slot />
        )}
      </View>

      {/* Modal de autenticación */}
      <Modal
        visible={showAuthModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowAuthModal(false)}
      >
        <View style={modalStyles.overlay}>
          <View style={modalStyles.content}>
            <Text style={modalStyles.text}>
              Debes iniciar sesión para acceder a esta función
            </Text>
            <View style={modalStyles.buttonsContainer}>
              <TouchableOpacity
                style={[modalStyles.button, modalStyles.primaryButton]}
                onPress={() => {
                  setShowAuthModal(false)
                  router.replace('/(auth)/FormLogin')
                }}
              >
                <Text style={modalStyles.buttonText}>Iniciar sesión</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[modalStyles.button, modalStyles.secondaryButton]}
                onPress={() => setShowAuthModal(false)}
              >
                <Text style={[modalStyles.buttonText, { color: '#333' }]}>
                  Cancelar
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Tabs personalizados con control de autenticación */}
      <CustomTabs
        tabs={tabs}
        activeTab={activeTab}
        onTabPress={handleTabPress}
        isAuthenticated={!!user} // Pasa el estado de autenticación
      />
    </View>
  )
}

// Estilos base
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
  },
  skeleton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
})

// Estilos del modal
const modalStyles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  content: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    padding: 12,
    borderRadius: 5,
    minWidth: '45%',
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: '#A230C7',
  },
  secondaryButton: {
    backgroundColor: '#e0e0e0',
  },
  buttonText: {
    fontWeight: '500',
  },
})

export default TabsLayout
