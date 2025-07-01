import ImagesPath from '@/src/constants/ImagesPath'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const initSeed = async () => {
  const alreadySeeded = await AsyncStorage.getItem('seeded')
  if (alreadySeeded) return

  await AsyncStorage.setItem('users', JSON.stringify(initialUser))
  await AsyncStorage.setItem('favorites', JSON.stringify(initialFavorites))
  await AsyncStorage.setItem(
    'publications',
    JSON.stringify(initialPublications)
  )
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
    publication_id: 4,
  },
  {
    id: 2,
    user_id: 1,
    publication_id: 6,
  },
  {
    id: 3,
    user_id: 2,
    publication_id: 1,
  },
]

const initialPublications = [
  {
    id: 1,
    title: 'Volkswagen Polo 0km',
    description:
      'Vehículo completamente nuevo sin uso, dirección asistida, aire acondicionado, cierre centralizado. Garantía oficial de fábrica. Financiación disponible. Vehículo completamente nuevo sin uso, dirección asistida, aire acondicionado, cierre centralizado. Garantía oficial de fábrica. Financiación disponible.',
    price: '$ 24.500.000',
    isPremium: true,
    isPaused: false,
    isSold: false,
    isOculted: false,
    images: [
      ImagesPath.imageAutoVolkswagenPolo,
      ImagesPath.imageAutoVolkswagenPolo,
      ImagesPath.imageAutoVolkswagenPolo,
      ImagesPath.imageAutoVolkswagenPolo,
      ImagesPath.imageAutoVolkswagenPolo,
      ImagesPath.imageAutoVolkswagenPolo,
      ImagesPath.imageAutoVolkswagenPolo,
      ImagesPath.imageAutoVolkswagenPolo,
    ],
    user_id: 1,
  },
  {
    id: 2,
    title: 'Chevrolet Traker 1.2 Ltz Turbo At',
    description:
      'SUV compacta en excelente estado, transmisión automática, motor turbo, full equipo. Ideal para familia, muy económica en combustible. Papeles al día. SUV compacta en excelente estado, transmisión automática, motor turbo, full equipo. Ideal para familia, muy económica en combustible. Papeles al día.',
    price: '$ 30.000.000',
    isPremium: true,
    isPaused: false,
    isSold: false,
    isOculted: false,
    images: [
      ImagesPath.imageAutoChevroletTracker,
      ImagesPath.imageAutoChevroletTracker,
    ],
    user_id: 1,
  },
  {
    id: 3,
    title: 'Carburador Ford Falcon F100 22',
    description:
      'Carburador original Ford en perfectas condiciones, recién revisado y calibrado. Compatible con Falcon y F100. Ideal para restauración de vehículos clásicos. Carburador original Ford en perfectas condiciones, recién revisado y calibrado. Compatible con Falcon y F100. Ideal para restauración de vehículos clásicos.',
    price: '$ 172.320',
    isPremium: true,
    isPaused: false,
    isSold: false,
    isOculted: false,
    images: [ImagesPath.imagePiezaCarburadorFordFalcon],
    user_id: 1,
  },
  {
    id: 4,
    title: 'Honda Tornado 250',
    description:
      'Motocicleta deportiva con 15.000 km, motor en perfecto estado, cubiertas nuevas. Mantenimiento realizado en concesionario oficial. Lista para transferir. Motocicleta deportiva con 15.000 km, motor en perfecto estado, cubiertas nuevas. Mantenimiento realizado en concesionario oficial. Lista para transferir.',
    price: '$ 8.500.000',
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
    description:
      'Camioneta 4x4 diesel con caja manual, doble cabina, muy cuidada. Ideal para trabajo y familia. Tracción integral, excelente para todo terreno.',
    price: '$ 35.000.000',
    isPremium: false,
    isPaused: false,
    isSold: false,
    isOculted: false,
    images: [
      ImagesPath.imageCamionetaNissanFrontier,
      ImagesPath.imageCamionetaNissanFrontier,
      ImagesPath.imageCamionetaNissanFrontier,
      ImagesPath.imageCamionetaNissanFrontier,
      ImagesPath.imageCamionetaNissanFrontier,
    ],
    user_id: 2,
  },
  {
    id: 6,
    title: 'Fiat Toro 1.3 T270 Volcano 4x2 At',
    description:
      'Pick-up moderna con motor turbo, transmisión automática, full equipo. Pantalla táctil, cámara de retroceso, sensores de estacionamiento. Impecable.',
    price: '$ 30.500.000',
    isPremium: false,
    isPaused: false,
    isSold: false,
    isOculted: false,
    images: [ImagesPath.imageAutoFiatToro],
    user_id: 2,
  },
  {
    id: 7,
    title: 'Jeep Renegade 1.8 Sport',
    description:
      'SUV compacta con diseño robusto, motor 1.8 nafta, aire acondicionado, dirección asistida. Perfecto estado general, único dueño, service al día.',
    price: '$ 24.000.000',
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
    description:
      'Crossover urbano con estilo aventurero, motor 1.6 16v, equipamiento completo. Bajo consumo, amplio espacio interior, perfecto para uso diario.',
    price: '$ 23.000.000',
    isPremium: false,
    isPaused: false,
    isSold: false,
    isOculted: false,
    images: [ImagesPath.imageAutoRenaultSandero],
    user_id: 2,
  },
]
