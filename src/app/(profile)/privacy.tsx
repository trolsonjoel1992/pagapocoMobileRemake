import HeaderGeneric from '@/src/components/atom/header/headerGeneric';
import PrivacyInputs from '@/src/components/molecule/profile/privacyInputs';
import { useTheme } from '@/src/context/ThemeContext';
import { router } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Privacy = () => {
  const { colors } = useTheme();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <HeaderGeneric title='Privacidad' onBackPress={() => router.back()} />
      <PrivacyInputs onBack={() => router.back()} />
    </SafeAreaView>
  );
};

export default Privacy;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
