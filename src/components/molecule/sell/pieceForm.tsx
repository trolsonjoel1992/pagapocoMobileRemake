import ButtonReg from '@/src/components/atom/buttons/buttonReg';
import ButtonRegDis from '@/src/components/atom/buttons/buttonRegDis';
import BrandInput from '@/src/components/atom/imputs/sell/inputForms/brandInput';
import ColorInput from '@/src/components/atom/imputs/sell/inputForms/colorInput';
import CompatibilityInput from '@/src/components/atom/imputs/sell/inputForms/compatibilityInput';
import DescriptionInput from '@/src/components/atom/imputs/sell/inputForms/descriptionInput';
import ModelInput from '@/src/components/atom/imputs/sell/inputForms/modelInput';
import PieceConditionInput from '@/src/components/atom/imputs/sell/inputForms/pieceConditionInput';
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

const PieceForm = () => {
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [color, setColor] = useState('');
  const [condition, setCondition] = useState('');
  const [compatibility, setCompatibility] = useState('');
  const [description, setDescription] = useState('');
  const { colors } = useTheme();
  const { updatePublication } = usePublication();
  let colorText = colors.textPrimary;

  const isValid =
    brand.trim() !== '' && model.trim() !== '' && color.trim() !== '';

  const handleContinue = () => {
    updatePublication({
      brand,
      model,
      year,
      color,
      condition,
      compatibility,
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
        <Text style={[styles.labelStyle, { color: colorText }]}>Marca:</Text>
        <BrandInput value={brand} onChangeText={setBrand} />
        <Text style={[styles.labelStyle, { color: colorText }]}>Modelo:</Text>
        <ModelInput value={model} onChangeText={setModel} />
        <Text style={[styles.labelStyle, { color: colorText }]}>Color:</Text>
        <ColorInput value={color} onChangeText={setColor} />
        <Text style={[styles.labelStyle, { color: colorText }]}>Año:</Text>
        <YearInput value={year} onChangeText={setYear} />
        <Text style={[styles.labelStyle, { color: colorText }]}>
          Estado de la pieza:
        </Text>
        <PieceConditionInput value={condition} onChangeText={setCondition} />
        <Text style={[styles.labelStyle, { color: colorText }]}>
          Compatibilidad:
        </Text>
        <CompatibilityInput
          value={compatibility}
          onChangeText={setCompatibility}
        />
        <Text style={[styles.labelStyle, { color: colorText }]}>
          Descripción:
        </Text>
        <DescriptionInput value={description} onChangeText={setDescription} />
      </ScrollView>
      <View
        style={{
          alignItems: 'center',
        }}
      >
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

export default PieceForm;
