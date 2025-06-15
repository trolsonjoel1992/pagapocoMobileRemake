/* import TabsLayout from '@/src/app/(tabs)/_layout'
 */ import ImagesPath from '@/src/constants/ImagesPath'
import { categories, styles } from '@/src/constants/sell'
import { router } from 'expo-router'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Sell = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>¡Vendé!</Text>
        <Text style={styles.subtitle}>Selecciona la categoría de venta</Text>

        <View style={styles.categoryList}>
          {categories.map((item) => (
            <TouchableOpacity
              key={item.label}
              style={styles.card}
              onPress={() => router.push(item.route)}
            >
              <Image source={ImagesPath[item.icon]} style={styles.icon} />
              <Text style={styles.cardText}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      {/*       <TabsLayout />
       */}
    </SafeAreaView>
  )
}

export default Sell
