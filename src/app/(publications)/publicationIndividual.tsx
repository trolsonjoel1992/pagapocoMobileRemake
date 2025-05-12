import ImagesPath from "@/src/constants/ImagesPath";
import { Feather } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, verticalScale } from "react-native-size-matters";

const publicationIndividual = () => {
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

          <TouchableOpacity style={styles.actionButton}>
            <AntDesign name="login" size={moderateScale(20)} color="gray" />
            <Text style={styles.textActionsIcon}>Iniciar Sesión</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.body}>
        {/* Ubicacion, Titulo Publicacion, Imagen, precio, descripcion, boton carateristicas */}

        <View style={styles.publicationContainer}>
          <View style={styles.labelPublicationContainer}>
            <Text>2023 | 16.000 km - Publicado hace 2 meses</Text>

            <Text style={{ fontSize: moderateScale(24), fontWeight: "bold" }}>Volkswagen Polo</Text>
          </View>

          <Image
            source={ImagesPath.imageCar1}
            style={styles.imagePublication}
            resizeMode="contain"
          />

          <View
            style={[
              { marginBottom: verticalScale(8) },
              styles.labelPublicationContainer,
            ]}
          >
            <Text style={{ fontSize: moderateScale(24), fontWeight: "bold" }}>$ 15.000.000</Text>
            <Text style={{fontSize: moderateScale(20), fontWeight: "bold" }}>Descripcion</Text>
            <Text>En perfecto estado. Papeles al dia</Text>
          </View>

          <View style={[styles.caracteristicasButtonWrapper, { width: moderateScale(340) }]}>
            <TouchableOpacity style={styles.buttomCarateristicaContainer}>
              <Text style={styles.textButtonCaracteristica}>Caracteristicas</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.buttomFooter}>
          <View style={styles.footerButtonWrapper}>
            <TouchableOpacity style={styles.buttomPreguntarContainer}>
              <Text style={styles.buttomPreguntarText}>Preguntar</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.footerButtonWrapper}>
            <TouchableOpacity style={styles.buttomPreguntarContainer}>
              <Text style={styles.buttomPreguntarText}>Whatshapp</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>

      {/* boton preguntar y whatsap */}
      {/* <View style={styles.footer}>
        
        <View style={styles.buttomFooter}>
          <View style={styles.footerButtonWrapper}>
            <TouchableOpacity style={styles.buttomPreguntarContainer}>
              <Text style={styles.buttomPreguntarText}>Preguntar</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.footerButtonWrapper}>
            <TouchableOpacity style={styles.buttomPreguntarContainer}>
              <Text style={styles.buttomPreguntarText}>Whatshapp</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View> */}
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  header: {
    width: "100%",
    paddingVertical: verticalScale(10),
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
  imagePublication: {
    width: moderateScale(320),
    height: moderateScale(260),
  },
  publicationContainer: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: moderateScale(10),
    gap: moderateScale(4),
  },
  labelPublicationContainer: {
    width: "100%",
    textAlign: "left",
    paddingHorizontal: moderateScale(10),
  },
  caracteristicasButtonWrapper: {
    width: moderateScale(200),
    alignSelf: "flex-start",
    paddingHorizontal: moderateScale(10),
  },
  buttomCarateristicaContainer: {
    backgroundColor: "#ECECEC",
    width: "100%",
    paddingVertical: verticalScale(8),
    paddingHorizontal: verticalScale(10),
    borderRadius: moderateScale(20),
    alignItems: "center",
    marginBottom: verticalScale(10),
  },
  textButtonCaracteristica: {
    color: "#1A73E9",
    fontSize: moderateScale(16),
    paddingHorizontal: moderateScale(40),
    fontWeight: "bold",
  },
  footerButtonWrapper: {
    width: moderateScale(150),
  },
  buttomPreguntarContainer: {
    backgroundColor: "#A230C7",
    width: "100%",
    paddingVertical: verticalScale(10),
    paddingHorizontal: verticalScale(10),
    borderRadius: moderateScale(20),
    alignItems: "center",
  },
  buttomPreguntarText: {
    color: "white",
    fontSize: moderateScale(16),
    fontWeight: "bold",
  },
  buttomFooter: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(20),
    paddingHorizontal: moderateScale(10),
    //marginTop: verticalScale(10),
    marginBottom: verticalScale(10),
  },
});

export default publicationIndividual;
