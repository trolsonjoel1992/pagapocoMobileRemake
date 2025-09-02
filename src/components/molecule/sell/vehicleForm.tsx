import ButtonReg from '@/src/components/atom/buttons/buttonReg';
import ButtonRegDis from '@/src/components/atom/buttons/buttonRegDis';
import BrandInput from '@/src/components/atom/imputs/sell/inputForms/brandInput';
import ColorInput from '@/src/components/atom/imputs/sell/inputForms/colorInput';
import DescriptionInput from '@/src/components/atom/imputs/sell/inputForms/descriptionInput';
import DoorsInput from '@/src/components/atom/imputs/sell/inputForms/doorsInput';
import EngineDisplacementInput from '@/src/components/atom/imputs/sell/inputForms/engineDisplacementInput';
import FuelTypeInput from '@/src/components/atom/imputs/sell/inputForms/fuelTypeInput';
import KilometersInput from '@/src/components/atom/imputs/sell/inputForms/kilometersInput';
import ModelInput from '@/src/components/atom/imputs/sell/inputForms/modelInput';
import TransmissionInput from '@/src/components/atom/imputs/sell/inputForms/transmissionInput';
import VersionInput from '@/src/components/atom/imputs/sell/inputForms/versionInput';
import YearInput from '@/src/components/atom/imputs/sell/inputForms/yearInput';
import {
  globalFontSizeMid,
  globalFontWeightSemiBold,
} from '@/src/constants/styles/globalStyles';
import { usePublication } from '@/src/context/PublicationContext';
import { useTheme } from '@/src/context/ThemeContext';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const VehicleForm = () => {
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [version, setVersion] = useState('');
  const [color, setColor] = useState('');
  const [doors, setDoors] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [transmission, setTransmission] = useState('');
  const [engineDisplacement, setEngineDisplacement] = useState('');
  const [kilometers, setKilometers] = useState('');
  const [description, setDescription] = useState('');
  const { colors } = useTheme();
  const { updatePublication } = usePublication();
  let colorText = colors.textPrimary;

  const isValid =
    brand.trim() !== '' &&
    model.trim() !== '' &&
    color.trim() !== '' &&
    year.trim() !== '';

  const handleContinue = () => {
    updatePublication({
      brand,
      model,
      year,
      version,
      color,
      doors,
      fuelType,
      transmission,
      engineDisplacement,
      kilometers,
      description,
    });
    router.push('/(sell)/salePlan');
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={{ maxHeight: '90%' }}
        showsVerticalScrollIndicator={false}
      >
        <Text style={[styles.labelStyle, { color: colorText }]}>Marca</Text>
        <BrandInput value={brand} onChangeText={setBrand} />
        <Text style={[styles.labelStyle, { color: colorText }]}>Modelo</Text>
        <ModelInput value={model} onChangeText={setModel} />
        <Text style={[styles.labelStyle, { color: colorText }]}>Color</Text>
        <ColorInput value={color} onChangeText={setColor} />
        <Text style={[styles.labelStyle, { color: colorText }]}>Año</Text>
        <YearInput value={year} onChangeText={setYear} />
        <Text style={[styles.labelStyle, { color: colorText }]}>Versión</Text>
        <VersionInput value={version} onChangeText={setVersion} />
        <Text style={[styles.labelStyle, { color: colorText }]}>Puertas</Text>
        <DoorsInput value={doors} onChangeText={setDoors} />
        <Text style={[styles.labelStyle, { color: colorText }]}>
          Tipo de combustible
        </Text>
        <FuelTypeInput value={fuelType} onChangeText={setFuelType} />
        <Text style={[styles.labelStyle, { color: colorText }]}>
          Transmisión
        </Text>
        <TransmissionInput
          value={transmission}
          onChangeText={setTransmission}
        />
        <Text style={[styles.labelStyle, { color: colorText }]}>
          Cilindrada
        </Text>
        <EngineDisplacementInput
          value={engineDisplacement}
          onChangeText={setEngineDisplacement}
        />
        <Text style={[styles.labelStyle, { color: colorText }]}>
          Kilómetros
        </Text>
        <KilometersInput value={kilometers} onChangeText={setKilometers} />
        <Text style={[styles.labelStyle, { color: colorText }]}>
          Descripción
        </Text>
        <DescriptionInput value={description} onChangeText={setDescription} />
      </ScrollView>
      <View style={{ alignItems: 'center' }}>
        {!isValid ? (
          <ButtonRegDis action='Continuar' onPress={() => {}} />
        ) : (
          <ButtonReg action='Continuar' onPress={handleContinue} />
        )}
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

export default VehicleForm;
