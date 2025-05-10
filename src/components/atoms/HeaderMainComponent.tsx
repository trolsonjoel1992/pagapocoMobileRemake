import ImagesPath from "@/src/constants/ImagesPath";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { moderateScale, verticalScale } from "react-native-size-matters";

type HeaderProps = {
  titulo: string;
  onBackPress?: () => void; // Prop opcional para funcionalidad futura
};

const HeaderMainComponent = ({ titulo, onBackPress }: HeaderProps) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.backButton} // Estilo con área táctil amplia
        onPress={onBackPress} // Funcionalidad opcional
        activeOpacity={0.6} // Efecto visual al presionar
      >
        <Image
          source={ImagesPath.imageArrowBack}
          style={styles.logoArrowBackStyle}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <Text style={styles.textCuenta}>{titulo}</Text>
      
      {/* Espacio invisible para balancear el diseño */}
      <View style={styles.invisibleSpacer} /> 
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    backgroundColor: "#A230C7",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: verticalScale(16),
  },
  backButton: {
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScale(16),
    zIndex: 1, // Asegura que esté por encima de otros elementos
  },
  logoArrowBackStyle: {
    width: moderateScale(24),
    height: moderateScale(24),
  },
  textCuenta: {
    color: "black",
    fontSize: moderateScale(18),
    fontWeight: "bold",
    position: "absolute", // Centrado absoluto
    left: 0,
    right: 0,
    textAlign: "center",
  },
  invisibleSpacer: {
    width: moderateScale(44), // Mismo ancho que el botón para equilibrio
  },
});

export default HeaderMainComponent;