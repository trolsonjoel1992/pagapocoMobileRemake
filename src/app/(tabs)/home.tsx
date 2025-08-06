import ButtonRegDis from '@/src/components/atom/buttons/buttonRegDis';
import ButtonWhatsapp from '@/src/components/atom/buttons/home/buttonWhatsapp';
import HomeHeader from '@/src/components/molecule/home/homeHeader';
import { lightColor } from '@/src/constants/colors';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
  const [hiddenIndex, setHiddenIndex] = useState<number | null>(null);

  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader backAction={false} setHiddenIndex={setHiddenIndex} />
      <View
        style={{
          flexDirection: 'row',
          width: '95%',
          justifyContent: 'space-between',
        }}
      >
        <ButtonWhatsapp />
        <ButtonRegDis action='Preguntar' />
      </View>
    </SafeAreaView>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: lightColor.background,
  },
});
