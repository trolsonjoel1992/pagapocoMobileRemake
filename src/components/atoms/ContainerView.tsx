import { Color } from '@/src/constants/colors'
import { StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function ContainerView({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar backgroundColor={Color.primary} barStyle="light-content" />

      {children}
    </SafeAreaView>
  )
}
