import ImagesPath from "@/src/constants/ImagesPath";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, verticalScale } from "react-native-size-matters";

const Profile = () => {

  // logica de la visibilidad del modal
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleRegister = () => {
    setIsModalVisible(true);
  };

  // logica si esta o no logeado
  //const [isLogin, setIsLogin] = useState(true);
  let isLogin = true;

  // si esta logeado
  if (isLogin) {
    return (
      <SafeAreaView style={styles.container}>
       
        <View style={styles.header}>
          <Text>
            <Text>Header</Text>
          </Text>
        </View>

        <View style={styles.body}>
          <Text>Body</Text>
          <Text style={{ fontSize: 24, color: "white" }}>Perfil</Text>
        </View>

        <View style={styles.footer}>
          <Text>Footer</Text>
        </View>

      </SafeAreaView>
    );
  }

  // Si no esta logueado
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>

        {/* Relleno de la pantalla de atras */}
        <Text style={styles.modalText}>
          <Text>Header</Text>
        </Text>

      </View>

      <View style={styles.body}>
        {/* Relleno de la pantalla de atras */}
        <Text>Body</Text>
        <Text style={{ fontSize: 24, color: "white" }}>Perfil</Text>
      </View>

      <View style={styles.footer}>
        {/* Relleno de la pantalla de atras */}
        <Text>Footer</Text>
      </View>

      {/* Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={true} // si no esta logeado que aparezca el modal
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.centeredView}>

          <View style={styles.modalView}>

            <Image
              source={ImagesPath.iconWarning}
              style={{
                width: moderateScale(110),
                height: moderateScale(110),
              }}
              resizeMode="contain"
            />

            {/* <Text style={styles.modalTitle}>¡IMPORTANTE!</Text> */}
            <Text style={styles.modalText}>
              Para poder utilizar ésta función,
            </Text>
            <Text style={styles.modalText}>Ingrese a su cuenta</Text>

            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => {
                setIsModalVisible(false);
                router.push("/(auth)/login");
              }}
            >
              <Text style={styles.buttomSiguienteText}>Acceder</Text>
            </TouchableOpacity>

          </View>

        </View>

      </Modal>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: verticalScale(70),
  },
  header: {
    height: moderateScale(40),
    width: "100%",
    backgroundColor: "red",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  body: {
    height: moderateScale(60),
    width: "100%",
    backgroundColor: "gray",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    height: moderateScale(40),
    width: "100%",
    backgroundColor: "red",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
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
  // Estilos para el modal
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "80%",
  },
  modalTitle: {
    fontSize: moderateScale(20),
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  modalText: {
    fontSize: moderateScale(16),
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "bold"
  },
  modalButton: {
    backgroundColor: "#A230C7",
    borderRadius: 10,
    padding: 12,
    marginTop: 15,
    width: "100%",
    alignItems: "center",
  },
  modalButtonText: {
    color: "white",
    fontSize: moderateScale(16),
    fontWeight: "bold",
  },
});

export default Profile;
