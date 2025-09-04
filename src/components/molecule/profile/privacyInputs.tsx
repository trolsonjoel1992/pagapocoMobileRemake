import ButtonMax from '@/src/components/atom/buttons/buttonMax';
import ButtonMaxDis from '@/src/components/atom/buttons/buttonMaxDis';
import EmailInput from '@/src/components/atom/imputs/profile/emailInput';
import NewPassInput from '@/src/components/atom/imputs/profile/newPassInput';
import PhoneInput from '@/src/components/atom/imputs/profile/phoneInput';
import UserInput from '@/src/components/atom/imputs/profile/userInput';
import ModalContainer from '@/src/components/molecule/modal/modalContainer';
import { useAuth } from '@/src/context/AuthContext';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Modal, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const PrivacyInputs = ({ onBack }: { onBack: () => void }) => {
  const { updateUsername, updatePhone, updateEmail, updatePassword } =
    useAuth();

  // Inicializar con valores vacíos
  const [userData, setUserData] = useState({
    username: '',
    password: '',
    email: '',
    phone: '',
  });

  const [userValid, setUserValid] = useState(false);
  const [passValid, setPassValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [phoneValid, setPhoneValid] = useState(false);

  const [userChanged, setUserChanged] = useState(false);
  const [passChanged, setPassChanged] = useState(false);
  const [emailChanged, setEmailChanged] = useState(false);
  const [phoneChanged, setPhoneChanged] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);

  const hasChanges = userChanged || passChanged || emailChanged || phoneChanged;
  const hasDenied =
    (userChanged && !userValid) ||
    (passChanged && !passValid) ||
    (emailChanged && !emailValid) ||
    (phoneChanged && !phoneValid);

  const allConfirmed =
    (!userChanged || userValid) &&
    (!passChanged || passValid) &&
    (!emailChanged || emailValid) &&
    (!phoneChanged || phoneValid) &&
    hasChanges;

  const handleGuardar = async () => {
    try {
      // Guarda si hay un valor válido, independientemente de si existía antes
      if (userValid && userData.username) {
        await updateUsername(userData.username);
      }
      if (phoneValid && userData.phone) {
        await updatePhone(userData.phone);
      }
      if (emailValid && userData.email) {
        await updateEmail(userData.email);
      }
      if (passValid && userData.password) {
        await updatePassword(userData.password);
      }
      setModalVisible(true);
    } catch (error) {
      console.error('Error al guardar los cambios:', error);
    }
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setUserChanged(false);
    setPassChanged(false);
    setEmailChanged(false);
    setPhoneChanged(false);
    setUserValid(false);
    setPassValid(false);
    setEmailValid(false);
    setPhoneValid(false);
    router.back();
  };

  return (
    <View style={{ gap: moderateScale(30) }}>
      <UserInput
        value={userData.username}
        onValidChange={setUserValid}
        onChangeText={text => {
          setUserData(prev => ({ ...prev, username: text }));
          setUserChanged(text.length > 0);
        }}
      />
      <NewPassInput
        value={userData.password}
        onValidChange={setPassValid}
        onChangeText={text => {
          setUserData(prev => ({ ...prev, password: text }));
          setPassChanged(text.length > 0);
        }}
      />
      <EmailInput
        value={userData.email}
        onValidChange={setEmailValid}
        onChangeText={text => {
          setUserData(prev => ({ ...prev, email: text }));
          setEmailChanged(text.length > 0);
        }}
      />
      <PhoneInput
        value={userData.phone}
        onValidChange={setPhoneValid}
        onChangeText={text => {
          setUserData(prev => ({ ...prev, phone: text }));
          setPhoneChanged(text.length > 0);
        }}
      />

      {!hasChanges ? (
        <ButtonMax action='Regresar al perfil' onPress={onBack} />
      ) : hasDenied ? (
        <ButtonMaxDis action='Guardar cambios' />
      ) : (
        <ButtonMax action='Guardar cambios' onPress={handleGuardar} />
      )}

      <Modal visible={modalVisible} transparent animationType='fade'>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.5)',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ModalContainer
            modalImage='modalCheck'
            message='Cambios guardados correctamente'
            buttonCancel={false}
            buttonAction='Cerrar'
            onPressButtonAction={handleCloseModal}
          />
        </View>
      </Modal>
    </View>
  );
};

export default PrivacyInputs;
