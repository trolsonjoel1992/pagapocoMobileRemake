import ContainerView from '@/src/components/atoms/ContainerView'
import ImagesPath from '@/src/constants/ImagesPath'
import { useApp } from '@/src/contexts/AppContext'
import { router } from 'expo-router'
import React from 'react'
import { Image, TouchableOpacity } from 'react-native'

const GoogleLogin = () => {
  const { login } = useApp()

  const loginAsMartha = async () => {
    const marthaEmail = 'juan@gmail.com'
    const marthaPassword = '123456'
    const ok = await login(marthaEmail, marthaPassword)
    router.replace('/(tabs)/home')
  }

  return (
    <ContainerView>
      <TouchableOpacity onPress={loginAsMartha}>
        <Image source={ImagesPath.imageGoogle} resizeMode="contain" />
      </TouchableOpacity>
    </ContainerView>
  )
}

export default GoogleLogin
