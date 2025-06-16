import ImagesPath from '@/src/constants/ImagesPath'
import { AntDesign, Entypo, Feather, Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import React from 'react'
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale, verticalScale } from 'react-native-size-matters'

const Publication1 = () => {
  // logica boton iniciar sesion
  let isLogin = false

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

            <TouchableOpacity
              style={styles.actionIcon}
              onPress={() => router.push('/(notifications)/notification')}
            >
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

          {/* solo aparece si NO esta logeado */}
          {!isLogin && <View style={styles.separator} />}

          {/* solo aparece si NO esta logeado */}
          {isLogin ? (
            <TouchableOpacity
              style={styles.actionButton}
              //onPress={() => router.push("/(tabs)/store")} // () => { router.push("/(auth)/FormLogin") }
            >
              <Entypo
                name="new-message"
                size={moderateScale(20)}
                color="gray"
              />
              <Text style={styles.textActionsIcon}>Vender</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.actionButton}
              /*
              ahora lleva al formulario de login directame, no abre el modal
              el onPress={handleLogin} abria el modal
              */
              onPress={() => {
                router.push('/(auth)/FormLogin')
              }}
            >
              <AntDesign name="login" size={moderateScale(20)} color="gray" />
              <Text style={styles.textActionsIcon}>Iniciar Sesión</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.publicationContainer}>
          <Text>2023 | 16.000 km - Publicado hace 2 meses</Text>

          <Text style={{ fontSize: moderateScale(24), fontWeight: 'bold' }}>
            Volkswagen Polo
          </Text>

          <View style={styles.imagePublicationContainer}>
            <Image
              source={ImagesPath.imageDefault2}
              style={styles.imagePublication}
              resizeMode="contain"
            />
          </View>

          <View
            style={[
              { marginBottom: verticalScale(8) },
              styles.labelPublicationContainer,
            ]}
          >
            <Text style={{ fontSize: moderateScale(24), fontWeight: 'bold' }}>
              $ 15.000.000
            </Text>
            <Text style={{ fontSize: moderateScale(20), fontWeight: 'bold' }}>
              Descripcion
            </Text>
            <Text>En perfecto estado. Papeles al dia</Text>
            <Text>
              ¡Calidad alemana, bajo consumo y alto valor de reventa! Perfecto
              para quien busca practicidad sin dejar de lucir estilo.
              ¡Contáctanos y llévatelo!
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.buttomDetallesContainer}>
          <TouchableOpacity
            style={styles.buttomDetalles}
            onPress={() => router.push('/(publications)/publication1')}
          >
            <Text style={styles.buttomDetallesText}>Más Detalles</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttomContactContainer}>
          <TouchableOpacity style={styles.buttomContact}>
            <Text style={styles.buttomContactText}>Preguntar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttomContact}>
            <Text style={styles.buttomContactText}>Whatshapp</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  // estilos de la estructura
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
    //paddingVertical: verticalScale(20),
  },
  header: {
    height: moderateScale(120),
    width: '100%',
    //backgroundColor: "red",
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    height: moderateScale(430),
    width: '100%',
    //backgroundColor: "yellow",
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    height: moderateScale(120),
    width: '100%',
    //backgroundColor: "red",
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    gap: moderateScale(10),
  },
  // estilos del contenido del header
  searchContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
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
    height: '100%',
    fontSize: moderateScale(16),
    backgroundColor: '#F5F5F5',
    borderRadius: moderateScale(20),
    paddingVertical: 0,
  },
  searchActions: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: moderateScale(12),
    gap: moderateScale(16),
  },
  actionIcon: {
    padding: moderateScale(4),
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: moderateScale(8),
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: verticalScale(8),
    paddingHorizontal: moderateScale(12),
    borderRadius: moderateScale(20),
    backgroundColor: '#F5F5F5',
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: moderateScale(4),
  },
  textActionsIcon: {
    fontSize: moderateScale(14),
    marginLeft: moderateScale(8),
    color: '#555',
  },
  separator: {
    width: 1,
    height: moderateScale(24),
    backgroundColor: '#E0E0E0',
    marginHorizontal: moderateScale(4),
  },
  // estilo para la publicacion
  publicationContainer: {
    width: '90%',
    //height: moderateScale(450),
    //backgroundColor: "red",
    justifyContent: 'center',
    //gap: moderateScale(5)
  },
  imagePublicationContainer: {
    height: moderateScale(220),
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(10),
  },
  imagePublication: {
    width: moderateScale(300),
    height: moderateScale(210),
  },
  labelPublicationContainer: {
    width: '100%',
    textAlign: 'left',
    //paddingHorizontal: moderateScale(10),
  },
  // estilos para los botones de mas detalles
  buttomDetallesContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(20),
    //paddingHorizontal: moderateScale(90),
    //marginTop: verticalScale(10),
    //marginBottom: verticalScale(10),
    //backgroundColor: "yellow",
  },
  buttomDetalles: {
    backgroundColor: '#F5F5F5',
    width: moderateScale(330),
    paddingVertical: verticalScale(10),
    paddingHorizontal: verticalScale(10),
    borderRadius: moderateScale(20),
    alignItems: 'center',
  },
  buttomDetallesText: {
    color: '#1A73E9',
    fontSize: moderateScale(16),
    fontWeight: 'bold',
  },
  // estilos para los botones de contacto
  buttomContactContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(20),
    //paddingHorizontal: moderateScale(10),
    //marginTop: verticalScale(10),
    //marginBottom: verticalScale(10),
    //backgroundColor: "yellow",
  },
  buttomContact: {
    backgroundColor: '#A230C7',
    width: moderateScale(155),
    paddingVertical: verticalScale(10),
    paddingHorizontal: verticalScale(10),
    borderRadius: moderateScale(20),
    alignItems: 'center',
  },
  buttomContactText: {
    color: 'white',
    fontSize: moderateScale(16),
    fontWeight: 'bold',
  },
})

export default Publication1
