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

const InputEmail = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <HeaderMainComponent 
        titulo="Registrarse"
        onBackPress={() => router.back()}
      />

      {/* <View style={styles.header}></View> */}

      <View style={styles.body}>
        <Text style={styles.textTitulo}>Crea una cuenta</Text>

        <Image
          source={ImagesPath.logo}
          style={styles.logoStyle}
          resizeMode="contain"
        />

        <View style={styles.inputConteiner}>
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="Ingrese un email"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="Contraseña"
            secureTextEntry
          />

          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="Confirmar contraseña"
            secureTextEntry
          />
        </View>

        {/* Boton para acceder */}
        <View style={styles.buttomRegistrarContainer}>
          <TouchableOpacity
            style={styles.buttomRegistrar}
            // onPress={handleLogin} // abre modal
          >
            <Text style={styles.buttomRegistrarText}>Continuar</Text>
          </TouchableOpacity>
        </View>

        {/* Texto iniciar sesion */}
        <View style={styles.textIniciarSesionContainer}>
          <Text style={{ fontWeight: "bold" }}>¿Ya tienes una cuenta?</Text>
          <TouchableOpacity
            onPress={() => router.push("/(auth)/(login)/FormLogin")}
          >
            <Text style={[styles.textLink, { fontWeight: "bold" }]}> Inicia sesión</Text>
          </TouchableOpacity>
        </View>

        {/* Separador */}
        <View style={styles.separatorContainer}>
          <View style={styles.separator}></View>
          <Text> O </Text>
          <View style={styles.separator}></View>
        </View>

        {/* Botones de otros inicios de sesion */}
        <View style={styles.buttomContainerOtrosLogin}>
          {/* Boton de google */}
          <View style={styles.buttomOtrosContainer}>
            <TouchableOpacity
              style={styles.buttomOtros}
              //onPress={() => router.push("/(auth)/google_login")}
            >
              <Image
                source={ImagesPath.iconGoogle}
                style={styles.iconGoogleStyle}
                resizeMode="contain"
              />

              {/* <AntDesign name="google" size={moderateScale(18)} color="black" /> */}

              <Text style={styles.buttomOtrosText}>Continuar con Google</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttomOtrosContainer}>
            <TouchableOpacity
              style={styles.buttomOtros}
              //onPress={() => router.push("/(auth)/google_login")}
            >
              <Image
                source={ImagesPath.iconPhone}
                style={styles.iconGoogleStyle}
                resizeMode="contain"
              />

              {/* <Feather name="phone" size={moderateScale(18)} color="black" /> */}

              <Text style={styles.buttomOtrosText}>
                Continuar con el teléfono
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.ButtomFooterContainer}>
          <TouchableOpacity>
            <Text style={styles.textLink}>Términos de uso</Text>
          </TouchableOpacity>
          <View style={styles.separatorButtomFooter} />
          <TouchableOpacity>
            <Text style={styles.textLink}>Política de privacidad</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // estilos de la estructura
  container: {
    flex: 1,
    //backgroundColor: "aqua",
    justifyContent: "space-between",
    alignItems: "center",
    //paddingVertical: verticalScale(20),
  },
  header: {
    height: moderateScale(40),
    width: "100%",
    //backgroundColor: "red",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  body: {
    height: moderateScale(550),
    width: "80%",
    //backgroundColor: "yellow",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    gap: moderateScale(10),
  },
  footer: {
    height: moderateScale(80),
    width: "100%",
    //backgroundColor: "red",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  // estilo del titulo
  textTitulo: {
    fontSize: 24,
    fontWeight: "bold",
    //color: "red",
  },
  logoStyle: {
    width: moderateScale(120),
    height: moderateScale(120),
    //marginBottom: moderateScale(20),
  },
  inputConteiner: {
    width: "100%",
    //backgroundColor: "blue",
    gap: moderateScale(10),
  },
  input: {
    width: "100%",
    padding: verticalScale(10),
    borderRadius: verticalScale(20),
    borderWidth: verticalScale(1),
    borderColor: "black",
    //backgroundColor: "red",
    //marginBottom: verticalScale(10),
  },
  // estilos del boton de Acceder
  buttomRegistrarContainer: {
    width: "100%", // moderateScale(150)
    //backgroundColor: "red",
    //marginBottom: verticalScale(10),
  },
  buttomRegistrar: {
    backgroundColor: "#A230C7",
    width: "100%",
    paddingVertical: verticalScale(10),
    paddingHorizontal: verticalScale(10),
    borderRadius: moderateScale(20),
    alignItems: "center",
    //marginBottom: verticalScale(10),
  },
  buttomRegistrarText: {
    color: "white",
    fontSize: moderateScale(13),
    fontWeight: "bold",
  },
  // estilo del texto de iniciar sesion
  textIniciarSesionContainer: {
    //backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textLink: {
    color: "blue",
  },
  // estilos del separador
  separatorContainer: {
    width: "100%",
    //backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  separator: {
    width: moderateScale(138),
    height: moderateScale(1),
    backgroundColor: "black",
  },
  // estilos de los demas inicios de sesion
  buttomContainerOtrosLogin: {
    width: "100%",
    //backgroundColor: "red",
    //marginBottom: verticalScale(10),
    gap: moderateScale(10),
  },
  // estilos boton google
  buttomOtrosContainer: {
    width: "100%",
    //backgroundColor: "green",
  },
  buttomOtros: {
    backgroundColor: "#fff",
    width: "100%",
    paddingVertical: verticalScale(8),
    paddingHorizontal: verticalScale(15),
    borderRadius: moderateScale(20),
    alignItems: "center",
    flexDirection: "row",
    //elevation: 5, // sombreado
    borderWidth: verticalScale(1),
    borderColor: "black",
  },
  iconGoogleStyle: {
    paddingHorizontal: moderateScale(24),
    width: moderateScale(20),
    height: moderateScale(20),
  },
  buttomOtrosText: {
    color: "black",
    fontSize: moderateScale(16),
    paddingHorizontal: moderateScale(20),
    fontWeight: "bold",
  },
  // estilos de los botones del footer
  ButtomFooterContainer: {
    width: "100%",
    height: moderateScale(30),
    flexDirection: "row",
    //backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    gap: moderateScale(10),
  },
  // estilo del separador de los botones del footer
  separatorButtomFooter: {
    width: moderateScale(2), // 46%
    height: moderateScale(15),
    backgroundColor: "black",
    marginHorizontal: moderateScale(4),
  }
});

export default InputEmail;
