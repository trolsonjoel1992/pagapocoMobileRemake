import BottomComponent from "@/src/components/atoms/BottomComponent";
import ButtomComponent2 from "@/src/components/atoms/ButtomComponent2";
import ButtomGoogleComponent from "@/src/components/atoms/ButtomGoogleComponent";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, verticalScale } from "react-native-size-matters";

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textoBienvenidaStyles}>¡Hola! Para contactar al vendedor,</Text>
        <Text style={styles.textoBienvenidaStyles}>Ingresa a tu cuenta.</Text>
      </View>

      <View style={styles.footer}>
        <View style={{ width: moderateScale(200) }}>
          <BottomComponent titulo="Crean cuenta" />
        </View>

        <View style={{ width: moderateScale(200) }}>
          <ButtomComponent2 titulo="Ingresar" />
        </View>

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
    //gap: moderateScale(30),
  },
  footer: {
    alignItems: "center",
    height: verticalScale(400),
    //justifyContent: "center",
    gap: verticalScale(40),
  },
  textoBienvenidaStyles: {
    fontSize: moderateScale(18),
    color: "black",
    fontWeight: "bold",
  },
});

export default Login;
