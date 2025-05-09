import HeaderMainComponent from "@/src/components/atoms/HeaderMainComponent";
import ImagesPath from "@/src/constants/ImagesPath";
import React, { useState } from "react";
import {
    Image,
    Modal,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, verticalScale } from "react-native-size-matters";

const InputPassword = () => {
  const [password, setPassword] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleRegister = () => {
    setIsModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.header}></View> */}
      <HeaderMainComponent titulo="Cuenta" />

      <View style={styles.body}>
        <Text style={styles.textTitle}>Crea tu constraseña</Text>

        <TextInput
          style={styles.inputContainer}
          onChangeText={setPassword}
          value={password}
          placeholder=""
          secureTextEntry
        />

        {/* Botón personalizado (no usa BottomComponent) */}
        <TouchableOpacity
          style={[styles.customButton, { width: moderateScale(150) }]}
          onPress={handleRegister}
        >
          <Text style={styles.customButtonText}>Registrarme</Text>
        </TouchableOpacity>
      </View>

      {/* Modal de éxito */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>

            <Image 
                source={ImagesPath.iconConfirmed}
                style={{ width: moderateScale(110), height: moderateScale(110) }}
                resizeMode="contain"
            />

            <Text style={styles.modalTitle}>¡Bienvenido!</Text>
            <Text style={styles.modalText}>
              Has creado tu cuenta con éxito.
            </Text>
            <Text style={styles.modalText}>
              Ahora podes disfrutar de nuestra App.
            </Text>

            {/* Botón del modal */}
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setIsModalVisible(false)}
            >
              <Text style={styles.modalButtonText}>Continuar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View style={styles.footer}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },
  body: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingVertical: moderateScale(20),
    gap: verticalScale(30),
  },
  footer: {},
  textTitle: {
    color: "black",
    fontSize: moderateScale(25),
    fontWeight: "bold",
    marginBottom: moderateScale(20),
  },
  inputContainer: {
    width: "80%",
    padding: verticalScale(10),
    borderRadius: verticalScale(20),
    borderWidth: verticalScale(1),
    borderColor: "gray",
    marginBottom: verticalScale(10),
  },
  // Estilos para el botón personalizado
  customButton: {
    backgroundColor: "#A230C7",
    paddingVertical: verticalScale(10),
    borderRadius: moderateScale(20),
    alignItems: "center",
  },
  customButtonText: {
    color: "white",
    fontSize: moderateScale(13),
    fontWeight: "bold",
  },
  // Estilos para el modal
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '80%',
  },
  modalTitle: {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  modalText: {
    fontSize: moderateScale(16),
    marginBottom: 10,
    textAlign: 'center',
  },
  modalButton: {
    backgroundColor: '#A230C7',
    borderRadius: 10,
    padding: 12,
    marginTop: 15,
    width: '100%',
    alignItems: 'center',
  },
  modalButtonText: {
    color: 'white',
    fontSize: moderateScale(16),
    fontWeight: 'bold',
  },
});

export default InputPassword;
