//import ButtomGoogleComponent from "@/src/components/atoms/ButtomGoogleComponent";
import ImagesPath from "@/src/constants/ImagesPath";
import { router } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, verticalScale } from "react-native-size-matters";

const Login = () => {

  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.textoBienvenidaStyles}>¡Hola!</Text>
        <Text style={styles.textoBienvenidaStyles}>Ingresa nuestra app</Text>
        <Text style={styles.textoBienvenidaStyles}>o creá una cuenta.</Text>
      </View>

      <View style={styles.footer}>
        {/* Uso de componente */}
        {/* <View style={{ width: moderateScale(200) }}>
          <BottomComponent titulo="Crean cuenta" />
        </View> */}
        <View style={{ width: moderateScale(300) }}>
          {/* Descarto uso de componentes - (solo de momento) */}
          <TouchableOpacity
            style={styles.bottomCrearCuentaContainer}
            onPress={() => router.push("/(auth)/(register)/InputEmail")}
          >
            <Text style={styles.buttomCrearCuentaText}>Crear Cuenta</Text>
          </TouchableOpacity>
        </View>

        {/* Uso de componente */}
        {/* <View style={{ width: moderateScale(200) }}>
          <ButtomComponent2 titulo="Ingresar" />
        </View> */}
        <View style={{ width: moderateScale(300) }}>
          {/* Descarto uso de componentes - (solo de momento) */}
          <TouchableOpacity
            style={styles.buttomIngresarContainer}
            onPress={() => router.push("/(auth)/(login)/FormLogin")}
          >
            <Text style={styles.buttomIngresarText}>Ingresar</Text>
          </TouchableOpacity>
        </View>

        {/* Uso de componente */}
        {/* Faltaria funcionalidad */}
        {/* <View style={{ width: moderateScale(300) }}>
          <ButtomGoogleComponent titulo="Iniciar sesión con Google" />
        </View> */}
        <View style={{ width: moderateScale(300) }}>
          {/* Descarto uso de componentes - (solo de momento) */}
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
              Iniciar sesión con Google
            </Text>
          </TouchableOpacity>
        </View>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: moderateScale(100),
    paddingHorizontal: moderateScale(30),
  },
  header: {
    alignItems: "center",
  },
  footer: {
    alignItems: "center",
    height: verticalScale(350),
    gap: verticalScale(60),
  },
  textoBienvenidaStyles: {
    fontSize: moderateScale(18),
    color: "black",
    fontWeight: "bold",
  },
  // estilos botones
  buttomIngresarContainer: {
    backgroundColor: "#A230C7",
    width: "100%",
    paddingVertical: verticalScale(10),
    paddingHorizontal: verticalScale(10),
    borderRadius: moderateScale(20),
    alignItems: "center",
  },
  buttomIngresarText: {
    color: "white",
    fontSize: moderateScale(16),
    fontWeight: "bold",
  },
  bottomCrearCuentaContainer: {
    backgroundColor: "#A230C7",
    width: "100%",
    paddingVertical: verticalScale(10),
    paddingHorizontal: verticalScale(10),
    borderRadius: moderateScale(20),
    alignItems: "center",
  },
  buttomCrearCuentaText: {
    color: "white",
    fontSize: moderateScale(16),
    fontWeight: "bold",
  },
  // estilos boton google
  buttomGoogleContainer: {
    backgroundColor: "#ECECEC",
    width: "100%",
    paddingVertical: verticalScale(10),
    paddingHorizontal: verticalScale(10),
    borderRadius: moderateScale(20),
    alignItems: "center",
    flexDirection: "row",
    elevation: 5,
  },
  buttomGoogleText: {
    color: "black",
    fontSize: moderateScale(16),
    paddingHorizontal: moderateScale(40),
    fontWeight: "bold",
  },
  iconGoogleStyle: {
    paddingHorizontal: moderateScale(20),
    width: moderateScale(24),
    height: moderateScale(24),
  },
});

export default Login;
