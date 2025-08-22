import IconsPath from '@/src/constants/iconsPath';
import {
  globalFontSizeMid,
  globalFontWeightMedium,
  globalIconsSma,
} from '@/src/constants/styles/globalStyles';
import { useTheme } from '@/src/context/ThemeContext';
import { usePathname } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';

type HeaderButtonProps = {
  onFilterPress?: () => void;
  onSharePress?: () => void;
};

const HeaderButton = ({ onFilterPress, onSharePress }: HeaderButtonProps) => {
  const { colors, theme } = useTheme();
  const pathname = usePathname();

  const isFilter = pathname === '/home' || pathname === '/tabs/home';
  const icon = isFilter
    ? theme === 'dark'
      ? IconsPath.darkFilter
      : IconsPath.filter
    : theme === 'dark'
      ? IconsPath.darkShare
      : IconsPath.share;
  const buttonText = isFilter ? 'Filtros' : 'Compartir';

  const handlePress = isFilter ? onFilterPress : onSharePress;

  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 'auto',
        height: 'auto',
      }}
      onPress={handlePress}
    >
      <Image
        source={icon}
        style={{ width: globalIconsSma, height: globalIconsSma }}
      />
      <Text
        style={{
          fontWeight: globalFontWeightMedium,
          fontSize: globalFontSizeMid,
          color: colors.textPrimary,
        }}
      >
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};

export default HeaderButton;
