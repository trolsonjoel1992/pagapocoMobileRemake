import { globalFontSizeReg } from '@/src/constants/styles/globalStyles';
import React from 'react';
import { Text } from 'react-native';

const SpacerM = () => {
  return (
    <Text
      style={{
        fontSize: globalFontSizeReg,
        marginBottom: '2.75%',
      }}
    >
      {'    '}
    </Text>
  );
};

export default SpacerM;
