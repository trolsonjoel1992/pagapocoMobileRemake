import CustomTabs from '@/src/components/atoms/CustomTabs'
import GenericModal from '@/src/components/atoms/GenericModal'
import iconsPath from '@/src/constants/IconsPath'
import ImagesPath from '@/src/constants/ImagesPath'
import { useAuth } from '@/src/hooks/useAuth'
import { Slot, useRouter, useSegments } from 'expo-router'
import React, { useState } from 'react'
import { Modal, StyleSheet, View } from 'react-native'

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
  const handleContinue = () => {
    setShowAuthModal(false)
    router.navigate('/(auth)/(login)/FormLogin')
  }

  const handleCancel = () => {
    setShowAuthModal(false)
  }
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
      <View style={styles.content}>
        <Slot />
      </View>

      <Modal
        visible={showAuthModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowAuthModal(false)}
      >
        <View style={styles.modalOverlay}>
          <GenericModal
            imageSource={ImagesPath.modalWarning}
            messages={[
              'Para poder utilizar ésta función',
              'ingresá a tu cuenta.',
            ]}
            showCancelButton={true}
            onContinue={handleContinue}
            onCancel={handleCancel}
            continueButtonText="Aceptar"
            cancelButtonText="Cancelar"
          />
        </View>
      </Modal>

      <CustomTabs
        tabs={tabs}
        activeTab={activeTab}
        onTabPress={handleTabPress}
        isAuthenticated={!!user}
      />
    </View>
  )
}

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
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
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
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
})

export default TabsLayout

/* import IconsPath from '@/src/constants/IconsPath'
import { Tabs } from 'expo-router'
import React from 'react'
import { Image } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#A230C7',
          height: moderateScale(55),
        },
        tabBarShowLabel: true,
        tabBarActiveTintColor: 'rgba(255, 255, 255, 0.5)',
        tabBarInactiveTintColor: 'white',
        tabBarActiveBackgroundColor: '#7B1FA2',
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ focused }) => (
            <Image
              source={IconsPath.home}
              style={{
                tintColor: focused ? 'rgba(255, 255, 255, 0.5)' : 'white',
              }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="myPublications"
        options={{
          title: 'Publicaciones',
          tabBarIcon: ({ focused }) => (
            <Image
              source={IconsPath.publications}
              style={{
                tintColor: focused ? 'rgba(255, 255, 255, 0.5)' : 'white',
              }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="sell"
        options={{
          title: 'Vender',
          tabBarIcon: ({ focused }) => (
            <Image
              source={IconsPath.sell}
              style={{
                tintColor: focused ? 'rgba(255, 255, 255, 0.5)' : 'white',
              }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: 'Favoritos',
          tabBarIcon: ({ focused }) => (
            <Image
              source={IconsPath.favorites}
              style={{
                tintColor: focused ? 'rgba(255, 255, 255, 0.5)' : 'white',
              }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ focused }) => (
            <Image
              source={IconsPath.profile}
              style={{
                tintColor: focused ? 'rgba(255, 255, 255, 0.5)' : 'white',
              }}
              resizeMode="contain"
            />
          ),
        }}
      />
    </Tabs>
  )
}

export default Layout
 */
