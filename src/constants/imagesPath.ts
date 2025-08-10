const ImagesPath = {
  logo: require('@/src/assets/images/logoImages/pagapoco.png'),
  splash: require('@/src/assets/images/logoImages/pagapocoSplash.png'),
  google: require('@/src/assets/images/logoImages/loginGoogle.png'),
  finger: require('@/src/assets/images/buttonImages/finger.png'),
  user: require('@/src/assets/images/profileImages/user.png'),
  darkUser: require('@/src/assets/images/profileImages/darkUser.png'),
  modalCheck: require('@/src/assets/images/modalImages/modalCheck.png'),
  modalQuestion: require('@/src/assets/images/modalImages/modalQuestion.png'),
  modalWarning: require('@/src/assets/images/modalImages/modalWarning.png'),
};

export default ImagesPath;

export type ImagePathKey = keyof typeof ImagesPath;
