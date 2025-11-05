import ButtonReg from '@/src/components/atom/buttons/buttonReg';
import ButtonRegDis from '@/src/components/atom/buttons/buttonRegDis';
import ButtonDetails from '@/src/components/atom/buttons/home/detailsButton';
import ButtonWhatsapp from '@/src/components/atom/buttons/home/whatsappButton';
import { globalButtonWidthEx } from '@/src/constants/styles/globalStyles';
import { useAuth } from '@/src/context/AuthContext';
import React from 'react';
import { View } from 'react-native';

type Props = {
  isPremium?: boolean;
  hideContactButtons?: boolean;
};

const PublicationButtons = ({ isPremium, hideContactButtons }: Props) => {
  const { user } = useAuth();
  const value = !!user;
  const showEnabled = value || isPremium;

  return (
    <View>
      <ButtonDetails />
      {!hideContactButtons && (
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
      )}
    </View>
  );
};

export default PublicationButtons;
