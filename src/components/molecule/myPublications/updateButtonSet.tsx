import ButtonMax from '@/src/components/atom/buttons/buttonMax';
import ButtonMaxDis from '@/src/components/atom/buttons/buttonMaxDis';
import RegHButton from '@/src/components/atom/buttons/myPublications/regHButton';
import RegHSpace from '@/src/components/atom/buttons/myPublications/regHSpace';
import { globalButtonWidthLar } from '@/src/constants/styles/globalStyles';
import { useTheme } from '@/src/context/ThemeContext';
import React from 'react';
import { View } from 'react-native';
type Props = {
  isSold?: boolean;
  isPremium?: boolean;
  deletePress?: () => void;
  sellPress?: () => void;
  newSellPress?: () => void;
  pausePress?: () => void;
  upgradePress?: () => void;
  editPress?: () => void;
};
const UpdateButtonSet: React.FC<Props> = ({
  isSold,
  isPremium,
  deletePress,
  sellPress,
  newSellPress,
  pausePress,
  editPress,
  upgradePress,
}) => {
  const { theme } = useTheme();

  return (
    <View>
      <View
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1.5%',
        }}
      >
        {isSold ? (
          <ButtonMaxDis action='Vender otro igual' onPress={newSellPress} />
        ) : (
          <ButtonMax action='Marcar como vendido' onPress={sellPress} />
        )}
        {!isSold && (
          <View
            style={{
              width: globalButtonWidthLar,

              flexDirection: 'row-reverse',
              justifyContent: 'space-between',
            }}
          >
            <RegHButton
              icon={theme === 'dark' ? 'trashD' : 'trash'}
              onPress={deletePress}
            />
            <RegHButton
              icon={theme === 'dark' ? 'pauseD' : 'pause'}
              onPress={pausePress}
            />
            <RegHButton
              icon={theme === 'dark' ? 'editD' : 'edit'}
              onPress={editPress}
            />
            {isPremium ? (
              <RegHSpace />
            ) : (
              <RegHButton
                icon={theme === 'dark' ? 'upgradeD' : 'upgrade'}
                onPress={upgradePress}
              />
            )}
          </View>
        )}
      </View>
    </View>
  );
};
export default UpdateButtonSet;
