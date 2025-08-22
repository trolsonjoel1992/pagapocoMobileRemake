import IconsPath from '@/src/constants/iconsPath';
import {
  globalFontSizeMid,
  globalFontWeightMedium,
  globalIconsSma,
} from '@/src/constants/styles/globalStyles';
import { useAuth } from '@/src/context/AuthContext';
import { useLocation } from '@/src/context/LocationContext';
import { useTheme } from '@/src/context/ThemeContext';
import { usePathname } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';

// Declaración de tipos fuera del componente
type PositionButtonProps = {
  content: string | null;
  onPress?: () => void;
};

const PositionButton = ({ content, onPress }: PositionButtonProps) => {
  const { colors, theme } = useTheme();
  const { user } = useAuth();
  const { shareLocation, locationName } = useLocation();
  const pathname = usePathname();

  let variant: 'tabsHome' | 'homePublication' | 'homeCategory' = 'tabsHome';
  if (pathname.includes('publication')) {
    variant = 'homePublication';
  } else if (pathname.includes('category')) {
    variant = 'homeCategory';
  } else {
    variant = 'tabsHome';
  }

  let iconSource: any;
  let textContent: string | null = content;

  if (variant === 'tabsHome' || variant === 'homeCategory') {
    if (user && shareLocation) {
      iconSource =
        theme === 'dark' ? IconsPath.darkPositionEna : IconsPath.positionEna;
      textContent = locationName || 'Ubicación actual';
    } else if (user && !shareLocation) {
      iconSource =
        theme === 'dark' ? IconsPath.darkPositionSlt : IconsPath.positionSlt;
      textContent = 'Agregar ciudad';
    } else {
      iconSource =
        theme === 'dark' ? IconsPath.darkPositionDis : IconsPath.positionDis;
      textContent = 'No permitido';
    }
  } else if (variant === 'homePublication') {
    iconSource = theme === 'dark' ? IconsPath.darkPosition : IconsPath.position;
    textContent = 'Una ciudad';
  }

  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 'auto',
        height: 'auto',
      }}
      onPress={onPress}
    >
      <Image
        source={iconSource}
        style={{ width: globalIconsSma, height: globalIconsSma }}
      />
      <Text
        style={{
          fontWeight: globalFontWeightMedium,
          fontSize: globalFontSizeMid,
          color: colors.textPrimary,
        }}
      >
        {textContent}
      </Text>
    </TouchableOpacity>
  );
};

export default PositionButton;
