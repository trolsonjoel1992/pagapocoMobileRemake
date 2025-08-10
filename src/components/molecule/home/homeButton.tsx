import FilterButton from '@/src/components/atom/buttons/home/filterButton';
import PositionButton from '@/src/components/atom/buttons/home/positionButton';
import { useTheme } from '@/src/context/ThemeContext';
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
      <PositionButton
        content='No permitido'
        icon={theme === 'dark' ? 'darkPositionDis' : 'positionDis'}
      />
      <FilterButton />
    </View>
  );
};

export default HomeButton;
