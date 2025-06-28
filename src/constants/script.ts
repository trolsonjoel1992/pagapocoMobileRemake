import ImagesPath from '@/src/constants/ImagesPath'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const initPublications = async () => {
  await AsyncStorage.clear() // Limpiar AsyncStorage antes de inicializar
  try {
    const existing = await AsyncStorage.getItem('publications')

    if (!existing) {
      const initialData = [
        {
          id: 1,
          title: 'Volkswagen Polo 0km',
          price: '$24.500.000',
          image: ImagesPath.imageAutoVolkswagenPolo,
        },
        {
          id: 2,
          title: 'Chevrolet Traker 1.2 Ltz Turbo At',
          price: '$30.000.000',
          image: ImagesPath.imageAutoChevroletTracker,
        },
        {
          id: 3,
          title: 'Carburador Ford Falcon F100 22',
          price: '$172.320',
          image: ImagesPath.imagePiezaCarburadorFordFalcon,
        },
        {
          id: 4,
          title: 'Honda Tornado 250',
          price: '$8.500.000',
          image: ImagesPath.imageMotoHondaTornado,
        },
        {
          id: 5,
          title: 'Nissan Frontier 2.3 S Cd 4x4 Mt',
          price: '$35.000.000',
          image: ImagesPath.imageCamionetaNissanFrontier,
        },
        {
          id: 6,
          title: 'Fiat Toro 1.3 T270 Volcano 4x2 At',
          price: '$30.500.000',
          image: ImagesPath.imageAutoFiatToro,
        },
      ]

      await AsyncStorage.setItem('publications', JSON.stringify(initialData))
      console.log('🔹 Publicaciones inicializadas en AsyncStorage')
    } else {
      const data = JSON.parse(existing)
      console.log('✅ Publicaciones existentes:', data)
    }
  } catch (error) {
    console.error('❌ Error manejando publicaciones:', error)
  }
}
