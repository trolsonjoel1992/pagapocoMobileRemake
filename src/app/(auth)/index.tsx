/* import ImagesPath from "@/src/constants/ImagesPath";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, verticalScale } from "react-native-size-matters";

const Auth = () => {
  
  const [isLoading, setIsLoading] = useState(false);

  let navigateToTermsAgree = () => { 
    //router.push("/(main)/mainScreen");
    //router.push("/(auth)/login");
    //router.push("/(auth)/(login)/FormLogin");
    //router.push("/(auth)/(register)/InputEmail");
    //router.push("/(auth)/(register)/InputPassword");
    //router.push("/(tabs)/index");
    router.push("/(tabs)");
  }

  let loadingTimeout = () => {
    setIsLoading(true);
    setTimeout(navigateToTermsAgree, 2000);
  }

  useEffect(() => {
    setTimeout(loadingTimeout, 2000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}></View>

      <View style={styles.body}>
        <Image
          source={ImagesPath.logo}
          style={styles.logoStyle}
          resizeMode="contain"
        />
        <ActivityIndicator size={moderateScale(48)} color={"purple"} />
      </View>

      <View style={styles.footer}>
        <Text style={styles.textFrom}>@2025 | PagaPoco</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: moderateScale(70),
  },
  header: {},
  body: {
    alignItems: "center",
    gap: verticalScale(20), // 7
  },
  footer: {
    alignItems: "center",
    height: verticalScale(70),
    justifyContent: "flex-end",
  },
  logoStyle: {
    height: moderateScale(100),
    width: moderateScale(100),
  },
  textLogo: {
    fontSize: moderateScale(30),
    color: "black",
    fontWeight: "bold",
  },
  textFrom: {
    fontSize: moderateScale(10),
    color: "black",
    fontWeight: "bold",
  },
  textUTN: {
    fontSize: moderateScale(20),
    color: "#867373",
  },
  textCargando: {
    fontSize: moderateScale(10),
    color: "black",
  },
});

export default Auth;
 */

/* import ImagesPath from "@/src/constants/ImagesPath";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, verticalScale } from "react-native-size-matters";

const Auth = () => {
  const [isLoading, setIsLoading] = useState(false);

  let navigateToLogin = () => { 
    router.push("/(auth)/login");
    // Alternativamente, puedes dirigir directamente a un formulario específico
    // router.push("/(auth)/(login)/FormLogin");
  }

  let loadingTimeout = () => {
    setIsLoading(true);
    setTimeout(navigateToLogin, 2000);
  }

  useEffect(() => {
    setTimeout(loadingTimeout, 2000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}></View>

      <View style={styles.body}>
        <Image
          source={ImagesPath.logo}
          style={styles.logoStyle}
          resizeMode="contain"
        />
        <ActivityIndicator size={moderateScale(48)} color={"purple"} />
      </View>

      <View style={styles.footer}>
        <Text style={styles.textFrom}>@2025 | PagaPoco</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // Tus estilos actuales
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: moderateScale(70),
  },
  header: {},
  body: {
    alignItems: "center",
    gap: verticalScale(20),
  },
  footer: {
    alignItems: "center",
    height: verticalScale(70),
    justifyContent: "flex-end",
  },
  logoStyle: {
    height: moderateScale(100),
    width: moderateScale(100),
  },
  textFrom: {
    fontSize: moderateScale(10),
    color: "black",
    fontWeight: "bold",
  },
});

export default Auth; */

import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale, verticalScale } from 'react-native-size-matters';

// Esta pantalla ahora se usa como la principal de autenticación
const AuthScreen = () => {
  const handleLogin = () => {
    // Aquí iría tu lógica de autenticación
    router.back(); // Regresar a donde estaba el usuario
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Iniciar Sesión</Text>
      </View>
      
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
        />
        
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
        
        <View style={styles.optionsContainer}>
          <TouchableOpacity>
            <Text style={styles.optionText}>¿Olvidaste tu contraseña?</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => router.push("/(auth)/(register)/InputEmail")}>
            <Text style={styles.optionText}>Registrarse</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: moderateScale(20),
  },
  header: {
    marginTop: verticalScale(20),
    marginBottom: verticalScale(40),
  },
  headerText: {
    fontSize: moderateScale(24),
    fontWeight: 'bold',
    color: 'black',
  },
  formContainer: {
    gap: verticalScale(15),
  },
  input: {
    height: verticalScale(50),
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: moderateScale(8),
    paddingHorizontal: moderateScale(15),
    fontSize: moderateScale(16),
  },
  loginButton: {
    backgroundColor: 'purple',
    height: verticalScale(50),
    borderRadius: moderateScale(8),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(10),
  },
  buttonText: {
    color: 'white',
    fontSize: moderateScale(16),
    fontWeight: 'bold',
  },
  optionsContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    marginTop: verticalScale(20),
  },
  optionText: {
    color: 'purple',
    fontSize: moderateScale(14),
  },
});

export default AuthScreen;