import ButtonMax from '@/src/components/atom/buttons/buttonMax';
import CardInfo from '@/src/components/atom/cards/profile/cardInfo';
import CardText from '@/src/components/atom/cards/profile/cardText';
import HeaderGeneric from '@/src/components/atom/header/headerGeneric';
import { useTheme } from '@/src/context/ThemeContext';
import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale } from 'react-native-size-matters';

const Information = () => {
  const { colors } = useTheme();
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <HeaderGeneric
        title='Informacion de cuenta'
        onBackPress={() => router.back()}
      />
      <View style={{ gap: moderateScale(30) }}>
        <CardInfo user='Un usuario' email='email@example.com' />
        <CardText name='Nombre de usuario' content='Un usuario' />
        <CardText name='Email' content='email@example.com' />
        <CardText name='Telefono' content='123-456-7890' />
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
