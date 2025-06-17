import ImagesPath from '@/src/constants/ImagesPath'
import { router } from 'expo-router'

import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale, verticalScale } from 'react-native-size-matters'

const Sell = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>¡Vendé en nuestra app!</Text>
        <Text style={styles.subtitle}>Selecciona la categoría de venta</Text>

        <View style={styles.categoryList}>
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push('/(sell)/FormVehicle')}
          >
            <Image source={ImagesPath.iconTruck} style={styles.icon} />
            <Text style={styles.cardText}>Camiones</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push('/(sell)/FormVehicle')}
          >
            <Image source={ImagesPath.iconCarProfile} style={styles.icon} />
            <Text style={styles.cardText}>Camionetas</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push('/(sell)/FormVehicle')}
          >
            <Image source={ImagesPath.iconCar} style={styles.icon} />
            <Text style={styles.cardText}>Autos</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push('/(sell)/FormMotorcycle')}
          >
            <Image source={ImagesPath.iconMotorcycle} style={styles.icon} />
            <Text style={styles.cardText}>Motos</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push('/(sell)/FormGear')}
          >
            <Image source={ImagesPath.iconGear} style={styles.icon} />
            <Text style={styles.cardText}>Piezas</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {/*       <TabsLayout />
       */}
    </SafeAreaView>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    paddingVertical: verticalScale(20),
    paddingHorizontal: moderateScale(20),
    alignItems: 'center',
  },
  title: {
    fontSize: moderateScale(28),
    fontWeight: 'bold',
    marginBottom: verticalScale(10),
  },
  subtitle: {
    fontSize: moderateScale(18),
    marginBottom: verticalScale(20),
    textAlign: 'center',
  },
  categoryList: {
    width: '100%',
  },
  card: {
    backgroundColor: '#f1e9f9',
    flexDirection: 'row',
    alignItems: 'center',
    padding: moderateScale(20),
    borderRadius: 20,
    marginBottom: verticalScale(18),
  },
  icon: {
    marginRight: moderateScale(16),
  },
  cardText: {
    fontSize: moderateScale(24),
    fontWeight: '600',
    paddingLeft: moderateScale(10),
  },
})

export default Sell
