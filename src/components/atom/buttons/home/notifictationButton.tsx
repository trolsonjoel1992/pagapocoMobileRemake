import IconsPath from '@/src/constants/iconsPath';
import { globalIconsSma } from '@/src/constants/styles/globalStyles';
import { useTheme } from '@/src/context/ThemeContext';
import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

type NotificationButtonProps = {
  iconKey?: string;
  login?: boolean;
  notification?: boolean;
  onPress?: () => void;
};
type IconKey = keyof typeof IconsPath;

const NotificationButton = ({
  login,
  notification,
  onPress,
}: NotificationButtonProps) => {
  const { theme } = useTheme();
  let icon: IconKey;

  if (login) {
    icon = theme === 'dark' ? 'darkBell' : 'bell';
  } else if (notification) {
    icon = theme === 'dark' ? 'darkBellAct' : 'bellAct';
  } else {
    icon = theme === 'dark' ? 'darkBellUnA' : 'bellUnA';
  }

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
