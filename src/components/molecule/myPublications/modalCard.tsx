import SmallHButtonS from '@/src/components/atom/buttons/myPublications/smallHButtonS';
import SpacerL from '@/src/components/atom/cards/myPublications/spacerL';
import SpacerM from '@/src/components/atom/cards/myPublications/spacerM';
import SpacerS from '@/src/components/atom/cards/myPublications/spacerS';
import SpacerXL from '@/src/components/atom/cards/myPublications/spacerXL';
import {
  globalBorderRadius,
  globalButtonWidthSp,
  globalFontSizeTitle,
} from '@/src/constants/styles/globalStyles';
import { useTheme } from '@/src/context/ThemeContext';
import React from 'react';
import { Text, View } from 'react-native';

type Props = { playPress?: () => void; trashPress?: () => void };

const ModalCard = ({ playPress, trashPress }: Props) => {
  const { colors, theme } = useTheme();

  return (
    <View
      style={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        padding: '1%',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.modal,
        borderRadius: globalBorderRadius,
      }}
    >
      <Text
        style={{
          top: '25%',
          fontWeight: 'bold',
          textAlign: 'center',
          position: 'absolute',
          color: colors.textSecondary,
          fontSize: globalFontSizeTitle,
        }}
      >
        Publicación Pausada
      </Text>

      <SpacerM />
      <View
        style={{
          gap: '1%',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <SpacerXL />
        <View
          style={{
            gap: '15%',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <SpacerL />
          <View
            style={{
              width: globalButtonWidthSp,
              flexDirection: 'row-reverse',
              justifyContent: 'space-between',
            }}
          >
            <SmallHButtonS
              icon={theme === 'dark' ? 'trashD' : 'trash'}
              onPress={trashPress}
            />
            <SmallHButtonS
              icon={theme === 'dark' ? 'playD' : 'play'}
              onPress={playPress}
            />
            <SpacerS />
            <SpacerS />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ModalCard;
