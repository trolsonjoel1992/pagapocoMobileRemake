import SkeletorComponent from "@/src/components/atoms/SkeletorComponent";
import ImagesPath from "@/src/constants/ImagesPath";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
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

const HomeScreen = () => {
  const [isModalLoginVisible, setIsModalLoginVisible] = useState(false);

  const handleLogin = () => {
    setIsModalLoginVisible(true);
  };

  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    // mostrar skeleton durante 2 segundos
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (showSkeleton) {
    return (
      <SafeAreaView style={styles.skeletonContainer}>
        <SkeletorComponent />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {/* Buscador, Notificaciones, Login*/}

        {/* Barra de busqueda */}
        <View style={styles.searchContainer}>
          {/* Boton de busqueda */}
          <TouchableOpacity style={styles.searchIconContainer}>
            <Feather
              name="search"
              size={moderateScale(24)}
              color="gray"
              style={styles.searchIcon}
            />
          </TouchableOpacity>

          <TextInput style={styles.searchInput} placeholder=" Buscar..." />

          {/* botones de filtro y notificaciones */}
          <View style={styles.searchActions}>
            <TouchableOpacity style={styles.actionIcon}>
              <Feather name="filter" size={moderateScale(24)} color="gray" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionIcon}>
              <Ionicons
                name="notifications-outline"
                size={moderateScale(24)}
                color="gray"
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Botones de acciones - login y ubicacion */}
        <View style={styles.actionsContainer}>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons
              name="location-outline"
              size={moderateScale(20)}
              color="gray"
            />
            <Text style={styles.textActionsIcon}>Elige tu ciudad</Text>
          </TouchableOpacity>

          <View style={styles.separator} />

          <TouchableOpacity
            style={styles.actionButton}
            onPress={handleLogin} // () => { router.push("/(auth)/FormLogin") }
          >
            <AntDesign name="login" size={moderateScale(20)} color="gray" />
            <Text style={styles.textActionsIcon}>Iniciar Sesión</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.body}>
        <Text style={{ textAlign: "center" }}>Body</Text>
        <Text style={{ textAlign: "center" }}>Publicaciones</Text>

        <View style={{ width: moderateScale(150) }}>
          <TouchableOpacity
            style={styles.buttomPublicacionContainer}
            onPress={() => router.push("/(publications)/publicationIndividual")}
          >
            <Text style={styles.buttomPublicacionText}>Publicacion 1</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Modal de Login */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalLoginVisible}
        onRequestClose={() => setIsModalLoginVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image
              source={ImagesPath.iconLogin}
              style={{ width: moderateScale(110), height: moderateScale(110) }}
              resizeMode="contain"
            />

            {/* <Text style={styles.modalTitle}>¡IMPORTANTE!</Text> */}
            <Text style={styles.modalText}>Inicia Sesión</Text>
            <Text style={styles.modalText}>o</Text>
            <Text style={styles.modalText}>create una cuenta.</Text>

            {/* Botón del modal */}
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => {
                setIsModalLoginVisible(false);
                router.push("/(auth)/login");
              }}
            >
              <Text style={styles.modalButtonText}>Entendido</Text>
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
    backgroundColor: "#fff",
  },
  header: {
    width: "100%",
    //paddingVertical: verticalScale(10),
    paddingHorizontal: moderateScale(10),
  },
  searchContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: moderateScale(20),
    paddingHorizontal: moderateScale(10),
    height: moderateScale(40),
    gap: moderateScale(4),
    marginBottom: verticalScale(16),
  },
  searchIcon: {
    marginRight: moderateScale(10),
  },
  searchIconContainer: {
    paddingHorizontal: moderateScale(12),
  },
  searchInput: {
    flex: 1,
    height: "100%",
    fontSize: moderateScale(16),
    backgroundColor: "#F5F5F5",
    borderRadius: moderateScale(20),
    paddingVertical: 0,
  },
  searchActions: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: moderateScale(12),
    gap: moderateScale(16),
  },
  actionIcon: {
    padding: moderateScale(4),
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: moderateScale(8),
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: verticalScale(8),
    paddingHorizontal: moderateScale(12),
    borderRadius: moderateScale(20),
    backgroundColor: "#F5F5F5",
    flex: 1,
    justifyContent: "center",
    marginHorizontal: moderateScale(4),
  },
  textActionsIcon: {
    fontSize: moderateScale(14),
    marginLeft: moderateScale(8),
    color: "#555",
  },
  separator: {
    width: 1,
    height: moderateScale(24),
    backgroundColor: "#E0E0E0",
    marginHorizontal: moderateScale(4),
  },
  body: {
    flex: 1,
    width: "100%",
    paddingVertical: verticalScale(20),
    paddingHorizontal: moderateScale(10),
  },
  footer: {
    width: "100%",
    marginBottom: verticalScale(20),
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
    fontWeight: "bold",
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
  // estilos botones
  buttomPublicacionContainer: {
    backgroundColor: "#A230C7",
    width: "100%",
    paddingVertical: verticalScale(10),
    paddingHorizontal: verticalScale(10),
    borderRadius: moderateScale(20),
    alignItems: "center",
  },
  buttomPublicacionText: {
    color: "white",
    fontSize: moderateScale(16),
    fontWeight: "bold",
  },
  // estilos del skeletor
  skeletonContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: moderateScale(70),
  },
  skeletonHeader: {
    height: verticalScale(20),
    width: "100%",
    backgroundColor: "#f0f0f0",
  },
  skeletonBody: {
    alignItems: "center",
    gap: verticalScale(7),
  },
  skeletonLogo: {
    height: moderateScale(100),
    width: moderateScale(100),
    backgroundColor: "#f0f0f0",
    borderRadius: moderateScale(10),
  },
  skeletonFooter: {
    alignItems: "center",
    height: verticalScale(70),
    justifyContent: "flex-end",
  },
  skeletonText: {
    width: moderateScale(150),
    height: verticalScale(15),
    backgroundColor: "#f0f0f0",
  },
});

export default HomeScreen;
