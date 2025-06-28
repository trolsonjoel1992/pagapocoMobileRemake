import ImagesPath from '@/src/constants/ImagesPath'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const apiListPublication = async () => {
  try {
    const response = await AsyncStorage.getItem('publications')

    return response ? JSON.parse(response) : []
  } catch (error) {
    console.error('Error al listar publicaciones:', error)
  }
}

export const apiCreatePublication = async (newPublication: any) => {
  try {
    const response = await AsyncStorage.getItem('publications')
    const publications = response ? JSON.parse(response) : []

    publications.push({
      ...newPublication,
      id: publications[publications.length - 1].id + 1,
      title: 'Titulo hardcode',
      price: '$precio hardcode',
      image: ImagesPath.imageAutoJeepRenegade,
    })

    await AsyncStorage.setItem('publications', JSON.stringify(publications))

    return true
  } catch (error) {
    console.error('Error al agregar publicación:', error)
    return false
  }
}
