import ButtonGoogle from '@/src/components/atom/buttons/buttonGoogle';
import ButtonReg from '@/src/components/atom/buttons/buttonReg';
import ButtonRegDis from '@/src/components/atom/buttons/buttonRegDis';
import HeaderGeneric from '@/src/components/atom/header/headerGeneric';
import InputEmail from '@/src/components/atom/imputs/inputEmail';
import InputPass from '@/src/components/atom/imputs/inputPass';
import { lightColor } from '@/src/constants/colors';
import ImagesPath from '@/src/constants/imagesPath';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Login = () => {
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPassValid, setIsPassValid] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <HeaderGeneric title='Inicio de sesión' />
      <Text style={styles.title}>Bienvenido</Text>
      <Image
        source={ImagesPath.logo}
        style={{
          width: 120,
          height: 120,
        }}
      />
      <InputEmail description='Email' onValidChange={setIsEmailValid} />
      <InputPass description='Contraseña' onValidChange={setIsPassValid} />
      {isEmailValid && isPassValid ? (
        <ButtonReg action='Ingresar' />
      ) : (
        <ButtonRegDis action='Ingresar' />
      )}
      <ButtonReg action='Crear cuenta' />
      <ButtonGoogle />
      <TouchableOpacity>
        <Image
          source={ImagesPath.finger}
          style={{
            width: 60,
            height: 60,
            marginTop: 20,
          }}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: lightColor.background,
  },
  title: {
    color: lightColor.textPrimary,
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
