import SmallHButtonL from '@/src/components/atom/buttons/myPublications/smallHbuttonL';
import SmallHButtonLDis from '@/src/components/atom/buttons/myPublications/smallHbuttonLDis';
import SmallHButtonS from '@/src/components/atom/buttons/myPublications/smallHButtonS';
import SmallHSpaceS from '@/src/components/atom/buttons/myPublications/smallHSpaceS';
import { globalButtonWidthSp } from '@/src/constants/styles/globalStyles';
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
  playPress?: () => void;
  upgradePress?: () => void;
  editPress?: () => void;
};

const CardActions: React.FC<Props> = ({
  isSold,
  isPremium,
  deletePress,
  sellPress,
  newSellPress,
  pausePress,
  playPress,
  upgradePress,
  editPress,
}) => {
  const { theme } = useTheme();

  return (
    <View>
      <View
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '15%',
        }}
      >
        {isSold ? (
          <SmallHButtonLDis onPress={newSellPress} />
        ) : (
          <SmallHButtonL onPress={sellPress} />
        )}
        {!isSold && (
          <View
            style={{
              width: globalButtonWidthSp,
              flexDirection: 'row-reverse',
              justifyContent: 'space-between',
            }}
          >
            <SmallHButtonS
              icon={theme === 'dark' ? 'trashD' : 'trash'}
              onPress={deletePress}
            />
            <SmallHButtonS
              icon={theme === 'dark' ? 'pauseD' : 'pause'}
              onPress={pausePress}
            />
            <SmallHButtonS
              icon={theme === 'dark' ? 'editD' : 'edit'}
              onPress={editPress}
            />
            {isPremium ? (
              <SmallHSpaceS />
            ) : (
              <SmallHButtonS
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

export default CardActions;
