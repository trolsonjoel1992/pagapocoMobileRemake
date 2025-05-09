import ButtomGoogleComponent from "@/src/components/atoms/ButtomGoogleComponent";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, verticalScale } from "react-native-size-matters";

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.textoBienvenidaStyles}>
          ¡Hola! Para contactar al vendedor,
        </Text>
        <Text style={styles.textoBienvenidaStyles}>Ingresa a tu cuenta.</Text>
      </View>

      <View style={styles.footer}>

        {/* Uso de componente */}
        {/* <View style={{ width: moderateScale(200) }}>
          <BottomComponent titulo="Crean cuenta" />
        </View> */}
        <View style={{ width: moderateScale(200) }}>
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
        <View style={{ width: moderateScale(200) }}>
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
        <View style={{ width: moderateScale(300) }}>
          <ButtomGoogleComponent titulo="Iniciar sesión con Google" />
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
    paddingVertical: moderateScale(70),
    paddingHorizontal: moderateScale(30),
  },
  header: {
    alignItems: "center",
  },
  footer: {
    alignItems: "center",
    height: verticalScale(400),
    gap: verticalScale(40),
  },
  textoBienvenidaStyles: {
    fontSize: moderateScale(18),
    color: "black",
    fontWeight: "bold",
  },
  // estilos botones
  buttomIngresarContainer: {
    backgroundColor: "#ECE6F0",
    width: "100%",
    paddingVertical: verticalScale(10),
    paddingHorizontal: verticalScale(10),
    borderRadius: moderateScale(20),
    alignItems: "center",
  },
  buttomIngresarText: {
    color: "black",
    fontSize: moderateScale(13),
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
        fontSize: moderateScale(13),
        fontWeight: "bold",
    }
});

export default Login;
