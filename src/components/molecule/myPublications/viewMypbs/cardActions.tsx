import SmallHButtonL from '@/src/components/atom/buttons/myPublications/smallHbuttonL';
import SmallHButtonLDis from '@/src/components/atom/buttons/myPublications/smallHbuttonLDis';
import SmallHButtonS from '@/src/components/atom/buttons/myPublications/smallHButtonS';
import ModDelete from '@/src/components/molecule/modal/myPublication/modDelete';
import { globalButtonWidthSp } from '@/src/constants/styles/globalStyles';
import { useTheme } from '@/src/context/ThemeContext';
import React from 'react';
import { View } from 'react-native';
type Props = {
  isSold?: boolean;
  deletePress?: () => void;
  onSellPress?: () => void;
  onNewSellPress?: () => void;
  onPausePress?: () => void;
  onUpgradePress?: () => void;
  onEditPress?: () => void;
};
const CardActions: React.FC<Props> = ({
  isSold,
  deletePress,
  onSellPress,
  onNewSellPress,
  onPausePress,
  onEditPress,
}) => {
  const { theme } = useTheme();
  const [warningVisible, setWarningVisible] = React.useState(false);
  const showWarning = () => {
    setWarningVisible(true);
  };
  const handleDeleteConfirm = () => {
    setWarningVisible(false);
    deletePress?.();
  };
  const handleDeleteCancel = () => {
    setWarningVisible(false);
  };
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
          <SmallHButtonLDis onPress={onNewSellPress} />
        ) : (
          <SmallHButtonL onPress={onSellPress} />
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
              onPress={showWarning}
            />
            <SmallHButtonS
              icon={theme === 'dark' ? 'pauseD' : 'pause'}
              onPress={onPausePress}
            />
            <SmallHButtonS
              icon={theme === 'dark' ? 'editD' : 'edit'}
              onPress={onEditPress}
            />
            <SmallHButtonS icon={theme === 'dark' ? 'upgradeD' : 'upgrade'} />
          </View>
        )}
      </View>
      {warningVisible && (
        <ModDelete
          visible={warningVisible}
          pressCancel={handleDeleteCancel}
          pressAction={handleDeleteConfirm}
        />
      )}
    </View>
  );
};
export default CardActions;
