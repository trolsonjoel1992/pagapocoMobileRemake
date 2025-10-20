const myPbsPath = {
  //lightmode
  trash: require('@/src/assets/images/myPbtnsImages/trash.png'),
  edit: require('@/src/assets/images/myPbtnsImages/edit.png'),
  pause: require('@/src/assets/images/myPbtnsImages/pause.png'),
  play: require('@/src/assets/images/myPbtnsImages/play.png'),
  upgrade: require('@/src/assets/images/myPbtnsImages/upgrade.png'),
  editP: require('@/src/assets/images/myPbtnsImages/editP.png'),
  premiun: require('@/src/assets/images/myPbtnsImages/crown.png'),
  bikeE: require('@/src/assets/images/myPbtnsImages/bikeE.png'),
  carE: require('@/src/assets/images/myPbtnsImages/carE.png'),
  trailerE: require('@/src/assets/images/myPbtnsImages/trailerE.png'),
  truckE: require('@/src/assets/images/myPbtnsImages/truckE.png'),
  pieceE: require('@/src/assets/images/myPbtnsImages/pieceE.png'),
  //darkmode
  trashD: require('@/src/assets/images/myPbtnsImages/trashD.png'),
  editD: require('@/src/assets/images/myPbtnsImages/editD.png'),
  pauseD: require('@/src/assets/images/myPbtnsImages/pauseD.png'),
  playD: require('@/src/assets/images/myPbtnsImages/playD.png'),
  upgradeD: require('@/src/assets/images/myPbtnsImages/upgradeD.png'),
  editPD: require('@/src/assets/images/myPbtnsImages/editPD.png'),
  premiunD: require('@/src/assets/images/myPbtnsImages/crownD.png'),
  bikeED: require('@/src/assets/images/myPbtnsImages/bikeED.png'),
  carED: require('@/src/assets/images/myPbtnsImages/carED.png'),
  trailerED: require('@/src/assets/images/myPbtnsImages/trailerED.png'),
  truckED: require('@/src/assets/images/myPbtnsImages/truckED.png'),
  pieceED: require('@/src/assets/images/myPbtnsImages/pieceED.png'),
};

export default myPbsPath;

export type MyPbsIcons = keyof typeof myPbsPath;
