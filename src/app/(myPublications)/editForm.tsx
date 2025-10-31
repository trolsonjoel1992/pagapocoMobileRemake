import HeaderGeneric from '@/src/components/atom/header/headerGeneric';
import EditMotorcycleForm from '@/src/components/molecule/myPublications/editForms/editMotorcycleForm';
import EditPieceForm from '@/src/components/molecule/myPublications/editForms/editPieceForm';
import EditVehicleForm from '@/src/components/molecule/myPublications/editForms/editVehicleForm';
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

const EditForm = () => {
  const { publication } = usePublication();
  const { colors } = useTheme();

  if (!publication?.category) {
    return (
      <SafeAreaView
        style={[styles.container, { backgroundColor: colors.background }]}
      >
        <HeaderGeneric title='Editar datos' onBackPress={() => router.back()} />
        <View style={styles.centerContent}>
          <Text style={[styles.errorText, { color: colors.error }]}>
            No se encontró la categoría de la publicación
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  let FormComponent = null;
  let title = '';

  if (
    publication.category === 'car' ||
    publication.category === 'pickup' ||
    publication.category === 'truck'
  ) {
    FormComponent = <EditVehicleForm />;
    title = 'Editá los datos de tu vehículo';
  } else if (publication.category === 'motorcycle') {
    FormComponent = <EditMotorcycleForm />;
    title = 'Editá los datos de tu motocicleta';
  } else if (publication.category === 'pieces') {
    FormComponent = <EditPieceForm />;
    title = 'Editá los datos de tu pieza';
  }

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <HeaderGeneric title='Editar datos' onBackPress={() => router.back()} />
      <Text style={[styles.title, { color: colors.textPrimary }]}>{title}</Text>
      {FormComponent ? (
        FormComponent
      ) : (
        <View style={styles.centerContent}>
          <Text style={[styles.errorText, { color: colors.error }]}>
            Categoría no reconocida
          </Text>
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
    textAlign: 'center',
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: globalFontSizeReg,
    fontWeight: globalFontWeightBold,
  },
});

export default EditForm;
