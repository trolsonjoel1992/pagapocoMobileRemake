const IconsPath = {
  //header
  iconBack: require('@/src/assets/images/buttonImages/arrowBack.png'),
  //auth
  buttonGoogle: require('@/src/assets/images/buttonImages/googleG.png'),
  //input
  input: require('@/src/assets/images/inputImages/input.png'),
  confirm: require('@/src/assets/images/inputImages/confirm.png'),
  denied: require('@/src/assets/images/inputImages/denied.png'),
};

export default IconsPath;

export type IconPathKey = keyof typeof IconsPath;
