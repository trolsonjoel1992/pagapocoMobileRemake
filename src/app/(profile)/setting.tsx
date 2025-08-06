import ButtonMax from '@/src/components/atom/buttons/buttonMax';
import HeaderGeneric from '@/src/components/atom/header/headerGeneric';
import ButtonSetting from '@/src/components/atom/profile/buttonSetting';
import { lightColor } from '@/src/constants/colors';
import { router } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale } from 'react-native-size-matters';

const Setting = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderGeneric title='Configuración' onBackPress={() => router.back()} />
      <ButtonSetting title='Compartir ubicación' enableToggle={false} />
      <ButtonSetting title='Mostrar número de teléfono' enableToggle={true} />
      <ButtonSetting title='Ocultar mis publicaciones' enableToggle={false} />
      <ButtonSetting title='Notificaciones' enableToggle={true} />
      <ButtonSetting title='Publicidad' enableToggle={true} />
      <ButtonSetting title='Modo oscuro' enableToggle={false} />
      <ButtonMax
        action='Regresar al perfil'
        onPress={() => router.push('/(tabs)/profile')}
      />
    </SafeAreaView>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    gap: moderateScale(10),
    justifyContent: 'space-between',
    backgroundColor: lightColor.background,
  },
});
