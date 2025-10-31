import ButtonReg from '@/src/components/atom/buttons/buttonReg';
import ButtonRegDis from '@/src/components/atom/buttons/buttonRegDis';
import City from '@/src/components/atom/imputs/sell/inputTitle/city';
import Price from '@/src/components/atom/imputs/sell/inputTitle/price';
import Title from '@/src/components/atom/imputs/sell/inputTitle/title';
import {
  globalFontSizeMid,
  globalFontWeightSemiBold,
} from '@/src/constants/styles/globalStyles';
import { useTheme } from '@/src/context/ThemeContext';
import { useEditTitle } from '@/src/hooks/mypublication/useEditTitle';
import React from 'react';
import { Text, TextStyle, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const InputsEditTCP = () => {
  const { colors } = useTheme();
  const {
    title,
    city,
    price,
    isFormValid,
    hasChanges,
    setTitle,
    setCity,
    setPrice,
    setIsTitleValid,
    setIsCityValid,
    setPriceValid,
    handleSave,
  } = useEditTitle();

  const labelStyle: TextStyle = {
    textAlign: 'left',
    color: colors.textPrimary,
    fontSize: globalFontSizeMid,
    marginBottom: moderateScale(5),
    fontWeight: globalFontWeightSemiBold as TextStyle['fontWeight'],
  };

  return (
    <View
      style={{
        backgroundColor: colors.background,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flex: 1,
      }}
    >
      <Text style={labelStyle}>Editá el título de tu venta</Text>
      <Title
        value={title}
        onChangeText={setTitle}
        onValidChange={setIsTitleValid}
      />
      <Text style={labelStyle}>¿En qué ciudad lo publicas?</Text>
      <City
        value={city}
        onChangeText={setCity}
        onValidChange={setIsCityValid}
      />
      <Text style={labelStyle}>Editá el precio de la publicación</Text>
      <Price
        value={price}
        onChangeText={setPrice}
        onValidChange={setPriceValid}
      />
      {isFormValid ? (
        <ButtonReg
          action={hasChanges ? 'Guardar' : 'Volver'}
          onPress={handleSave}
        />
      ) : (
        <ButtonRegDis action='Guardar' onPress={() => {}} />
      )}
    </View>
  );
};

export default InputsEditTCP;
