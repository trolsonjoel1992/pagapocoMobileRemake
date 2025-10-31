import ButtonCancel from '@/src/components/atom/buttons/buttonCancel';
import ButtonReg from '@/src/components/atom/buttons/buttonReg';
import HeaderGeneric from '@/src/components/atom/header/headerGeneric';
import UpgradePublication from '@/src/components/molecule/myPublications/upgradePublication';
import {
  globalFontSizeTitle,
  globalFontWeightBold,
} from '@/src/constants/styles/globalStyles';
import { usePublication } from '@/src/context/PublicationContext';
import { useTheme } from '@/src/context/ThemeContext';
import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const UpgradePrem = () => {
  const { colors } = useTheme();
  const { id } = useLocalSearchParams<{ id: string }>();
  const { updatePublicationById } = usePublication();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <HeaderGeneric
        title='Actualizar a Premium'
        onBackPress={() => {
          router.back();
        }}
      />
      <Text style={[styles.title, { color: colors.textPrimary }]}>
        Suscribí tu publicacion{'\n'}al plan ¡Premium!
      </Text>
      <UpgradePublication />
      <ButtonCancel />
      <ButtonReg
        action='confirmar'
        onPress={async () => {
          if (id) {
            await updatePublicationById(id, { isPremium: true });
            router.back();
          }
        }}
      />
    </SafeAreaView>
  );
};

export default UpgradePrem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    textAlign: 'center',
    fontSize: globalFontSizeTitle,
    fontWeight: globalFontWeightBold,
  },
});
