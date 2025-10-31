import ButtonReg from '@/src/components/atom/buttons/buttonReg';
import BrandInput from '@/src/components/atom/imputs/sell/inputForms/brandInput';
import ColorInput from '@/src/components/atom/imputs/sell/inputForms/colorInput';
import DescriptionInput from '@/src/components/atom/imputs/sell/inputForms/descriptionInput';
import EngineDisplacementInput from '@/src/components/atom/imputs/sell/inputForms/engineDisplacementInput';
import FuelTypeInput from '@/src/components/atom/imputs/sell/inputForms/fuelTypeInput';
import KilometersInput from '@/src/components/atom/imputs/sell/inputForms/kilometersInput';
import ModelInput from '@/src/components/atom/imputs/sell/inputForms/modelInput';
import MotorcycleTypeInput from '@/src/components/atom/imputs/sell/inputForms/motorcycleTypeInput';
import MotorcycleWheelInput from '@/src/components/atom/imputs/sell/inputForms/motorcycleWheelInput';
import TransmissionInput from '@/src/components/atom/imputs/sell/inputForms/transmissionInput';
import YearInput from '@/src/components/atom/imputs/sell/inputForms/yearInput';
import {
  globalFontSizeMid,
  globalFontWeightSemiBold,
} from '@/src/constants/styles/globalStyles';
import { useTheme } from '@/src/context/ThemeContext';
import { useEditMotorcycleForm } from '@/src/hooks/mypublication/useEditMotorcycleForm';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const EditMotorcycleForm = () => {
  const { colors } = useTheme();
  const {
    brand,
    setBrand,
    model,
    setModel,
    year,
    setYear,
    color,
    setColor,
    engineDisplacement,
    setEngineDisplacement,
    transmission,
    setTransmission,
    motorcycleType,
    setMotorcycleType,
    motorcycleWheel,
    setMotorcycleWheel,
    kilometers,
    setKilometers,
    fuelType,
    setFuelType,
    description,
    setDescription,
    hasChanges,
    handleSave,
  } = useEditMotorcycleForm();

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={{ maxHeight: '90%' }}
        showsVerticalScrollIndicator={false}
      >
        <Text style={[styles.labelStyle, { color: colors.textPrimary }]}>
          Marca
        </Text>
        <BrandInput value={brand} onChangeText={setBrand} />
        <Text style={[styles.labelStyle, { color: colors.textPrimary }]}>
          Modelo
        </Text>
        <ModelInput value={model} onChangeText={setModel} />
        <Text style={[styles.labelStyle, { color: colors.textPrimary }]}>
          Color
        </Text>
        <ColorInput value={color} onChangeText={setColor} />
        <Text style={[styles.labelStyle, { color: colors.textPrimary }]}>
          Año
        </Text>
        <YearInput value={year} onChangeText={setYear} />
        <Text style={[styles.labelStyle, { color: colors.textPrimary }]}>
          Cilindrada
        </Text>
        <EngineDisplacementInput
          value={engineDisplacement}
          onChangeText={setEngineDisplacement}
        />
        <Text style={[styles.labelStyle, { color: colors.textPrimary }]}>
          Transmisión
        </Text>
        <TransmissionInput
          value={transmission}
          onChangeText={setTransmission}
        />
        <Text style={[styles.labelStyle, { color: colors.textPrimary }]}>
          Tipo de moto
        </Text>
        <MotorcycleTypeInput
          value={motorcycleType}
          onChangeText={setMotorcycleType}
        />
        <Text style={[styles.labelStyle, { color: colors.textPrimary }]}>
          Rodado
        </Text>
        <MotorcycleWheelInput
          value={motorcycleWheel}
          onChangeText={setMotorcycleWheel}
        />
        <Text style={[styles.labelStyle, { color: colors.textPrimary }]}>
          Kilómetros
        </Text>
        <KilometersInput value={kilometers} onChangeText={setKilometers} />
        <Text style={[styles.labelStyle, { color: colors.textPrimary }]}>
          Tipo de combustible
        </Text>
        <FuelTypeInput value={fuelType} onChangeText={setFuelType} />
        <Text style={[styles.labelStyle, { color: colors.textPrimary }]}>
          Descripción
        </Text>
        <DescriptionInput value={description} onChangeText={setDescription} />
      </ScrollView>
      <View style={{ alignItems: 'center' }}>
        <ButtonReg
          action={hasChanges ? 'Guardar' : 'Volver'}
          onPress={handleSave}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  labelStyle: {
    fontSize: globalFontSizeMid,
    fontWeight: globalFontWeightSemiBold,
    marginBottom: moderateScale(5),
  },
});

export default EditMotorcycleForm;
