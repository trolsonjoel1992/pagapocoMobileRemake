import CardProfile from '@/src/components/atom/cards/profile/cardProfile';
import ProfileButtons from '@/src/components/molecule/profile/profileButtons';
import { useTheme } from '@/src/context/ThemeContext';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale } from 'react-native-size-matters';

export default function ProfileScreen() {
  const { colors } = useTheme();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <View style={styles.header}>
        <CardProfile user='Un Usuario mas largo' />
      </View>
      <ProfileButtons />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: moderateScale(-20),
  },
  header: {
    width: '100%',
    alignItems: 'center',
    marginBottom: moderateScale(30),
  },
});
