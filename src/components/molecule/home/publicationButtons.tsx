import ButtonReg from '@/src/components/atom/buttons/buttonReg';
import ButtonRegDis from '@/src/components/atom/buttons/buttonRegDis';
import ButtonDetails from '@/src/components/atom/buttons/home/buttonDetails';
import ButtonWhatsapp from '@/src/components/atom/buttons/home/buttonWhatsapp';
import { globalButtonWidthEx } from '@/src/constants/styles/globalStyles';
import React from 'react';
import { View } from 'react-native';

type Props = {
  value: boolean;
  isPremium?: boolean;
};

const PublicationButtons = ({ value, isPremium }: Props) => {
  const showEnabled = value || isPremium;

  return (
    <View>
      <ButtonDetails />
      <View
        style={{
          flexDirection: 'row',
          width: globalButtonWidthEx,
          justifyContent: 'space-between',
        }}
      >
        {showEnabled ? (
          <ButtonReg action='Preguntar' />
        ) : (
          <ButtonRegDis action='Preguntar' />
        )}
        <ButtonWhatsapp enabled={value} />
      </View>
    </View>
  );
};

export default PublicationButtons;
