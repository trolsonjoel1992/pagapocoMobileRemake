import { globalIconsSma } from '@/src/constants/globalStyles';
import IconsPath from '@/src/constants/iconsPath';
import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

type NotificationButtonProps = {
  icon: keyof typeof IconsPath;
  onPress?: () => void;
};
const NotificationButton = ({ icon, onPress }: NotificationButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        source={IconsPath[icon]}
        style={{ width: globalIconsSma, height: globalIconsSma }}
      />
    </TouchableOpacity>
  );
};

export default NotificationButton;
