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

        {/* Uso de componente */}
        {/* <View style={{ width: moderateScale(150) }}>
          <BottomComponent titulo="Ingresar" />
        </View> */}

        <View style={{ width: moderateScale(150) }}>
          {/* Descarto uso de componentes - (solo de momento) */}
          <TouchableOpacity
            style={styles.buttomSiguienteContainer}
            onPress={() => router.push("/(main)/mainScreen")} // navega a pantalla principal
          >
            <Text style={styles.buttomSiguienteText}>Siguiente</Text>
          </TouchableOpacity>
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
  // estilos de botones
  buttomSiguienteContainer: {
    backgroundColor: "#A230C7",
    width: "100%",
    paddingVertical: verticalScale(10),
    paddingHorizontal: verticalScale(10),
    borderRadius: moderateScale(20),
    alignItems: "center",
  },
  buttomSiguienteText: {
    color: "white",
    fontSize: moderateScale(13),
    fontWeight: "bold",
  },
});

export default FormLogin;
