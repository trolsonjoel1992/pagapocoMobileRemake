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
  const [isLogin, setIsLogin] = useState(false);

  // si esta logeado
  if (isLogin) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}></View>

        <View style={styles.body}>
          <Text>TUS DATOS DE LA CUENTA</Text>
        </View>

        <View style={styles.footer}></View>
      </SafeAreaView>
    );
  }

  // Si no esta logueado
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>

        {/* Relleno de la pantalla de atras */}
        <Text style={styles.modalText}>
          No has iniciado sesión para ver tu perfil
        </Text>

      </View>

      <View style={styles.body}>

        {/* Relleno de la pantalla de atras */}
        
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

            <Text style={styles.modalTitle}>¡IMPORTANTE!</Text>
            <Text style={styles.modalText}>
              Se requiere autenticación para ver su perfil
            </Text>
            <Text style={styles.modalText}>Inicia sesión o registrate</Text>

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

      <View style={styles.footer}>
        {/* Relleno de la pantalla de atras */}
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
    paddingVertical: moderateScale(30),
    paddingHorizontal: moderateScale(30),
  },
  header: {
    alignItems: "center",
  },
  body: {
    alignItems: "center",
    height: verticalScale(400),
    gap: verticalScale(40),
  },
  footer: {},
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
