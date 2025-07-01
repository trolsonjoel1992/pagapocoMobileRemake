import ImagesPath from '@/src/constants/ImagesPath'
import { initSeed } from '@/src/constants/script'
import { useApp } from '@/src/contexts/AppContext'
import { router } from 'expo-router'
import React, { useEffect } from 'react'
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale, verticalScale } from 'react-native-size-matters'

const SplashScreen = () => {
  // const { user, isLoading: authLoading } = useAuth()
  const { resetApp } = useApp()

  useEffect(() => {
    //resetApp()
    initSeed()

    // Redirigir a la pantalla Skeleton después de 1.5 segundos
    const timer = setTimeout(() => {
      router.replace('/Skeleton')
    }, 1500) // 1.5 segundos

    return () => clearTimeout(timer)
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.body}>
        <Image
          source={ImagesPath.logo}
          style={styles.logoStyle}
          resizeMode="contain"
        />
        <ActivityIndicator size={moderateScale(48)} color={'purple'} />
      </View>
      <View style={styles.footer}>
        <Text style={styles.textFrom}>@2025 | PagaPoco</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: moderateScale(70),
  },
  header: {},
  body: {
    alignItems: 'center',
    gap: verticalScale(20),
  },
  footer: {
    alignItems: 'center',
    height: verticalScale(70),
    justifyContent: 'flex-end',
  },
  logoStyle: {
    height: moderateScale(100),
    width: moderateScale(100),
  },
  textFrom: {
    fontSize: moderateScale(10),
    color: 'black',
    fontWeight: 'bold',
  },
})

export default SplashScreen
