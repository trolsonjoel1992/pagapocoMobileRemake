import ImagesPath from "@/src/constants/ImagesPath";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, verticalScale } from "react-native-size-matters";

const Auth = () => {
  
  const [isLoading, setIsLoading] = useState(false);

  let navigateToTermsAgree = () => { 
    router.push("/(main)/mainScreen");
  }

  let loadingTimeout = () => {
    setIsLoading(true);
    setTimeout(navigateToTermsAgree, 2000);
  }

  useEffect(() => {
    setTimeout(loadingTimeout, 2000);
  }, []);

  /* const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    // mostrar skeleton durante 2 segundos
    const timer = setTimeout(() => {
      setShowSkeleton(false);
      // navegar despues de que desaparezca el skeleton
      //setTimeout(() => router.push("/(auth)/terms_agree"), 500);
      setTimeout(() => router.push("/(main)/mainScreen"), 500);
    }, 2000); // Cambia el tiempo según tus necesidades

    return () => clearTimeout(timer); // Limpia el temporizador si el componente se desmonta
  }, []); */

  /* if (showSkeleton) {
    return (
      <SafeAreaView style={styles.skeletonContainer}>
        <SkeletorComponent />
      </SafeAreaView>
    );
  } */

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}></View>

      <View style={styles.body}>
        <Image
          source={ImagesPath.logo}
          style={styles.logoStyle}
          resizeMode="contain"
        />
        {/* <Text style={styles.textLogo}>Paga Poco</Text> */}
        <ActivityIndicator size={moderateScale(48)} color={"purple"} />
      </View>

      <View style={styles.footer}>
        {/* {isLoading ? (
          <>
            <ActivityIndicator size={moderateScale(48)} color={"purple"} />
            <Text style={styles.textCargando}>Cargando...</Text>
          </>
        ) : (
          <>
            <Text style={styles.textFrom}>From</Text>
            <Text style={styles.textUTN}>UTN</Text>
          </>
        )} */}
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
    gap: verticalScale(7),
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
