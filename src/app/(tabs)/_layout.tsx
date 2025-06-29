import GenericModal from '@/src/components/atoms/GenericModal'
import { Color } from '@/src/constants/colors'
import IconsPath from '@/src/constants/IconsPath'
import ImagesPath from '@/src/constants/ImagesPath'
import { useApp } from '@/src/contexts/AppContext'
import { PlatformPressable } from '@react-navigation/elements'
import { Tabs, useRouter } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { Image, Modal, StatusBar, StyleSheet, View } from 'react-native'
import { verticalScale } from 'react-native-size-matters'

export default function TabsLayout() {
  const router = useRouter()
  // const { user } = useAuth()
  const [showAuthModal, setShowAuthModal] = useState(false)

  const handleContinue = () => {
    setShowAuthModal(false)
    router.navigate('/(auth)/(login)/FormLogin')
  }

  const handleCancel = () => {
    setShowAuthModal(false)
  }

  const { currentUser } = useApp()
  useEffect(() => {
    const funca = () => {
      console.log('usuario actual:', currentUser)
    }

    funca()
  }, [])

  return (
    <>
      <StatusBar backgroundColor={Color.primary} barStyle="light-content" />

      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#A230C7',
            height: verticalScale(50),
          },
          tabBarShowLabel: true,
          tabBarActiveTintColor: 'rgba(255, 255, 255, 0.5)',
          tabBarInactiveTintColor: 'white',
          tabBarActiveBackgroundColor: '#7B1FA2',
          tabBarButton: (props) => (
            <PlatformPressable
              {...props}
              android_ripple={null}
              style={[
                props.style,
                { justifyContent: 'center', alignItems: 'center' },
              ]}
            />
          ),
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
          listeners={() => ({
            tabPress: (e) => {
              if (!currentUser) {
                e.preventDefault()
                setShowAuthModal(true)
              }
            },
          })}
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
          listeners={() => ({
            tabPress: (e) => {
              if (!currentUser) {
                e.preventDefault()
                setShowAuthModal(true)
              }
            },
          })}
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
          listeners={() => ({
            tabPress: (e) => {
              if (!currentUser) {
                e.preventDefault()
                setShowAuthModal(true)
              }
            },
          })}
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
          listeners={() => ({
            tabPress: (e) => {
              if (!currentUser) {
                e.preventDefault()
                setShowAuthModal(true)
              }
            },
          })}
        />
      </Tabs>

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
    </>
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
