import HeaderMainComponent from "@/src/components/atoms/HeaderMainComponent";
import ImagesPath from "@/src/constants/ImagesPath";
import { router } from "expo-router";
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

const FormLogin = () => {
  
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleLogin = () => {
    setIsModalVisible(true);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <HeaderMainComponent titulo="Iniciar Sesión" />

      <View style={styles.body}>
        <Text style={styles.textLogin}>Ingresar</Text>

        <Image
          source={ImagesPath.logo}
          style={styles.logoStyle}
          resizeMode="contain"
        />

        <TextInput
          style={styles.inputContainer}
          onChangeText={setEmail}
          value={email}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.inputContainer}
          onChangeText={setPassword}
          value={password}
          placeholder="Contraseña"
          secureTextEntry
        />
      </View>

      <View style={styles.footer}>
        {/* Uso de componente */}
        {/* <View style={{ width: moderateScale(150) }}>
          <BottomComponent titulo="Ingresar" />
        </View> */}

        <View style={{ width: moderateScale(150) }}>
          {/* Descarto uso de componentes - (solo de momento) */}
          <TouchableOpacity
            style={styles.buttomSiguienteContainer}
            onPress={handleLogin}
          >
            <Text style={styles.buttomSiguienteText}>Ingresar</Text>
          </TouchableOpacity>
        </View>
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
              ¡Has iniciado sesión correctamente!
            </Text>
            {/* <Text style={styles.modalText}>
              Ahora podes disfrutar de nuestra App.
            </Text> */}

            {/* Botón del modal */}
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => {
                setIsModalVisible(false);
                router.push("/(tabs)/home"); // navega hacia la pantalla principal
              }}
            >
              <Text style={styles.modalButtonText}>Continuar</Text>
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
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: {
    alignItems: "center",
  },
  body: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    gap: verticalScale(30),
    marginTop: verticalScale(15),
  },
  footer: {
    alignItems: "center",
    height: verticalScale(100),
    //justifyContent: "center",
    gap: verticalScale(40),
  },
  logoStyle: {
    width: verticalScale(120),
    height: verticalScale(120),
  },
  textLogin: {
    fontSize: verticalScale(32),
    color: "black",
    fontWeight: "bold",
  },
  inputContainer: {
    width: "100%",
    padding: verticalScale(10),
    borderRadius: verticalScale(20),
    borderWidth: verticalScale(1),
    borderColor: "gray",
    marginBottom: verticalScale(10),
  },
  logoSpacer: {
    height: verticalScale(20), // Espacio fijo arriba del logo
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

export default FormLogin;
