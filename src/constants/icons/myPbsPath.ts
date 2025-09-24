const myPbsPath = {
  //lightmode
  trash: require('@/src/assets/images/myPbtnsImages/trash.png'),
  edit: require('@/src/assets/images/myPbtnsImages/edit.png'),
  pause: require('@/src/assets/images/myPbtnsImages/pause.png'),
  play: require('@/src/assets/images/myPbtnsImages/play.png'),
  upgrade: require('@/src/assets/images/myPbtnsImages/upgrade.png'),
  editP: require('@/src/assets/images/myPbtnsImages/editP.png'),
  //darkmode
  trashD: require('@/src/assets/images/myPbtnsImages/trashD.png'),
  editD: require('@/src/assets/images/myPbtnsImages/editD.png'),
  pauseD: require('@/src/assets/images/myPbtnsImages/pauseD.png'),
  playD: require('@/src/assets/images/myPbtnsImages/playD.png'),
  upgradeD: require('@/src/assets/images/myPbtnsImages/upgradeD.png'),
  editPD: require('@/src/assets/images/myPbtnsImages/editPD.png'),
};

export default myPbsPath;

export type MyPbsIcons = keyof typeof myPbsPath;
