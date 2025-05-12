import ImagesPath from "@/src/constants/ImagesPath";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale } from "react-native-size-matters";

const google_login = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.header}></View> */}

      <View style={styles.body}>
        <Image
          source={ImagesPath.imageGoogle}
          style={styles.imagenGoogle}
          resizeMode="contain"
        />
      </View>

      {/* <View style={styles.footer}></View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: moderateScale(20),
    paddingHorizontal: moderateScale(20),
  },
  header: {},
  body: {
    
  },
  footer: {},
  imagenGoogle: {
    
  },
});

export default google_login;
