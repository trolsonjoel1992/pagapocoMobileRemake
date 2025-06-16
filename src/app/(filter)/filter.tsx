import HeaderMainComponent from '@/src/components/atoms/HeaderMainComponent'
import ImagesPath from '@/src/constants/ImagesPath'
import { router } from 'expo-router'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { moderateScale, verticalScale } from 'react-native-size-matters'

type FilterCategoryProps = {
  image?: any
  title?: string
  onPressFunction?: () => void
}

const ButtonCategoryComponent = ({
  image = ImagesPath.iconCamionFigma,
  title = 'Camiones',
  onPressFunction,
}: FilterCategoryProps) => {
  const handlePress = () => {
    if (onPressFunction) {
      onPressFunction()
    } else {
      console.warn('No se proporcionó una función onPress')
    }
  }

  return (
    <TouchableOpacity
      style={styles.buttonCategoryContainer}
      onPress={handlePress}
    >
      <Text style={styles.textCategories}>{title}</Text>
      <Image
        source={image}
        style={styles.iconCategories}
        resizeMode="contain"
      />
    </TouchableOpacity>
  )
}

const filter = () => {
  return (
    <View style={styles.container}>
      {/* header */}
      {/* <View style={styles.header}></View> */}

      {/* Componente del header */}
      <HeaderMainComponent titulo="Filtros" onBackPress={() => router.back()} />

      {/* body */}
      <View style={styles.body}>
        <Text style={styles.textTitle}>Filtrar por categoría:</Text>

        <View style={{ width: '100%', gap: moderateScale(10) }}>
          <ButtonCategoryComponent
            title="Recomendados"
            image={ImagesPath.iconRecomendadoFigma}
            onPressFunction={() => router.push('/(filter)/filterRecommended')}
          />
          <ButtonCategoryComponent
            title="Camiones"
            image={ImagesPath.iconCamionFigma}
          />
          <ButtonCategoryComponent
            title="Camionetas"
            image={ImagesPath.iconCamionetaFigma}
          />
          <ButtonCategoryComponent
            title="Autos"
            image={ImagesPath.iconAutoFigma}
          />
          <ButtonCategoryComponent
            title="Motos"
            image={ImagesPath.iconMotoFigma}
          />
          <ButtonCategoryComponent
            title="Piezas"
            image={ImagesPath.iconPiezaFigma}
          />
        </View>
      </View>

      {/* footer */}
      <View style={styles.footer}>
        <View style={styles.buttomVolverContainer}>
          <TouchableOpacity
            style={styles.buttomVolver}
            onPress={() => router.back()} // router.push('/(tabs)/home')
          >
            <Text style={styles.buttomVolverText}>Volver</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
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
    height: moderateScale(40),
    width: '100%',
    //backgroundColor: 'red',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    height: moderateScale(600),
    width: '80%',
    //backgroundColor: 'yellow',
    textAlign: 'right',
    justifyContent: 'center',
    //alignItems: 'center',
  },
  footer: {
    height: moderateScale(80),
    width: '100%',
    //backgroundColor: 'red',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTitle: {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    color: '#000',
    marginBottom: moderateScale(10),
  },
  buttonCategoryContainer: {
    width: '100%',
    height: moderateScale(80),
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    borderRadius: moderateScale(10),
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: moderateScale(10),
  },
  iconCategories: {
    width: moderateScale(40),
    height: moderateScale(40),
    //margin: moderateScale(10),
  },
  textCategories: {
    fontSize: moderateScale(16),
    color: '#000',
    fontWeight: 'bold',
  },
  // estilos de botones
  buttomVolverContainer: {
    width: moderateScale(150),
    //backgroundColor: "yellow",
  },
  buttomVolver: {
    backgroundColor: '#A230C7',
    width: '100%',
    paddingVertical: verticalScale(10),
    paddingHorizontal: verticalScale(10),
    borderRadius: moderateScale(20),
    alignItems: 'center',
  },
  buttomVolverText: {
    color: 'white',
    fontSize: moderateScale(13),
    fontWeight: 'bold',
  },
})

export default filter
