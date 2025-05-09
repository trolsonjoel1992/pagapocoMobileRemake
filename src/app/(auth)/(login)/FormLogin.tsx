import BottomComponent from "@/src/components/atoms/BottomComponent";
import HeaderMainComponent from "@/src/components/atoms/HeaderMainComponent";
import ImagesPath from "@/src/constants/ImagesPath";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, verticalScale } from "react-native-size-matters";

const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      
      <HeaderMainComponent titulo="Iniciar Sesión" />

      <View style={styles.body}>
        <Image
          source={ImagesPath.logo}
          style={styles.logoStyle}
          resizeMode="contain"
        />

        <Text style={styles.textLogin}>Iniciar sesión</Text>

        <TextInput
          style={styles.inputContainer}
          onChangeText={setEmail}
          value={email}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.inputContainer}
          onChangeText={setPassword}
          value={password}
          placeholder="Contraseña"
          secureTextEntry
        />
      </View>

      <View style={styles.footer}>
        <View style={{ width: moderateScale(150) }}>
          <BottomComponent titulo="Ingresar" />
        </View>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: {
    alignItems: "center",
  },
  body: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    gap: verticalScale(5),
    marginTop: verticalScale(15),
  },
  footer: {
    alignItems: "center",
    height: verticalScale(100),
    //justifyContent: "center",
    gap: verticalScale(40),
  },
  logoStyle: {
    width: verticalScale(120),
    height: verticalScale(120),
  },
  textLogin: {
    fontSize: verticalScale(20),
    color: "black",
    fontWeight: "bold",
  },
  inputContainer: {
    width: "100%",
    padding: verticalScale(10),
    borderRadius: verticalScale(20),
    borderWidth: verticalScale(1),
    borderColor: "gray",
    marginBottom: verticalScale(10),
  },
  logoSpacer: {
    height: verticalScale(20), // Espacio fijo arriba del logo
  },
});

export default FormLogin;
