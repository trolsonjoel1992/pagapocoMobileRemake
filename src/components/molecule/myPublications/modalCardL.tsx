import RegHButton from '@/src/components/atom/buttons/myPublications/regHButton';
import RegSpacer from '@/src/components/atom/cards/myPublications/regSpacer';
import {
  globalBorderRadius,
  globalButtonWidthLar,
  globalFontSizeTitle,
} from '@/src/constants/styles/globalStyles';
import { useTheme } from '@/src/context/ThemeContext';
import React from 'react';
import { Text, View } from 'react-native';

type Props = { playPress?: () => void; trashPress?: () => void };

const ModalCardL = ({ playPress, trashPress }: Props) => {
  const { colors, theme } = useTheme();
  return (
    <View
      style={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        padding: '2.5%',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'flex-end',
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
      <View
        style={{
          gap: '1%',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <View
          style={{
            gap: '15%',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <View
            style={{
              width: globalButtonWidthLar,
              flexDirection: 'row-reverse',
              justifyContent: 'space-between',
            }}
          >
            <RegHButton
              icon={theme === 'dark' ? 'trashD' : 'trash'}
              onPress={trashPress}
            />
            <RegHButton
              icon={theme === 'dark' ? 'playD' : 'play'}
              onPress={playPress}
            />
            <RegSpacer />
            <RegSpacer />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ModalCardL;
