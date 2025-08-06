import ButtonReg from '@/src/components/atom/buttons/buttonReg';
import HomeHeader from '@/src/components/molecule/home/homeHeader';
import { lightColor } from '@/src/constants/colors';
import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeCategory = () => {
  const { hiddenIndex } = useLocalSearchParams();
  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader backAction={true} hiddenIndex={Number(hiddenIndex)} />
      <ButtonReg action='Volver' onPress={() => router.back()} />
    </SafeAreaView>
  );
};

export default HomeCategory;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: lightColor.background,
  },
});
