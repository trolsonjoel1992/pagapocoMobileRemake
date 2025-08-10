import ImagesPath from '@/src/constants/imagesPath';
import {
  globalFontSizeSmall,
  globalFontWeightSemiBold,
} from '@/src/constants/styles/globalStyles';
import { useTheme } from '@/src/context/ThemeContext';
import { router } from 'expo-router';
import React, { useEffect } from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Splash = () => {
  const { colors } = useTheme();
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/(tabs)/home');
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <View style={styles.empty}></View>
      <Image
        source={ImagesPath.splash}
        style={{ width: 120, height: 120, marginBottom: 20 }}
      />
      <ActivityIndicator size='large' color={colors.primary} />
      <View style={styles.empty}></View>
      <Text style={[styles.text, { color: colors.textPrimary }]}>
        PagaPocoMobile|2025
      </Text>
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  empty: {
    flex: 1,
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: globalFontSizeSmall,
    fontWeight: globalFontWeightSemiBold,
  },
});
