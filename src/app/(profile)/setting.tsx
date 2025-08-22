import ButtonMax from '@/src/components/atom/buttons/buttonMax';
import ButtonSetting from '@/src/components/atom/buttons/profile/buttonSetting';
import HeaderGeneric from '@/src/components/atom/header/headerGeneric';
import { lightColor } from '@/src/constants/colors';
import { useLocation } from '@/src/context/LocationContext';
import { useTheme } from '@/src/context/ThemeContext';
import * as Location from 'expo-location'; // <-- Importa expo-location
import { router } from 'expo-router';
import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale } from 'react-native-size-matters';

const Setting = () => {
  const { colors, toggleTheme, theme } = useTheme();
  const { shareLocation, setShareLocation, setLocationName } = useLocation();

  // Efecto para obtener y guardar la ciudad cuando se activa compartir ubicación
  useEffect(() => {
    const getAndSetLocationName = async () => {
      if (shareLocation) {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') return;
        const loc = await Location.getCurrentPositionAsync({});
        const [place] = await Location.reverseGeocodeAsync(loc.coords);
        if (place && place.city) {
          setLocationName(place.city);
        }
      } else {
        setLocationName(null);
      }
    };
    getAndSetLocationName();
  }, [shareLocation, setLocationName]);

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <HeaderGeneric title='Configuración' onBackPress={() => router.back()} />
      <ButtonSetting
        title='Compartir ubicación'
        enableToggle={shareLocation}
        settingKey='share_location'
        onPress={() => setShareLocation(!shareLocation)}
      />
      <ButtonSetting
        title='Mostrar número de teléfono'
        enableToggle={true}
        settingKey='show_phone'
      />
      <ButtonSetting
        title='Ocultar mis publicaciones'
        enableToggle={false}
        settingKey='hide_posts'
      />
      <ButtonSetting
        title='Notificaciones'
        enableToggle={true}
        settingKey='notifications'
      />
      <ButtonSetting title='Publicidad' enableToggle={true} settingKey='ads' />
      <ButtonSetting
        title='Modo oscuro'
        enableToggle={theme === 'dark'}
        settingKey='dark_mode'
        onPress={toggleTheme}
      />
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
