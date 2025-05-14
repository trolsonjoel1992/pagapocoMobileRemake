import HeaderMainComponent from "@/src/components/atoms/HeaderMainComponent";
import ImagesPath from "@/src/constants/ImagesPath";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, verticalScale } from "react-native-size-matters";

const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>

      {/* No hay header pero usamos el componente */}
      <HeaderMainComponent titulo="Inicio de sesión" />

      {/* <View style={styles.header}>

            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>

          </View> */}

      {/* Body */}
      <View style={styles.body}>
        {/* <Text style={{ fontSize: 24 }}>Ingresar</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text> */}

        {/* Titulo */}
        <Text style={styles.textTitulo}>Bienvenido de nuevo</Text>

        {/* Logo */}
        <Image
          source={ImagesPath.logo}
          style={styles.logoPagaPoco}
          resizeMode="contain"
        />

        {/* Inputs */}
        <View style={styles.inputContainer}>

          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          {/* <Text>Contraseña</Text> */}
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="Contraseña"
            secureTextEntry
          />

        </View>
        
        {/* Boton para acceder */}
        <View style={styles.buttomAccederContainer}>
          <TouchableOpacity
            style={styles.buttomAcceder}
            // onPress={handleLogin} // abre modal
          >
            <Text style={styles.buttomAccederText}>Continuar</Text>
          </TouchableOpacity>
        </View>

        {/* Texto para que se registre */}
        <View style={styles.textDePregunta}>
          <Text>¿No tienes una cuenta? </Text>
          <TouchableOpacity>
            <Text style={styles.textRegistrate}>Registrate</Text>
          </TouchableOpacity>
        </View>

        {/* Separador */}
        <View style={styles.separatorContainer}>
          <View style={styles.separator} />
          <Text>O</Text>
          <View style={styles.separator} />
        </View>

        {/* Botones de continar con google */}
        <View style={{ width: moderateScale(300) }}>
          <TouchableOpacity
            style={styles.buttomGoogleContainer}
            onPress={() => router.push("/(auth)/google_login")}
          >
            <Image
              source={ImagesPath.iconGoogle}
              style={styles.iconGoogleStyle}
              resizeMode="contain"
            />

            <Text style={styles.buttomGoogleText}>
              Continuar Google
            </Text>
          </TouchableOpacity>
        </View>

      </View>

      <View style={styles.footer}>
        <Text>Footer</Text>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // estilos de la estructura
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
    //paddingVertical: verticalScale(20),
  },
  header: {
    height: moderateScale(40),
    width: "100%",
    backgroundColor: "red",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  body: {
    height: moderateScale(550),
    width: "80%",
    backgroundColor: "yellow",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    height: moderateScale(100),
    width: "100%",
    backgroundColor: "red",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  // estilos del titulo
  textTitulo: {
    fontSize: 24,
    marginBottom: moderateScale(10),
    fontWeight: "bold",
  },
  // estilo del logo
  logoPagaPoco: {
    width: moderateScale(120),
    height: moderateScale(120),
    marginBottom: verticalScale(20),
  },
  // estilos para los inputs
  inputContainer: {
    width: "100%",
    backgroundColor: "green",
  },
  input: {
    width: "100%",
    padding: verticalScale(10),
    borderRadius: verticalScale(20),
    borderWidth: verticalScale(1),
    borderColor: "black",
    marginBottom: verticalScale(10),
  },
  // estilos de botones
  buttomAccederContainer: {
    width: "100%", // moderateScale(150)
    backgroundColor: "red",
  },
  buttomAcceder: {
    backgroundColor: "#A230C7",
    width: "100%",
    paddingVertical: verticalScale(10),
    paddingHorizontal: verticalScale(10),
    borderRadius: moderateScale(20),
    alignItems: "center",
    marginBottom: verticalScale(10),
  },
  buttomAccederText: {
    color: "white",
    fontSize: moderateScale(13),
    fontWeight: "bold",
  },
  // estilos del registro
  textDePregunta: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: verticalScale(10),
  },
  textRegistrate: {
    color: "blue",
    fontWeight: "bold",
  },
  // estilos del separador
  separatorContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "red",
    marginBottom: verticalScale(10),
  },
  separator: {
    width: moderateScale(140), // 46%
    height: moderateScale(1.5),
    backgroundColor: "black",
    marginHorizontal: moderateScale(4),
  },
  // estilos boton google
  buttomGoogleContainer: {
    backgroundColor: "#fff",
    width: "100%",
    paddingVertical: verticalScale(10),
    paddingHorizontal: verticalScale(10),
    borderRadius: moderateScale(20),
    alignItems: "center",
    flexDirection: "row",
    //elevation: 5,
    borderWidth: verticalScale(1),
    borderColor: "black",
  },
  buttomGoogleText: {
    color: "black",
    fontSize: moderateScale(16),
    paddingHorizontal: moderateScale(40),
    fontWeight: "bold",
  },
  iconGoogleStyle: {
    paddingHorizontal: moderateScale(24),
    width: moderateScale(20),
    height: moderateScale(20),
  },
});

export default FormLogin;
