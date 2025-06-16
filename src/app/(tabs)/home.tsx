import SearchBarMainComponent from '@/src/components/atoms/SearchBarMainComponent'
import SkeletorComponent from '@/src/components/atoms/SkeletorComponent'
import ImagesPath from '@/src/constants/ImagesPath'
import { useAuth } from '@/src/hooks/useAuth'
import { router } from 'expo-router'
import React, { useEffect, useState } from 'react'
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale, verticalScale } from 'react-native-size-matters'

const HomeScreen = () => {
  // logica boton iniciar sesion
  //let isLogin = false;
  const { user, isLoading } = useAuth()

  const { logout } = useAuth()

  // logica modal
  const [isModalLoginVisible, setIsModalLoginVisible] = useState(false)

  const handleLogin = () => {
    setIsModalLoginVisible(true)
  }

  // logica skeleton
  const [showSkeleton, setShowSkeleton] = useState(true)

  useEffect(() => {
    // mostrar skeleton durante 2 segundos
    const timer = setTimeout(() => {
      setShowSkeleton(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  if (showSkeleton) {
    return (
      <SafeAreaView style={styles.skeletonContainer}>
        <SkeletorComponent />
      </SafeAreaView>
    )
  }

  // Datos de ejemplo para las publicaciones
  const mockPublications = [
    /* {
      id: 'ad-1',
      type: 'full-width-ad',
      title: "Anuncio Especial",
      content: "Este es un anuncio que ocupa todo el ancho",
    }, */
    {
      id: 1,
      title: 'Nombre publicación',
      price: '$000.000',
      //image: "https://example.com/iphone.jpg",
      //location: 'Resistencia, Chaco',
    },
    {
      id: 2,
      title: 'Nombre publicación',
      price: '$000.000',
      //image: "https://example.com/sofa.jpg",
      //location: 'Barranqueras, Chaco',
    },
    {
      id: 3,
      title: 'Nombre publicación',
      price: '$000.000',
      //image: "https://example.com/bike.jpg",
      //location: 'Resistencia, Chaco',
    },
    {
      id: 4,
      title: 'Nombre publicación',
      price: '$000.000',
      //image: "https://example.com/laptop.jpg",
      //location: 'Fontana, Chaco',
    },
    {
      id: 5,
      title: 'Nombre publicación',
      price: '$000.000',
      //image: "https://example.com/bike.jpg",
      //location: 'Resistencia, Chaco',
    },
    {
      id: 6,
      title: 'Nombre publicación',
      price: '$000.000',
      //image: "https://example.com/laptop.jpg",
      //location: 'Fontana, Chaco',
    },
    {
      id: 7,
      title: 'Nombre publicación',
      price: '$000.000',
      //image: "https://example.com/bike.jpg",
      //location: 'Resistencia, Chaco',
    },
    {
      id: 8,
      title: 'Nombre publicación',
      price: '$000.000',
      //image: "https://example.com/laptop.jpg",
      //location: 'Fontana, Chaco',
    },
    // Agrega más publicaciones según necesites
  ]

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {/* Componenente del buscador */}
        <View style={styles.searchContainer}>
          {/* <SearchBarMainComponent
            showBackButton
            onBackPress={() => router.push('/(auth)/FormLogin')}
            placeholder="Buscar"
          /> */}
          <SearchBarMainComponent />
        </View>

        {/* Botones de acciones - login y ubicacion */}
        <View style={styles.actionsContainer}>
          <TouchableOpacity style={styles.actionButton}>
            {/* <Ionicons
              name="location-outline"
              size={moderateScale(20)}
              color="gray"
            /> */}
            <Image
              source={ImagesPath.iconUbicaionFigma}
              style={styles.actionIcon}
              resizeMode="contain"
            />
            <Text style={styles.textActionsIcon}>Elige tu ciudad</Text>
          </TouchableOpacity>

          {/* Boton para iniciar sesion - antiguo */}
          {/* {!user && <View style={styles.separator} />}
          {user ? (
            <View style={styles.mismoEspacio}></View>
          ) : (
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => {
                router.push('/(auth)/FormLogin')
              }}
            >
              <AntDesign name="login" size={moderateScale(20)} color="gray" />
              <Text style={styles.textActionsIcon}>Iniciar Sesión</Text>
            </TouchableOpacity>
          )} */}

          <TouchableOpacity style={styles.actionButton}>
            {/* <Ionicons
              name="location-outline"
              size={moderateScale(20)}
              color="gray"
            /> */}
            <Image
              source={ImagesPath.iconFiltroFigma}
              style={styles.actionIcon}
              resizeMode="contain"
            />
            <Text style={styles.textActionsIcon}>Filtros</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.categoriasContainer}>
          {/* <Text>Categorias</Text> */}
          <View style={styles.categoriaContainer}>
            {/* <AntDesign name="login" size={moderateScale(20)} color="black" /> */}

            <TouchableOpacity
              style={{ justifyContent: 'center', alignItems: 'center' }}
            >
              <Image
                source={ImagesPath.iconCamionFigma}
                style={styles.iconCategorias}
                resizeMode="contain"
              />

              <Text>Camiones</Text>
            </TouchableOpacity>

            {/* <Image 
              source={ImagesPath.iconCamion}
              style={styles.iconCategorias}
              resizeMode="contain"
            />

            <Text>Camiones</Text> */}
          </View>

          <View style={styles.categoriaContainer}>
            {/* <AntDesign name="login" size={moderateScale(20)} color="black" /> */}

            <TouchableOpacity
              style={{ justifyContent: 'center', alignItems: 'center' }}
            >
              <Image
                source={ImagesPath.iconCamionetaFigma}
                style={styles.iconCategorias}
                resizeMode="contain"
              />

              <Text>Camionetas</Text>
            </TouchableOpacity>

            {/* <Image 
              source={ImagesPath.iconCamioneta}
              style={styles.iconCategorias}
              resizeMode="contain"
            />

            <Text>Camioneta</Text> */}
          </View>

          <View style={styles.categoriaContainer}>
            {/* <AntDesign name="login" size={moderateScale(20)} color="black" /> */}

            <TouchableOpacity
              style={{ justifyContent: 'center', alignItems: 'center' }}
            >
              <Image
                source={ImagesPath.iconAutoFigma}
                style={styles.iconCategorias}
                resizeMode="contain"
              />

              <Text>Autos</Text>
            </TouchableOpacity>

            {/* <Image 
              source={ImagesPath.iconAuto}
              style={styles.iconCategorias}
              resizeMode="contain"
            />
            <Text>Auto</Text> */}
          </View>

          <View style={styles.categoriaContainer}>
            {/* <AntDesign name="login" size={moderateScale(20)} color="black" /> */}

            <TouchableOpacity
              style={{ justifyContent: 'center', alignItems: 'center' }}
            >
              <Image
                source={ImagesPath.iconMotoFigma}
                style={styles.iconCategorias}
                resizeMode="contain"
              />

              <Text>Motos</Text>
            </TouchableOpacity>

            {/* <Image 
              source={ImagesPath.iconMoto}
              style={styles.iconCategorias}
              resizeMode="contain"
            />
            <Text>Moto</Text> */}
          </View>

          <View style={styles.categoriaContainer}>
            {/* <AntDesign name="login" size={moderateScale(20)} color="black" /> */}

            <TouchableOpacity
              style={{ justifyContent: 'center', alignItems: 'center' }}
            >
              <Image
                source={ImagesPath.iconPiezaFigma}
                style={styles.iconCategorias}
                resizeMode="contain"
              />

              <Text>Piezas</Text>
            </TouchableOpacity>

            {/* <Image 
              source={ImagesPath.iconPieza}
              style={styles.iconCategorias}
              resizeMode="contain"
            />
            <Text>Piezas</Text> */}
          </View>
        </View>
      </View>

      {/* Body con FlatList para las publicaciones */}
      <View style={styles.body}>
        <FlatList
          data={mockPublications}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.publicationCard}
              onPress={() => router.push('/(publications)/publication1')} // `/ (publications)/publication${item.id}`
            >
              <Image
                source={ImagesPath.imageDefault} // { uri: item.image } // imageDefault
                style={styles.publicationImage}
                resizeMode="contain" // "cover"
              />
              <View style={styles.publicationInfo}>
                <Text style={styles.publicationTitle} numberOfLines={1}>
                  {item.title}
                </Text>
                <Text style={styles.publicationPrice}>{item.price}</Text>
                {/* <Text style={styles.publicationLocation} numberOfLines={1}>
                  {item.location}
                </Text> */}
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapper}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      </View>

      {/* <View style={styles.footer}></View> */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  // estilos de la estructura
  container: {
    flex: 1,
    backgroundColor: '#fff', // purple
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    height: moderateScale(170),
    width: '100%',
    //backgroundColor: "red",
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  /* body: {
    height: moderateScale(540),
    width: "90%",
    //backgroundColor: "aqua",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  }, */
  body: {
    flex: 1, // Cambiado para que ocupe todo el espacio disponible
    width: '90%',
  },
  footer: {
    height: moderateScale(10),
    width: '100%',
    //backgroundColor: "blue",
    textAlign: 'center',
    justifyContent: 'flex-start',
    alignItems: 'center',
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
    //backgroundColor: "yellow",
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
    //backgroundColor: "green",
    marginBottom: moderateScale(10),
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: verticalScale(8),
    paddingHorizontal: moderateScale(12),
    borderRadius: moderateScale(20),
    //backgroundColor: '#F5F5F5',
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: moderateScale(4),
  },
  // agrega un contenedor con el mismo espacio del boton de iniciar sesion
  mismoEspacio: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: verticalScale(8),
    paddingHorizontal: moderateScale(12),
    borderRadius: moderateScale(20),
    //backgroundColor: "#F5F5F5",
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
  categoriasContainer: {
    width: '100%',
    height: moderateScale(40),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: moderateScale(8),
    //backgroundColor: "blue",
    gap: moderateScale(10),
  },
  categoriaContainer: {
    //backgroundColor: "green",
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconCategorias: {
    width: moderateScale(30),
    height: moderateScale(24),
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
    marginBottom: moderateScale(15),
    textAlign: 'center',
  },
  modalText: {
    fontSize: moderateScale(16),
    marginBottom: moderateScale(5),
    textAlign: 'center',
    fontWeight: 'bold',
  },
  modalButton: {
    backgroundColor: '#A230C7',
    borderRadius: moderateScale(20),
    padding: moderateScale(12),
    marginTop: moderateScale(15),
    width: '100%',
    alignItems: 'center',
  },
  modalButtonText: {
    color: 'white',
    fontSize: moderateScale(16),
    fontWeight: 'bold',
  },
  // estilos botones
  buttomContainer: {
    width: '100%', // moderateScale(150)
    height: moderateScale(300),
    //backgroundColor: "red",
    marginBottom: verticalScale(10),
    justifyContent: 'center',
    gap: moderateScale(10),
  },
  buttom: {
    backgroundColor: 'blue',
    width: '50%',
    paddingVertical: verticalScale(10),
    paddingHorizontal: verticalScale(10),
    borderRadius: moderateScale(20),
    alignItems: 'center',
    //marginBottom: verticalScale(10),
  },
  buttomText: {
    color: 'white',
    fontSize: moderateScale(13),
    fontWeight: 'bold',
  },
  // estilos del skeletor
  skeletonContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: moderateScale(70),
  },
  skeletonHeader: {
    height: verticalScale(20),
    width: '100%',
    backgroundColor: '#f0f0f0',
  },
  skeletonBody: {
    alignItems: 'center',
    gap: verticalScale(7),
  },
  skeletonLogo: {
    height: moderateScale(100),
    width: moderateScale(100),
    backgroundColor: '#f0f0f0',
    borderRadius: moderateScale(10),
  },
  skeletonFooter: {
    alignItems: 'center',
    height: verticalScale(70),
    justifyContent: 'flex-end',
  },
  skeletonText: {
    width: moderateScale(150),
    height: verticalScale(15),
    backgroundColor: '#f0f0f0',
  },
  // Nuevos estilos para las publicaciones
  listContent: {
    paddingBottom: verticalScale(20),
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: verticalScale(5),
  },
  publicationCard: {
    width: '48%', // 48% // Para dejar un pequeño espacio entre las columnas
    backgroundColor: '#FFF',
    borderRadius: moderateScale(8),
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    //elevation: 5,
    marginBottom: verticalScale(12),
  },
  publicationImage: {
    width: '100%', // "100%"
    height: verticalScale(120),
    backgroundColor: '#F5F5F5', // Color de fondo mientras carga la imagen
  },
  publicationInfo: {
    padding: moderateScale(10),
  },
  publicationTitle: {
    fontSize: moderateScale(15),
    fontWeight: '500',
    marginBottom: verticalScale(4),
  },
  publicationPrice: {
    fontSize: moderateScale(22),
    fontWeight: 'bold',
    //color: '#A230C7', // Puedes cambiar este color
    marginBottom: verticalScale(4),
  },
  publicationLocation: {
    fontSize: moderateScale(12),
    color: '#666',
  },
})

export default HomeScreen
