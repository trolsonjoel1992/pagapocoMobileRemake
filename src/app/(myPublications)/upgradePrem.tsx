import ButtonCancel from '@/src/components/atom/buttons/buttonCancel';
import ButtonReg from '@/src/components/atom/buttons/buttonReg';
import UpgradePublication from '@/src/components/molecule/myPublications/upgradePublication';
import {
  globalFontSizeTitle,
  globalFontWeightBold,
} from '@/src/constants/styles/globalStyles';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const UpgradePrem = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Suscribí tu publicacion al plan ¡Premium!
      </Text>
      <UpgradePublication />
      <ButtonCancel />
      <ButtonReg action='confirmar' onPress={() => {}} />
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
