import ContainerView from '@/src/components/atoms/ContainerView'
import ImagesPath from '@/src/constants/ImagesPath'
import { Href, router } from 'expo-router'

import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { moderateScale, verticalScale } from 'react-native-size-matters'

export default function Sell() {
  return (
    <ContainerView>
      <View style={styles.content}>
        <Text style={styles.title}>¡Vendé en nuestra app!</Text>
        <Text style={styles.subtitle}>Selecciona la categoría de venta</Text>

        <FlatList
          data={categories}
          numColumns={2}
          columnWrapperStyle={styles.row}
          keyExtractor={(item) => item.key}
          contentContainerStyle={styles.categoryList}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() => router.push(item.route)}
            >
              <Image source={item.icon} style={styles.icon} />
              <Text style={styles.cardText}>{item.label}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </ContainerView>
  )
}

type Category = {
  key: string
  label: string
  icon: any
  route: Href<string | object>
}

const categories: Category[] = [
  {
    key: 'camiones',
    label: 'Camiones',
    icon: ImagesPath.iconTruck,
    route: '/(sell)/formVehicle',
  },
  {
    key: 'camionetas',
    label: 'Camionetas',
    icon: ImagesPath.iconCarProfile,
    route: '/(sell)/formVehicle',
  },
  {
    key: 'autos',
    label: 'Autos',
    icon: ImagesPath.iconCar,
    route: '/(sell)/formVehicle',
  },
  {
    key: 'motos',
    label: 'Motos',
    icon: ImagesPath.iconMotorcycle,
    route: '/(sell)/formMotorcycle',
  },
  {
    key: 'piezas',
    label: 'Piezas',
    icon: ImagesPath.iconGear,
    route: '/(sell)/formGear',
  },
]

export const styles = StyleSheet.create({
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
    paddingBottom: verticalScale(20),
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: verticalScale(8),
  },
  card: {
    width: '48%',
    backgroundColor: '#f1e9f9',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: moderateScale(10),
    paddingVertical: verticalScale(30),
    borderRadius: moderateScale(20),
  },
  icon: {
    width: moderateScale(65),
    height: moderateScale(65),
    // marginRight: moderateScale(16),
  },
  cardText: {
    fontSize: moderateScale(18),
    fontWeight: '500',
    // paddingLeft: moderateScale(10),
  },
})
