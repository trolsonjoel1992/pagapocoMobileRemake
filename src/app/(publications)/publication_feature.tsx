import HeaderMainComponent from "@/src/components/atoms/HeaderMainComponent";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, verticalScale } from "react-native-size-matters";

const Publication_feature = () => {

  return (
    <SafeAreaView style={styles.container}>

      <HeaderMainComponent titulo="Caracteristicas de la publicación" />

      <View style={styles.header}></View>

      <View style={styles.body}>

        <View style={styles.attributes}>

          <View style={[{ backgroundColor: "#ECE6F0" }, styles.item]}>
            <Text style={{ fontWeight: "bold" }}>Marca</Text>
            <Text>----</Text>
          </View>

          <View style={[{ backgroundColor: "#F7F5F9" }, styles.item]}>
            <Text style={{ fontWeight: "bold" }}>Modelo</Text>
            <Text>----</Text>
          </View>

          <View style={[{ backgroundColor: "#ECE6F0" }, styles.item]}>
            <Text style={{ fontWeight: "bold" }}>Año</Text>
            <Text>----</Text>
          </View>

          <View style={[{ backgroundColor: "#F7F5F9" }, styles.item]}>
            <Text style={{ fontWeight: "bold" }}>Version</Text>
            <Text>----</Text>
          </View>

          <View style={[{ backgroundColor: "#ECE6F0" }, styles.item]}>
            <Text style={{ fontWeight: "bold" }}>Color</Text>
            <Text>----</Text>
          </View>

          <View style={[{ backgroundColor: "#F7F5F9" }, styles.item]}>
            <Text style={{ fontWeight: "bold" }}>Tipo de combustible</Text>
            <Text>----</Text>
          </View>

          <View style={[{ backgroundColor: "#ECE6F0" }, styles.item]}>
            <Text style={{ fontWeight: "bold" }}>Puertas</Text>
            <Text>----</Text>
          </View>

          <View style={[{ backgroundColor: "#F7F5F9" }, styles.item]}>
            <Text style={{ fontWeight: "bold" }}>Transmisión</Text>
            <Text>----</Text>
          </View>

          <View style={[{ backgroundColor: "#ECE6F0" }, styles.item]}>
            <Text style={{ fontWeight: "bold" }}>Cilindrada</Text>
            <Text>----</Text>
          </View>

          <View style={[{ backgroundColor: "#F7F5F9" }, styles.item]}>
            <Text style={{ fontWeight: "bold" }}>Tipo de Carroceria</Text>
            <Text>----</Text>
          </View>

          <View style={[{ backgroundColor: "#ECE6F0" }, styles.item]}>
            <Text style={{ fontWeight: "bold" }}>Kilometros</Text>
            <Text>----</Text>
          </View>

          <View style={[{ backgroundColor: "#F7F5F9" }, styles.item]}>
            <Text style={{ fontWeight: "bold" }}>Estado</Text>
            <Text>----</Text>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <View style={{ width: moderateScale(150) }}>
          <TouchableOpacity
            style={styles.buttomVolverContainer}
            onPress={() => router.back("/(publications)/publicationIndividual")}
          >
            <Text style={styles.buttomVolverText}>Volver</Text>
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
    marginBottom: moderateScale(30),
  },
  body: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    //gap: verticalScale(30),
    //marginTop: verticalScale(15),
    marginBottom: moderateScale(40),
  },
  attributes: {
    justifyContent: "center",
    alignItems: "center",
    gap: moderateScale(2),
  },
  item: {
    width: "100%",
    //backgroundColor: "#ECE6F0",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: moderateScale(20),
    paddingVertical: verticalScale(10),
    paddingHorizontal: moderateScale(20),
  },
  footer: {
    alignItems: "center",
    height: verticalScale(100),
    //justifyContent: "center",
    gap: verticalScale(40),
  },
  // estilos de botones
  buttomVolverContainer: {
    backgroundColor: "#A230C7",
    width: "100%",
    paddingVertical: verticalScale(10),
    paddingHorizontal: verticalScale(10),
    borderRadius: moderateScale(20),
    alignItems: "center",
  },
  buttomVolverText: {
    color: "white",
    fontSize: moderateScale(13),
    fontWeight: "bold",
  },
});

export default Publication_feature;
