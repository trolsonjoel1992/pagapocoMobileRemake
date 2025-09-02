import ButtonReg from '@/src/components/atom/buttons/buttonReg';
import HeaderGeneric from '@/src/components/atom/header/headerGeneric';
import CardFremiun from '@/src/components/molecule/sell/cardFremiun';
import CardPremiun from '@/src/components/molecule/sell/cardPremiun';
import {
  globalFontSizeTitle,
  globalFontWeightBold,
} from '@/src/constants/styles/globalStyles';
import { usePublication } from '@/src/context/PublicationContext';
import { useTheme } from '@/src/context/ThemeContext';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale } from 'react-native-size-matters';

const SalePlan = () => {
  const [selected, setSelected] = useState<'premiun' | 'fremiun' | null>(null);
  const { colors } = useTheme();
  const { updatePublication } = usePublication();

  const handleContinue = () => {
    updatePublication({
      isPremium: selected === 'premiun',
    });

    router.push('/(sell)/sellImages');
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <HeaderGeneric title='Plan de Venta' onBackPress={router.back} />
      <Text style={[styles.title, { color: colors.textPrimary }]}>
        Selecciona un plan
      </Text>
      <CardPremiun
        selectedP={selected === 'premiun'}
        unSelectedP={selected === 'fremiun'}
        onPress={() => setSelected('premiun')}
      />
      <CardFremiun
        selectedF={selected === 'fremiun'}
        unSelectedF={selected === 'premiun'}
        onPress={() => setSelected('fremiun')}
      />
      {selected && <ButtonReg action='Continuar' onPress={handleContinue} />}
    </SafeAreaView>
  );
};

export default SalePlan;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: globalFontSizeTitle,
    fontWeight: globalFontWeightBold,
    marginBottom: moderateScale(5),
  },
});
