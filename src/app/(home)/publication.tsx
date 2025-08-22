import HomeHeader from '@/src/components/molecule/home/homeHeader';
import PublicationButtons from '@/src/components/molecule/home/publicationButtons';
import { useTheme } from '@/src/context/ThemeContext';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Publication = () => {
  const { colors } = useTheme();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <HomeHeader backAction={true} />
      <PublicationButtons />
    </SafeAreaView>
  );
};

export default Publication;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
