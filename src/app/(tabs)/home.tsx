import HomeHeader from '@/src/components/molecule/home/homeHeader';
import UpgradePublication from '@/src/components/molecule/myPublications/upgradePublication';
import { useTheme } from '@/src/context/ThemeContext';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
  const [hiddenIndex, setHiddenIndex] = useState<number | null>(null);
  const { colors, theme } = useTheme();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <HomeHeader backAction={false} setHiddenIndex={setHiddenIndex} />
      <UpgradePublication />
    </SafeAreaView>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
