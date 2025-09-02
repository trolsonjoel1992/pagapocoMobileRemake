import ButtonReg from '@/src/components/atom/buttons/buttonReg';
import HeaderGeneric from '@/src/components/atom/header/headerGeneric';
import CardFremiun from '@/src/components/molecule/sell/cardFremiun';
import CardPremiun from '@/src/components/molecule/sell/cardPremiun';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SearchScreen() {
  const [selected, setSelected] = useState<'premiun' | 'fremiun' | null>(null);

  return (
    <SafeAreaView style={styles.container}>
      <HeaderGeneric title='Plan de Venta' onBackPress={router.back} />
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
      <ButtonReg action='Continuar' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
  },
});
