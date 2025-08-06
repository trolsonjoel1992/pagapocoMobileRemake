const IconsPath = {
  //auth
  buttonGoogle: require('@/src/assets/images/buttonImages/googleG.png'),
  //buttons
  whatsapp: require('@/src/assets/images/buttonImages/whatsappLogo.png'),
  whatsappActive: require('@/src/assets/images/buttonImages/whatsappLogoL.png'),
  //home/buttons
  login: require('@/src/assets/images/homeImages/login.png'),
  bell: require('@/src/assets/images/homeImages/bell.png'),
  bellActive: require('@/src/assets/images/homeImages/bellActive.png'),
  bellUnActive: require('@/src/assets/images/homeImages/bellUnActive.png'),
  position: require('@/src/assets/images/homeImages/position.png'),
  positionDis: require('@/src/assets/images/homeImages/positionDis.png'),
  positionEna: require('@/src/assets/images/homeImages/positionEna.png'),
  positionSlt: require('@/src/assets/images/homeImages/positionSlt.png'),
  filter: require('@/src/assets/images/homeImages/filter.png'),
  //home/header
  truck: require('@/src/assets/images/categoryImages/truck.png'),
  pickup: require('@/src/assets/images/categoryImages/pickup.png'),
  car: require('@/src/assets/images/categoryImages/car.png'),
  motorcycle: require('@/src/assets/images/categoryImages/motorcycle.png'),
  piece: require('@/src/assets/images/categoryImages/piece.png'),
  //home/input and header
  iconBack: require('@/src/assets/images/searchBarImages/arrowBack.png'),
  iconGlass: require('@/src/assets/images/searchBarImages/searchGlass.png'),
  //input
  input: require('@/src/assets/images/inputImages/input.png'),
  confirm: require('@/src/assets/images/inputImages/confirm.png'),
  denied: require('@/src/assets/images/inputImages/denied.png'),
  //profile
  iconInfo: require('@/src/assets/images/profileImages/info.png'),
  iconSetting: require('@/src/assets/images/profileImages/settings.png'),
  iconPrivacy: require('@/src/assets/images/profileImages/privacy.png'),
  iconPicture: require('@/src/assets/images/profileImages/picture.png'),
  iconDelete: require('@/src/assets/images/profileImages/delete.png'),
  iconClose: require('@/src/assets/images/profileImages/close.png'),
  //profile/settings
  toggleDisab: require('@/src/assets/images/profileImages/toggleDisab.png'),
  toggleEnabl: require('@/src/assets/images/profileImages/toggleEnabl.png'),
};

export default IconsPath;

export type IconPathKey = keyof typeof IconsPath;
