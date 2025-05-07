import BottomComponent from "@/src/components/atoms/BottomComponent";
import ImagesPath from "@/src/constants/ImagesPath";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, verticalScale } from "react-native-size-matters";

const TermsAgree = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textBienvenida}>Bienvenido a PagaPoco</Text>
        <Image
          source={ImagesPath.logo}
          style={styles.logoTermsStyle}
          resizeMode="contain"
        />
        <Text style={styles.textDescripcion}>
          Lorem ipsum <Text style={styles.textLink}>dolor</Text> sit amet 
          consectetur <Text style={styles.textLink}>adipisicing</Text> elit. Asperiores
          eaque excepturi?
        </Text>
        <View style={{ width: moderateScale(300) }}>
            <BottomComponent titulo="CLICK SOBRE MI" />
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.textFrom}>From</Text>
        <Text style={styles.textUTN}>UTN</Text>
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
    gap: moderateScale(30),
  },
  footer: {
    alignItems: "center",
    height: verticalScale(70),
    justifyContent: "flex-end",
  },
  logoTermsStyle: {
    width: moderateScale(200),
    height: moderateScale(200),
    borderRadius: moderateScale(250),
  },
  textFrom: {
    fontSize: moderateScale(10),
    color: "#867373",
  },
  textUTN: {
    fontSize: moderateScale(20),
    color: "#867373",
  },
  textBienvenida: {
    fontSize: moderateScale(30),
    color: "black",
    fontWeight: "bold",
  },
  textDescripcion: {
    fontSize: moderateScale(13),
    color: "#867373",
    textAlign: "center",
  },
  textLink: {
    color: "blue",
    fontWeight: "bold",
  }
});

export default TermsAgree;
