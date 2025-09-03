import SelectButtons from '@/src/components/molecule/sell/selectButons';
import {
  globalFontSizeReg,
  globalFontSizeTitle,
  globalFontWeightBold,
} from '@/src/constants/styles/globalStyles';
import { useAuth } from '@/src/context/AuthContext';
import { usePublication } from '@/src/context/PublicationContext';
import { useTheme } from '@/src/context/ThemeContext';
import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale } from 'react-native-size-matters';

export default function NotificationsScreen() {
  const { colors } = useTheme();
  const { updatePublication } = usePublication();
  const { user } = useAuth();

  const handleCategorySelect = (category: string) => {
    const id = Date.now().toString();
    updatePublication({
      id,
      userEmail: user?.email ?? '',
      category,
    });
    router.push('/(sell)/sellForm');
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <View style={styles.content}>
        <Text style={[styles.title, { color: colors.textPrimary }]}>
          ¡Vende en nuestra app!
        </Text>
        <Text style={[styles.subtitle, { color: colors.textPrimary }]}>
          Selecciona una categoría
        </Text>
        <SelectButtons onSelectCategory={handleCategorySelect} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: globalFontSizeTitle,
    fontWeight: globalFontWeightBold,
    marginBottom: moderateScale(10),
  },
  subtitle: {
    fontSize: globalFontSizeReg,
    fontWeight: globalFontWeightBold,
    textAlign: 'center',
  },
});
