import { ImagePathKey } from '@/src/constants/ImagesPath'
import { NavigationOptions } from 'expo-router/build/global-state/routing'

export type Category = {
  label: string
  icon: ImagePathKey
  route: NavigationOptions
}
