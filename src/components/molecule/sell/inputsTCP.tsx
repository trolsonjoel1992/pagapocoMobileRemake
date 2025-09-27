import ButtonReg from '@/src/components/atom/buttons/buttonReg';
import ButtonRegDis from '@/src/components/atom/buttons/buttonRegDis';
import City from '@/src/components/atom/imputs/sell/inputTitle/city';
import Price from '@/src/components/atom/imputs/sell/inputTitle/price';
import Title from '@/src/components/atom/imputs/sell/inputTitle/title';
import ModalTitle from '@/src/components/molecule/modal/sell/modTitle';
import {
  globalFontSizeMid,
  globalFontWeightSemiBold,
} from '@/src/constants/styles/globalStyles';
import { useTheme } from '@/src/context/ThemeContext';
import { useSell } from '@/src/hooks/sell/useSell';
import React from 'react';
import { Text, TextStyle, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const InputsTCP = () => {
  const { colors } = useTheme();
  const {
    title,
    city,
    price,
    modalVisible,
    isFormValid,
    setTitle,
    setCity,
    setPrice,
    setModalVisible,
    setIsTitleValid,
    setIsCityValid,
    setPriceValid,
    handleCreatePublication,
    handleContinue,
  } = useSell();
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
      <Text style={labelStyle}>Pon el título de tu venta</Text>
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
      <Text style={labelStyle}>Agregá un precio a la publicación</Text>
      <Price
        value={price}
        onChangeText={setPrice}
        onValidChange={setPriceValid}
      />
      {isFormValid ? (
        <ButtonReg action='Continuar' onPress={handleContinue} />
      ) : (
        <ButtonRegDis action='Continuar' onPress={() => {}} />
      )}
      <ModalTitle
        modalVisible={modalVisible}
        cancelAction={setModalVisible}
        confirmAction={handleCreatePublication}
      />
    </View>
  );
};

export default InputsTCP;
