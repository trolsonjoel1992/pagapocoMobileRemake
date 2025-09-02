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
  //images salePlan
  star: require('@/src/assets/images/sellImages/cardImages/star.png'),
  starEna: require('@/src/assets/images/sellImages/cardImages/starEna.png'),
  starDis: require('@/src/assets/images/sellImages/cardImages/starDis.png'),
  starHalf: require('@/src/assets/images/sellImages/cardImages/starHalf.png'),
  starHalfEna: require('@/src/assets/images/sellImages/cardImages/starHalfEna.png'),
  starHalfDis: require('@/src/assets/images/sellImages/cardImages/starHalfDis.png'),
  //images salePlan darkmode
  starD: require('@/src/assets/images/sellImages/cardImages/starD.png'),
  starEnaD: require('@/src/assets/images/sellImages/cardImages/starEnaD.png'),
  starHalfD: require('@/src/assets/images/sellImages/cardImages/starHalfD.png'),
  starHalfEnaD: require('@/src/assets/images/sellImages/cardImages/starHalfEnaD.png'),
  // images salePlan card
  checkC: require('@/src/assets/images/sellImages/cardImages/checkC.png'),
  checkCEna: require('@/src/assets/images/sellImages/cardImages/checkCEna.png'),
  checkCDis: require('@/src/assets/images/sellImages/cardImages/checkCDis.png'),
  crossC: require('@/src/assets/images/sellImages/cardImages/crossC.png'),
  crossCEna: require('@/src/assets/images/sellImages/cardImages/crossCEna.png'),
  crossCDis: require('@/src/assets/images/sellImages/cardImages/crossCDis.png'),
  warningC: require('@/src/assets/images/sellImages/cardImages/warningC.png'),
  warningCEna: require('@/src/assets/images/sellImages/cardImages/warningCEna.png'),
  warningCDis: require('@/src/assets/images/sellImages/cardImages/warningCDis.png'),
  // images saleTitle
  title: require('@/src/assets/images/sellImages/titleImages/title.png'),
  price: require('@/src/assets/images/sellImages/titleImages/price.png'),
  city: require('@/src/assets/images/sellImages/titleImages/city.png'),
  sale: require('@/src/assets/images/sellImages/titleImages/sale.png'),
  // images saleTitle darkmode
  titleD: require('@/src/assets/images/sellImages/titleImages/titleD.png'),
  priceD: require('@/src/assets/images/sellImages/titleImages/priceD.png'),
  cityD: require('@/src/assets/images/sellImages/titleImages/cityD.png'),
  saleD: require('@/src/assets/images/sellImages/titleImages/saleD.png'),
};

export default ImagesPath;

export type ImagePathKey = keyof typeof ImagesPath;
