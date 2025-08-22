import HeaderButton from '@/src/components/atom/buttons/home/headerButton';
import PositionButton from '@/src/components/atom/buttons/home/positionButton';
import { useTheme } from '@/src/context/ThemeContext';
import { router } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

const HomeButton = () => {
  const { theme } = useTheme();

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '85%',
      }}
    >
      <PositionButton content='No permitido' />
      <HeaderButton onFilterPress={() => router.push('/(home)/publication')} />
    </View>
  );
};

export default HomeButton;
