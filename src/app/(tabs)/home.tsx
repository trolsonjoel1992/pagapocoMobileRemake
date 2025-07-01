import ButtonActionsComponent from '@/src/components/atoms/ButtonActionsComponent'
import ButtonCategoryComponent from '@/src/components/atoms/ButtonCategoryComponent'
import PublicationCardComponent from '@/src/components/atoms/PublicationCardComponent'
import SearchBarMainComponent from '@/src/components/atoms/SearchBarMainComponent'
import ImagesPath from '@/src/constants/ImagesPath'
import { useApp } from '@/src/contexts/AppContext'
import { useListPublications } from '@/src/features/hooks/publications.hooks'
import { router } from 'expo-router'
import React, { useMemo, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale, verticalScale } from 'react-native-size-matters'

const Home = () => {
  const [isFavorite, setIsFavorite] = useState(false)

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite)
  }

  const { publications, currentUser } = useApp()

  const filteredPublications = useMemo(() => {
    if (!currentUser) return publications
    return publications.filter((p) => p.user_id !== currentUser.id)
  }, [publications, currentUser])

  const { data } = useListPublications()

  const handleCategoryPress = (category: string) => {
    router.push({
      pathname: '/(filter)/filterCategory',
      params: { category },
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* Contenedor para el buscador */}
        <View style={styles.searchContainer}>
          {/* Componente del buscador */}
          <SearchBarMainComponent />
        </View>

        {/* Componentes de Botones de acciones */}
        <ButtonActionsComponent user={currentUser} />

        {/* Contenedor de Categorías */}
        <View style={styles.categoriasContainer}>
          {/* Componente de Categoría */}
          <ButtonCategoryComponent
            iconCategory={ImagesPath.iconCamionFigma}
            title="Camiones"
            // onPressFunction={() => router.push("/")} // aqui hacer ruteo del filtro
            onPressFunction={() => handleCategoryPress('Camiones')}
          />
          <ButtonCategoryComponent
            iconCategory={ImagesPath.iconCamionetaFigma}
            title="Camionetas"
            onPressFunction={() => handleCategoryPress('Camionetas')}
          />
          <ButtonCategoryComponent
            iconCategory={ImagesPath.iconAutoFigma}
            title="Autos"
            onPressFunction={() => handleCategoryPress('Autos')}
          />
          <ButtonCategoryComponent
            iconCategory={ImagesPath.iconMotoFigma}
            title="Motos"
            onPressFunction={() => handleCategoryPress('Motos')}
          />
          <ButtonCategoryComponent
            iconCategory={ImagesPath.iconPiezaFigma}
            title="Piezas"
            onPressFunction={() => handleCategoryPress('Piezas')}
          />
        </View>
      </View>

      {/* body */}
      <View style={styles.body}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <PublicationCardComponent item={item} />
          )} /* Componente de la publicacion */
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapper}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      </View>

      {/* footer */}
      {/* <View style={styles.footer}></View> */}
    </SafeAreaView>
  )
}

// Estilos de la pantalla principal - Home
const styles = StyleSheet.create({
  // estilos de la estructura
  container: {
    flex: 1,
    backgroundColor: '#fff', // purple
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    //height: moderateScale(200),
    width: '100%',
    //backgroundColor: 'aqua',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 1,
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
  searchContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: moderateScale(20),
    paddingHorizontal: moderateScale(10),
    height: moderateScale(50),
    gap: moderateScale(4),
    marginTop: moderateScale(5),
    marginBottom: verticalScale(5),
    //backgroundColor: 'orange',
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
    marginLeft: moderateScale(5),
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
})

// Datos de ejemplo para las publicaciones
// const mockPublications = [
//   /* {
//       id: 'ad-1',
//       type: 'full-width-ad',
//       title: "Anuncio Especial",
//       content: "Este es un anuncio que ocupa todo el ancho",
//     }, */
//   {
//     id: 1,
//     title: 'Volkswagen Polo 0km',
//     price: '$24.500.000',
//     image: ImagesPath.imageAutoVolkswagenPolo,
//     //location: 'Resistencia, Chaco',
//   },
//   {
//     id: 2,
//     title: 'Chevrolet Traker 1.2 Ltz Turbo At',
//     price: '$30.000.000',
//     image: ImagesPath.imageAutoChevroletTracker,
//     //location: 'Barranqueras, Chaco',
//   },
//   {
//     id: 3,
//     title: 'Carburador Ford Falcon F100 22',
//     price: '$172.320',
//     image: ImagesPath.imagePiezaCarburadorFordFalcon,
//     //location: 'Resistencia, Chaco',
//   },
//   {
//     id: 4,
//     title: 'Honda Tornado 250',
//     price: '$8.500.000',
//     image: ImagesPath.imageMotoHondaTornado,
//     //location: 'Fontana, Chaco',
//   },
//   {
//     id: 5,
//     title: 'Nissan Frontier 2.3 S Cd 4x4 Mt',
//     price: '$35.000.000',
//     image: ImagesPath.imageCamionetaNissanFrontier,
//     //location: 'Resistencia, Chaco',
//   },
//   {
//     id: 6,
//     title: 'Fiat Toro 1.3 T270 Volcano 4x2 At',
//     price: '$30.500.000',
//     image: ImagesPath.imageAutoFiatToro,
//     //location: 'Resistencia, Chaco',
//   },
//   {
//     id: 7,
//     title: 'Jeep Renegade 1.8 Sport',
//     price: '$24.000.000',
//     image: ImagesPath.imageAutoJeepRenegade,
//     //location: 'Resistencia, Chaco',
//   },
//   {
//     id: 8,
//     title: 'Renault Sandero Stepway 1.6 16v Intense',
//     price: '$23.000.000',
//     image: ImagesPath.imageAutoRenaultSandero,
//     //location: 'Fontana, Chaco',
//   },
//   // Agrega más publicaciones según necesites
// ]

export default Home
