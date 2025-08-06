import ButtonProfile from '@/src/components/atom/buttons/profile/buttonProfile';
import CardProfile from '@/src/components/atom/cards/cardProfile';
import { lightColor } from '@/src/constants/colors';
import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale } from 'react-native-size-matters';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <CardProfile username='Un Usuario mas largo' />
      </View>
      <ButtonProfile
        title='Información de la cuenta'
        icon='iconInfo'
        onPress={() => router.push('/(profile)/information')}
      />
      <ButtonProfile
        title='Configuracion'
        icon='iconSetting'
        onPress={() => router.push('/(profile)/setting')}
      />
      <ButtonProfile title='Privacidad' icon='iconPrivacy' />
      <ButtonProfile title='Foto de perfil' icon='iconPicture' />
      <ButtonProfile title='Eliminar cuenta' icon='iconDelete' />
      <ButtonProfile title='Cerrar sesión' icon='iconClose' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: lightColor.background,
  },
  header: {
    width: '100%',
    alignItems: 'center',
    marginBottom: moderateScale(45),
  },
});
