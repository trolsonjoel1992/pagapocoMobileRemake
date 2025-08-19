import ButtonFinger from '@/src/components/atom/buttons/auth/buttonFinger';
import ButtonGoogle from '@/src/components/atom/buttons/auth/buttonGoogle';
import ButtonReg from '@/src/components/atom/buttons/buttonReg';
import ButtonRegDis from '@/src/components/atom/buttons/buttonRegDis';
import HeaderGeneric from '@/src/components/atom/header/headerGeneric';
import InputEmail from '@/src/components/atom/imputs/auth/inputEmail';
import InputPass from '@/src/components/atom/imputs/auth/inputPass';
import ModalContainer from '@/src/components/molecule/modal/modalContainer';
import ImagesPath from '@/src/constants/imagesPath';
import {
  globalFontSizeSmall,
  globalFontSizeTitle,
  globalFontWeightBold,
} from '@/src/constants/styles/globalStyles';
import { useTheme } from '@/src/context/ThemeContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Image, Modal, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Register = () => {
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPassValid, setIsPassValid] = useState(false);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const { colors } = useTheme();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState(''); // Nuevo estado para el mensaje del modal

  const handleCancel = () => {
    setModalVisible(false);
    router.replace('/(tabs)/home');
  };
  const handleAction = () => {
    setModalVisible(false);
    router.replace('/(auth)/login');
  };

  const handleRegister = async () => {
    const usersString = await AsyncStorage.getItem('users');
    let users = [];
    if (usersString) {
      users = JSON.parse(usersString);
    }
    // Verifica si el email ya existe
    const exists = users.some((u: any) => u.email === email);
    if (exists) {
      setModalMessage('El email ya está registrado');
      setModalVisible(true);
      return;
    }
    // Si no existe, registra el usuario (sin id)
    const newUser = { email, password: pass };
    users.push(newUser);
    await AsyncStorage.setItem('users', JSON.stringify(users));
    setModalMessage('Te has registrado con éxito');
    setModalVisible(true);
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <HeaderGeneric
        title='Crear cuenta'
        onBackPress={() => router.push('/(tabs)/home')}
      />
      <Text style={[styles.title, { color: colors.textPrimary }]}>
        Unite a la comunidad
      </Text>
      <Image
        source={ImagesPath.logo}
        style={{
          width: 185,
          height: 120,
        }}
      />
      <InputEmail
        description='Cargá tu Email'
        onValidChange={setIsEmailValid}
        value={email}
        onChangeText={setEmail}
      />
      <InputPass
        description='Creá una Contraseña'
        onValidChange={setIsPassValid}
        value={pass}
        onChangeText={setPass}
      />
      {isEmailValid && isPassValid ? (
        <ButtonReg action='Registrar' onPress={handleRegister} />
      ) : (
        <ButtonRegDis action='Registrar' />
      )}
      <Text style={[styles.quest, { color: colors.textPrimary }]}>
        ¿Ya tenés cuenta?
      </Text>
      <ButtonReg
        action='Ingresa'
        onPress={() => router.push('/(auth)/login')}
      />
      <ButtonGoogle />
      <ButtonFinger />

      <Modal
        visible={modalVisible}
        transparent
        animationType='fade'
        onRequestClose={handleCancel}
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
            modalImage={
              modalMessage === 'Te has registrado con éxito'
                ? 'modalCheck'
                : 'modalWarning'
            }
            message={modalMessage}
            buttonCancel={true}
            buttonAction={
              modalMessage === 'Te has registrado con éxito'
                ? 'Ir a login'
                : 'Cerrar'
            }
            onPressCancel={handleCancel}
            onPressButtonAction={
              modalMessage === 'Te has registrado con éxito'
                ? handleAction
                : handleCancel
            }
          />
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Register;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: globalFontSizeTitle,
    fontWeight: globalFontWeightBold,
    marginBottom: 10,
  },
  quest: {
    fontSize: globalFontSizeSmall,
    fontWeight: globalFontWeightBold,
    marginTop: 10,
    marginBottom: 5,
  },
});
