import ButtonMax from '@/src/components/atom/buttons/buttonMax';
import CardInfo from '@/src/components/atom/cards/profile/cardInfo';
import CardText from '@/src/components/atom/cards/profile/cardText';
import HeaderGeneric from '@/src/components/atom/header/headerGeneric';
import { useAuth } from '@/src/context/AuthContext';
import { useTheme } from '@/src/context/ThemeContext';
import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale } from 'react-native-size-matters';

const Information = () => {
  const { colors } = useTheme();
  const { user } = useAuth();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <HeaderGeneric
        title='Informacion de cuenta'
        onBackPress={() => router.back()}
      />
      <View style={{ gap: moderateScale(30) }}>
        <CardInfo
          profileImage={user?.profileImage}
          username={user?.username}
          email={user?.email || ''}
        />
        <CardText
          name='Nombre de usuario'
          content={user?.username || 'Sin nombre de usuario'}
        />
        <CardText name='Email' content={user?.email || ''} />
        <CardText
          name='Telefono'
          content={user?.phone || 'Sin número telefónico'}
        />
      </View>
      <ButtonMax action='Regresar al perfil' onPress={() => router.back()} />
    </SafeAreaView>
  );
};

export default Information;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
