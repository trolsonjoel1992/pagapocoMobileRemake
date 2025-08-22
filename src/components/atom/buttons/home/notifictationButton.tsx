import IconsPath from '@/src/constants/iconsPath';
import { globalIconsSma } from '@/src/constants/styles/globalStyles';
import { useAuth } from '@/src/context/AuthContext';
import { useTheme } from '@/src/context/ThemeContext';
import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

type NotificationButtonProps = {
  notification?: boolean; // true si hay notificaciones activas
  onPress?: () => void;
};
type IconKey = keyof typeof IconsPath;

const NotificationButton = ({
  notification,
  onPress,
}: NotificationButtonProps) => {
  const { theme } = useTheme();
  const { user } = useAuth();
  let icon: IconKey;

  if (!user) {
    icon = theme === 'dark' ? 'darkBellUnA' : 'bellUnA';
  } else if (notification) {
    icon = theme === 'dark' ? 'darkBellAct' : 'bellAct';
  } else {
    icon = theme === 'dark' ? 'darkBell' : 'bell';
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
