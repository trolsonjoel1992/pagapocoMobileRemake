const ImagesPath = {
  // images splash
  splash: require('@/src/assets/images/logoImages/pagapocoSplash.png'),
  // images auth
  logo: require('@/src/assets/images/logoImages/pagapoco.png'),
  google: require('@/src/assets/images/logoImages/loginGoogle.png'),
  finger: require('@/src/assets/images/buttonImages/finger.png'),
  // images profile
  user: require('@/src/assets/images/profileImages/user.png'),
  darkUser: require('@/src/assets/images/profileImages/darkUser.png'),
  // images modal
  modalCheck: require('@/src/assets/images/modalImages/modalCheck.png'),
  modalQuestion: require('@/src/assets/images/modalImages/modalQuestion.png'),
  modalWarning: require('@/src/assets/images/modalImages/modalWarning.png'),
  // images buttons sell
  car: require('@/src/assets/images/sellImages/categoryImages/car.png'),
  motorcycle: require('@/src/assets/images/sellImages/categoryImages/motorcycle.png'),
  pickup: require('@/src/assets/images/sellImages/categoryImages/pickup.png'),
  pieces: require('@/src/assets/images/sellImages/categoryImages/pieces.png'),
  truck: require('@/src/assets/images/sellImages/categoryImages/truck.png'),
  // images buttons sell darkmode
  carD: require('@/src/assets/images/sellImages/categoryImages/carD.png'),
  motorcycleD: require('@/src/assets/images/sellImages/categoryImages/motorcycleD.png'),
  pickupD: require('@/src/assets/images/sellImages/categoryImages/pickupD.png'),
  piecesD: require('@/src/assets/images/sellImages/categoryImages/piecesD.png'),
  truckD: require('@/src/assets/images/sellImages/categoryImages/truckD.png'),
  //images whatsapp
  whatsapp: require('@/src/assets/images/homeImages/pageWhatsapp.png'),
};

export default ImagesPath;

export type ImagePathKey = keyof typeof ImagesPath;
