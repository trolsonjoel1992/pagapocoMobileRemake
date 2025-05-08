import BottomComponent from "@/src/components/atoms/BottomComponent";
import ImagesPath from "@/src/constants/ImagesPath";
import React, { useState } from "react";
import {
    Image,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, verticalScale } from "react-native-size-matters";

const Form_login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={0} // importante para Android
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
          <ScrollView
            contentContainerStyle={styles.scrollContainer}
            keyboardShouldPersistTaps="handled"
          >
            <View style={styles.header}>
              <Image
                source={ImagesPath.logo}
                style={styles.logoStyle}
                resizeMode="contain"
              />
            </View>

            <View style={styles.body}>
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
          </ScrollView>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: verticalScale(70),
    minHeight: "100%", // evita problemas de colapso
  },
  header: {
    alignItems: "center",
  },
  body: {
    width: "80%",
    justifyContent: "center",
    gap: verticalScale(10),
  },
  footer: {
    alignItems: "center",
    height: verticalScale(70),
    justifyContent: "flex-end",
  },
  logoStyle: {
    width: verticalScale(150),
    height: verticalScale(150),
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
});

export default Form_login;
