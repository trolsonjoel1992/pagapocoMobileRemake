import ButtonReg from '@/src/components/atom/buttons/buttonReg';
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
import { useTheme } from '@/src/context/ThemeContext';
import { useEditPieceForm } from '@/src/hooks/mypublication/useEditPieceForm';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const EditPieceForm = () => {
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
    condition,
    setCondition,
    compatibility,
    setCompatibility,
    description,
    setDescription,
    hasChanges,
    handleSave,
  } = useEditPieceForm();

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={{ maxHeight: '90%' }}
        showsVerticalScrollIndicator={false}
      >
        <Text style={[styles.labelStyle, { color: colors.textPrimary }]}>
          Marca:
        </Text>
        <BrandInput value={brand} onChangeText={setBrand} />
        <Text style={[styles.labelStyle, { color: colors.textPrimary }]}>
          Modelo:
        </Text>
        <ModelInput value={model} onChangeText={setModel} />
        <Text style={[styles.labelStyle, { color: colors.textPrimary }]}>
          Color:
        </Text>
        <ColorInput value={color} onChangeText={setColor} />
        <Text style={[styles.labelStyle, { color: colors.textPrimary }]}>
          Año:
        </Text>
        <YearInput value={year} onChangeText={setYear} />
        <Text style={[styles.labelStyle, { color: colors.textPrimary }]}>
          Estado de la pieza:
        </Text>
        <PieceConditionInput value={condition} onChangeText={setCondition} />
        <Text style={[styles.labelStyle, { color: colors.textPrimary }]}>
          Compatibilidad:
        </Text>
        <CompatibilityInput
          value={compatibility}
          onChangeText={setCompatibility}
        />
        <Text style={[styles.labelStyle, { color: colors.textPrimary }]}>
          Descripción:
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

export default EditPieceForm;
