import ButtonReg from '@/src/components/atom/buttons/buttonReg';
import ButtonRegDis from '@/src/components/atom/buttons/buttonRegDis';
import City from '@/src/components/atom/imputs/sell/inputTitle/city';
import Price from '@/src/components/atom/imputs/sell/inputTitle/price';
import Title from '@/src/components/atom/imputs/sell/inputTitle/title';
import ModalContainer from '@/src/components/molecule/modal/modalContainer';
import {
  globalFontSizeMid,
  globalFontWeightSemiBold,
} from '@/src/constants/styles/globalStyles';
import { usePublication } from '@/src/context/PublicationContext';
import { useTheme } from '@/src/context/ThemeContext';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Modal, Text, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const InputsTCP = () => {
  const { colors } = useTheme();
  const { publication, updatePublication, addPublication } = usePublication(); // Agregar addPublication
  const [title, setTitle] = useState(publication?.title || '');
  const [city, setCity] = useState(publication?.city || '');
  const [price, setPrice] = useState(publication?.price || '');
  const [modalVisible, setModalVisible] = useState(false);
  const [isTitleValid, setIsTitleValid] = useState(false);
  const [isCityValid, setIsCityValid] = useState(false);
  const [isPriceValid, setPriceValid] = useState(false);
  const isFormValid = isTitleValid && isCityValid && isPriceValid;
  const handleCreatePublication = async () => {
    if (!publication) return;

    try {
      const finalPublication = {
        ...publication,
        title,
        city,
        price,
        isSold: false,
        isPaused: false,
      };

      await addPublication(finalPublication);

      setModalVisible(false);
      router.push('/(tabs)/home');
    } catch (error) {
      console.error('Error saving publication:', error);
      Alert.alert('Error', 'No se pudo crear la publicación');
    }
  };
  const handleContinue = () => {
    if (isFormValid) {
      updatePublication({
        title,
        city,
        price,
      });
      setModalVisible(true);
    }
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
      <Text
        style={{
          textAlign: 'left',
          color: colors.textPrimary,
          fontSize: globalFontSizeMid,
          marginBottom: moderateScale(5),
          fontWeight: globalFontWeightSemiBold,
        }}
      >
        Pon el título de tu venta
      </Text>
      <Title
        value={title}
        onChangeText={setTitle}
        onValidChange={setIsTitleValid}
      />
      <Text
        style={{
          textAlign: 'left',
          color: colors.textPrimary,
          fontSize: globalFontSizeMid,
          marginBottom: moderateScale(5),
          fontWeight: globalFontWeightSemiBold,
        }}
      >
        ¿En qué ciudad lo publicas?
      </Text>
      <City
        value={city}
        onChangeText={setCity}
        onValidChange={setIsCityValid}
      />
      <Text
        style={{
          textAlign: 'left',
          color: colors.textPrimary,
          fontSize: globalFontSizeMid,
          marginBottom: moderateScale(5),
          fontWeight: globalFontWeightSemiBold,
        }}
      >
        Agregá un precio a la publicación
      </Text>
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
      <Modal
        visible={modalVisible}
        transparent
        animationType='slide'
        onRequestClose={() => setModalVisible(false)}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.5)',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ModalContainer
            modalImage={'modalCheck'}
            message={'¡Muy bien, creaste tu publicación!'}
            buttonCancel={false}
            buttonAction={'Publicar'}
            onPressButtonAction={handleCreatePublication}
          />
        </View>
      </Modal>
    </View>
  );
};

export default InputsTCP;
