/* import GenericModal from '@/src/components/atoms/GenericModal'
import IconsPath from '@/src/constants/IconsPath'
import ImagesPath from '@/src/constants/ImagesPath'
import { useAuth } from '@/src/hooks/useAuth'
import { Tabs, useRouter, useSegments } from 'expo-router'
import React, { useState } from 'react'
import { Image, Modal, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

const Layout = () => {
  const router = useRouter()
  const segments = useSegments()
  const { user } = useAuth()
  const [showAuthModal, setShowAuthModal] = useState(false)

  const getActiveRoute = () => {
    const route = segments.join('/')
    return route.includes('home')
      ? 'home'
      : route.includes('myPublications')
      ? 'myPublications'
      : route.includes('sell')
      ? 'sell'
      : route.includes('favorites')
      ? 'favorites'
      : route.includes('profile')
      ? 'profile'
      : 'home'
  }

  const activeRoute = getActiveRoute()

  const handleContinue = () => {
    setShowAuthModal(false)
    router.navigate('/(auth)/(login)/FormLogin')
  }

  const handleCancel = () => {
    setShowAuthModal(false)
  }

  const handleTabPress = (name: string) => {
    if (name === 'home') {
      router.replace('/home')
      return
    }

    if (!user) {
      setShowAuthModal(true)
      return
    }

    switch (name) {
      case 'myPublications':
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
    <>
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
        initialRouteName={activeRoute}
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
          listeners={() => ({
            tabPress: (e) => {
              e.preventDefault()
              handleTabPress('home')
            },
          })}
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
              e.preventDefault()
              handleTabPress('myPublications')
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
              e.preventDefault()
              handleTabPress('sell')
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
              e.preventDefault()
              handleTabPress('favorites')
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
              e.preventDefault()
              handleTabPress('profile')
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
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        >
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

export default Layout */

import IconsPath from '@/src/constants/IconsPath'
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
