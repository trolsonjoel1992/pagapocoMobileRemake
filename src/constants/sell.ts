import { Category } from '@/src/types/sell'
import { StyleSheet } from 'react-native'
import { moderateScale, verticalScale } from 'react-native-size-matters'

// CONSTANTES PARA TAB SELL

export const categories: Category[] = [
  { label: 'Camiones', icon: 'iconTruck', route: '/(sell)/FormVehicle' },
  { label: 'Camionetas', icon: 'iconCarProfile', route: '/(sell)/FormVehicle' },
  { label: 'Autos', icon: 'iconCar', route: '/(sell)/FormVehicle' },
  { label: 'Motos', icon: 'iconMotorcycle', route: '/(sell)/FormMotorcycle' },
  { label: 'Piezas', icon: 'iconGear', route: '/(sell)/FormGear' },
]

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    paddingVertical: verticalScale(40),
    paddingHorizontal: moderateScale(20),
    alignItems: 'center',
  },
  title: {
    fontSize: moderateScale(28),
    fontWeight: 'bold',
    marginBottom: verticalScale(10),
  },
  subtitle: {
    fontSize: moderateScale(16),
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
    fontSize: moderateScale(18),
    fontWeight: '600',
  },
})
