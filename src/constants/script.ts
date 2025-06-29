import ImagesPath from '@/src/constants/ImagesPath'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const initSeed = async () => {
  //await AsyncStorage.clear() // Clear all data for fresh start
  const alreadySeeded = await AsyncStorage.getItem('seeded')
  if (alreadySeeded) return

  await AsyncStorage.setItem('users', JSON.stringify(initialUser))
  await AsyncStorage.setItem('favorites', JSON.stringify(initialFavorites))
  await AsyncStorage.setItem(
    'publications',
    JSON.stringify(initialPublications)
  )
  await AsyncStorage.setItem('images', JSON.stringify(initialImages))
  await AsyncStorage.setItem('seeded', 'true')
}

const initialUser = [
  {
    id: 1,
    email: 'juan@gmail.com',
    password: '123456',
  },
  {
    id: 2,
    email: 'maria@gmail.com',
    password: 'abcdef',
  },
  {
    id: 3,
    email: 'martha@gmail.com',
    password: 'qwerty',
  },
]

const initialFavorites = [
  {
    id: 1,
    user_id: 1,
    publication_id: 1,
  },
  {
    id: 2,
    user_id: 1,
    publication_id: 2,
  },
  {
    id: 3,
    user_id: 2,
    publication_id: 3,
  },
]

const initialPublications = [
  {
    id: 1,
    title: 'Volkswagen Polo 0km',
    price: '$24.500.000',
    isPremium: true,
    isPaused: false,
    isSold: false,
    isOculted: false,
    images: [ImagesPath.imageAutoVolkswagenPolo],
    user_id: 1,
  },
  {
    id: 2,
    title: 'Chevrolet Traker 1.2 Ltz Turbo At',
    price: '$30.000.000',
    isPremium: false,
    isPaused: false,
    isSold: false,
    isOculted: false,
    images: [ImagesPath.imageAutoChevroletTracker],
    user_id: 1,
  },
  {
    id: 3,
    title: 'Carburador Ford Falcon F100 22',
    price: '$172.320',
    isPremium: false,
    isPaused: false,
    isSold: false,
    isOculted: false,
    images: [ImagesPath.imagePiezaCarburadorFordFalcon],
    user_id: 1,
  },
  {
    id: 4,
    title: 'Honda Tornado 250',
    price: '$8.500.000',
    isPremium: true,
    isPaused: false,
    isSold: false,
    isOculted: false,
    images: [ImagesPath.imageMotoHondaTornado],
    user_id: 2,
  },
  {
    id: 5,
    title: 'Nissan Frontier 2.3 S Cd 4x4 Mt',
    price: '$35.000.000',
    isPremium: false,
    isPaused: false,
    isSold: false,
    isOculted: false,
    images: [ImagesPath.imageCamionetaNissanFrontier],
    user_id: 2,
  },
  {
    id: 6,
    title: 'Fiat Toro 1.3 T270 Volcano 4x2 At',
    price: '$30.500.000',
    isPremium: true,
    isPaused: false,
    isSold: false,
    isOculted: false,
    images: [ImagesPath.imageAutoFiatToro],
    user_id: 2,
  },
  {
    id: 7,
    title: 'Jeep Renegade 1.8 Sport',
    price: '$24.000.000',
    isPremium: false,
    isPaused: false,
    isSold: false,
    isOculted: false,
    images: [ImagesPath.imageAutoJeepRenegade],
    user_id: 2,
  },
  {
    id: 8,
    title: 'Renault Sandero Stepway 1.6 16v Intense',
    price: '$23.000.000',
    isPremium: true,
    isPaused: false,
    isSold: false,
    isOculted: false,
    images: [ImagesPath.imageAutoRenaultSandero],
    user_id: 2,
  },
]

const initialImages = [
  { id: 1, publication_id: 1, image: ImagesPath.imageAutoVolkswagenPolo },
  { id: 2, publication_id: 2, image: ImagesPath.imageAutoChevroletTracker },
  {
    id: 3,
    publication_id: 3,
    image: ImagesPath.imagePiezaCarburadorFordFalcon,
  },
  { id: 4, publication_id: 4, image: ImagesPath.imageMotoHondaTornado },
  { id: 5, publication_id: 5, image: ImagesPath.imageCamionetaNissanFrontier },
  { id: 6, publication_id: 6, image: ImagesPath.imageAutoFiatToro },
  { id: 7, publication_id: 7, image: ImagesPath.imageAutoJeepRenegade },
  { id: 8, publication_id: 8, image: ImagesPath.imageAutoRenaultSandero },
]
