import HeaderGeneric from '@/src/components/atom/header/headerGeneric';
import MotorcycleForm from '@/src/components/molecule/sell/motorcycleForm';
import PieceForm from '@/src/components/molecule/sell/pieceForm';
import VehicleForm from '@/src/components/molecule/sell/vehicleForm';
import {
  globalFontSizeReg,
  globalFontWeightBold,
} from '@/src/constants/styles/globalStyles';
import { usePublication } from '@/src/context/PublicationContext';
import { useTheme } from '@/src/context/ThemeContext';
import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale } from 'react-native-size-matters';

const SellForm = () => {
  const { publication, clearPublication } = usePublication(); // Agregar clearPublication
  const { colors } = useTheme();

  const handleBack = () => {
    clearPublication();
    router.back();
  };

  if (!publication?.category) {
    return (
      <SafeAreaView
        style={[styles.container, { backgroundColor: colors.background }]}
      >
        <View>
          <Text>Selecciona una categoría primero.</Text>
        </View>
      </SafeAreaView>
    );
  }

  let FormComponent = null;
  let title = null;
  if (
    publication.category === 'car' ||
    publication.category === 'pickup' ||
    publication.category === 'truck'
  ) {
    FormComponent = <VehicleForm />;
    title = 'Ingresa los datos de tu vehículo';
  } else if (publication.category === 'motorcycle') {
    FormComponent = <MotorcycleForm />;
    title = 'Ingresa los datos de tu motocicleta';
  } else if (publication.category === 'pieces') {
    FormComponent = <PieceForm />;
    title = 'Ingresa los datos de tu pieza';
  }

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <HeaderGeneric
        title='Cargar datos'
        onBackPress={handleBack} // Cambiar router.back por handleBack
      />
      <Text style={[styles.title, { color: colors.textPrimary }]}>{title}</Text>
      {FormComponent ? (
        FormComponent
      ) : (
        <View>
          <Text>Categoría no reconocida.</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: globalFontSizeReg,
    fontWeight: globalFontWeightBold,
    margin: moderateScale(20),
  },
});

export default SellForm;
