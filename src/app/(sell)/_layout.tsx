import { CreatePublicationProvider } from '@/src/contexts/CreatePublicationContext'
import { Stack } from 'expo-router'

const SellLayout = () => {
  return (
    <CreatePublicationProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </CreatePublicationProvider>
  )
}

export default SellLayout
