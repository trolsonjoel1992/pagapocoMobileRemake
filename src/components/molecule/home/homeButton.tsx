import FilterButton from '@/src/components/atom/buttons/home/filterButton';
import PositionButton from '@/src/components/atom/buttons/home/positionButton';
import React from 'react';
import { View } from 'react-native';

const HomeButton = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '85%',
      }}
    >
      <PositionButton content='Position' icon='positionDis' />
      <FilterButton />
    </View>
  );
};

export default HomeButton;
