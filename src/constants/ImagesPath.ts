const ImagesPath = {
  logo: require('@/src/assets/images/icon.png'),
  iconGoogle: require('@/src/assets/images/icon-google.png'),
  iconMicrosoft: require('@/src/assets/images/icon-microsoft.png'),
  iconPhone: require('@/src/assets/images/icon-phone.png'),
  imageArrowBack: require('@/src/assets/images/arrow-back-black-icon.png'),
  iconConfirmed: require('@/src/assets/images/confirm-icon.png'),
  iconWarning: require('@/src/assets/images/warning-icon.png'),
  imageGoogle: require('@/src/assets/images/imagen-google.png'),
  imageCar1: require('@/src/assets/images/ImagePublication/car/auto1.png'),
  imageDefault: require('@/src/assets/images/ImagePublication/imagenDefault.png'),
  imageDefault2: require('@/src/assets/images/ImagePublication/imagen-default2.jpg'),
  iconLogin: require('@/src/assets/images/login-icon.png'),
  imageFavoritesNotLogin: require('@/src/assets/images/ImagesNotLogin/imagen-favoritos-no-login.png'),
  iconCamion: require('@/src/assets/images/imageCategoria/icon-camion.png'),
  iconCamioneta: require('@/src/assets/images/imageCategoria/icon-camioneta.png'),
  iconAuto: require('@/src/assets/images/imageCategoria/icon-auto.png'),
  iconMoto: require('@/src/assets/images/imageCategoria/icon-moto.png'),
  iconPieza: require('@/src/assets/images/imageCategoria/icon-pieza.png'),
  iconTabsHome: require('@/src/assets/images/tabs-images/home-icon.png'),
  //lupa del buscador
  iconSearchBar: require('@/src/assets/images/searchBar/searchiconglass.png'),
  //imagen emptyPublications
  imageNopublication: require('@/src/assets/images/publicationsbuton/nopublication.png'),
  //imagenes de los contenedores myPublications
  imageMyPublication: require('@/src/assets/images/publicationsbuton/imagePremiunpublication.png'),
  imageFrePublication: require('@/src/assets/images/publicationsbuton/imageFreepublication.png'),
  //no se que onda esto
  adNikeBanner: require('@/src/assets/images/ImagePublication/ads-nike-add.png'),
  // iconos del tab Vender
  iconTruck: require('@/src/assets/images/imageSell/TruckIcon.png'),
  iconCarProfile: require('@/src/assets/images/imageSell/CarProfileIcon.png'),
  iconCar: require('@/src/assets/images/imageSell/CarIcon.png'),
  iconMotorcycle: require('@/src/assets/images/imageSell/MotorcycleIcon.png'),
  iconGear: require('@/src/assets/images/imageSell/GearIcon.png'),
  // iconos globales
  iconNotePencil: require('@/src/assets/images/NotePencilIcon.png'),
  //imagen estrella premiun.tsx
  imageStarP: require('@/src/assets/images/publicationsbuton/imageStar.png'),
  //imagenes modal
  modalConfirm: require('@/src/assets/images/modalVariants/modalConfirm.png'),
  modalWarning: require('@/src/assets/images/modalVariants/modalWarning.png'),
  modalAlert: require('@/src/assets/images/modalVariants/modalAlert.png'),
  // imagenes selecionpara editar publics
  imagePreS: require('@/src/assets/images/publicationsbuton/imagePremSel.png'),
  imageFreS: require('@/src/assets/images/publicationsbuton/imageFreeSel.png'),
  // imagen editar precio
  priceImage: require('@/src/assets/images/publicationsbuton/priceImage.png'),
  // imagenes de tu publicacion
  publImageF: require('@/src/assets/images/publicationsbuton/publicationImageF.png'),
  publImageP: require('@/src/assets/images/publicationsbuton/publicationImageP.png'),
}

export default ImagesPath

export type ImagePathKey = keyof typeof ImagesPath
