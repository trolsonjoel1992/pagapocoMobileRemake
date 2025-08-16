import CustomTabButton from '@/src/components/atom/buttons/tab/customTabButton';
import IconsPath from '@/src/constants/iconsPath';
import {
  globalFontSizeTiny,
  globalFontWeightSemiBold,
  globalIconsMid,
  globalTabHeight,
} from '@/src/constants/styles/globalStyles';
import { useTheme } from '@/src/context/ThemeContext';
import { Tabs } from 'expo-router';
import React from 'react';
import { Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { verticalScale } from 'react-native-size-matters';

export default function TabLayout() {
  const { colors, theme } = useTheme();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <Tabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: colors.primary,
            height: globalTabHeight,
            paddingTop: verticalScale(6),
            paddingBottom: verticalScale(4),
            justifyContent: 'space-evenly',
            alignItems: 'center',
          },
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: globalFontSizeTiny,
            fontWeight: globalFontWeightSemiBold,
            marginTop: verticalScale(2),
          },
          tabBarActiveTintColor: colors.textSecondary,
          tabBarInactiveTintColor: colors.textSecondary,
        }}
      >
        <Tabs.Screen
          name='home'
          options={{
            title: 'Inicio',
            tabBarButton: props => (
              <CustomTabButton {...props} routeName='home' />
            ),
            tabBarIcon: () => (
              <Image
                source={
                  theme === 'dark' ? IconsPath.tabHomeD : IconsPath.tabHome
                }
                style={{
                  width: globalIconsMid,
                  height: globalIconsMid,
                }}
                resizeMode='contain'
              />
            ),
          }}
        />
        <Tabs.Screen
          name='myPublications'
          options={{
            title: 'Mis publicaciones',
            tabBarButton: props => (
              <CustomTabButton {...props} routeName='myPublications' />
            ),
            tabBarIcon: () => (
              <Image
                source={
                  theme === 'dark' ? IconsPath.myPublsD : IconsPath.tabMyPubls
                }
                style={{
                  width: globalIconsMid,
                  height: globalIconsMid,
                }}
                resizeMode='contain'
              />
            ),
          }}
        />
        <Tabs.Screen
          name='sell'
          options={{
            title: 'Vender',
            tabBarButton: props => (
              <CustomTabButton {...props} routeName='sell' />
            ),
            tabBarIcon: () => (
              <Image
                source={theme === 'dark' ? IconsPath.sellD : IconsPath.tabSell}
                style={{
                  width: globalIconsMid,
                  height: globalIconsMid,
                }}
                resizeMode='contain'
              />
            ),
          }}
        />
        <Tabs.Screen
          name='favorites'
          options={{
            title: 'Favoritos',
            tabBarButton: props => (
              <CustomTabButton {...props} routeName='favorites' />
            ),
            tabBarIcon: () => (
              <Image
                source={
                  theme === 'dark'
                    ? IconsPath.favoritesD
                    : IconsPath.tabFavorites
                }
                style={{
                  width: globalIconsMid,
                  height: globalIconsMid,
                }}
                resizeMode='contain'
              />
            ),
          }}
        />
        <Tabs.Screen
          name='profile'
          options={{
            title: 'Perfil',
            tabBarButton: props => (
              <CustomTabButton {...props} routeName='profile' />
            ),
            tabBarIcon: () => (
              <Image
                source={
                  theme === 'dark' ? IconsPath.profileD : IconsPath.tabProfile
                }
                style={{
                  width: globalIconsMid,
                  height: globalIconsMid,
                }}
                resizeMode='contain'
              />
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
}
