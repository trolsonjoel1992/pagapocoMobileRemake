import ImagesPath from "@/src/constants/ImagesPath";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, verticalScale } from "react-native-size-matters";

const SplashScreen = () => {
  
  const [isLoading, setIsLoading] = useState(false);

  let navigateToMainScreen = () => { 
    // Después del splash, navega directamente a las tabs
    router.replace("/(tabs)/home");
  }

  let loadingTimeout = () => {
    setIsLoading(true);
    setTimeout(navigateToMainScreen, 2000);
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
  textFrom: {
    fontSize: moderateScale(10),
    color: "black",
    fontWeight: "bold",
  },
});

export default SplashScreen;