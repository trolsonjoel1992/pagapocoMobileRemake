const ImagesPath = {
  logo: require('@/src/assets/images/logoImages/pagapoco.png'),
  google: require('@/src/assets/images/logoImages/loginGoogle.png'),
  finger: require('@/src/assets/images/buttonImages/finger.png'),
  user: require('@/src/assets/images/profileImages/user.png'),
};

export default ImagesPath;

export type ImagePathKey = keyof typeof ImagesPath;
