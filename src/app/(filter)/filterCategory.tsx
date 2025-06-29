import ButtonActionsComponent from '@/src/components/atoms/ButtonActionsComponent'
import ButtonCategoryComponent from '@/src/components/atoms/ButtonCategoryComponent'
import PFilterCategoryComponent from '@/src/components/atoms/PFilterCategoryComponent'
import SearchBarMainComponent from '@/src/components/atoms/SearchBarMainComponent'
import { Color } from '@/src/constants/colors'
import ImagesPath from '@/src/constants/ImagesPath'
import { useAuth } from '@/src/hooks/useAuth'
import { router, useLocalSearchParams } from 'expo-router'
import React from 'react'
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { moderateScale, verticalScale } from 'react-native-size-matters'

const filterCategory = () => {
  const { user, isLoading } = useAuth()

  const { logout } = useAuth()

  const { category } = useLocalSearchParams()

  const handleCategoryPress = (category: string) => {
    router.push({
      pathname: '/(filter)/filterCategory',
      params: { category },
    })
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Color.primary} barStyle="light-content" />
      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <SearchBarMainComponent
            showBackButton
            onBackPress={() => router.push('/(tabs)/home')}
          />
        </View>
        <ButtonActionsComponent user={user} />
        <View style={styles.categoriasContainer}>
          {category !== 'Camiones' && (
            <ButtonCategoryComponent
              iconCategory={ImagesPath.iconCamionFigma}
              title="Camiones"
              onPressFunction={() => handleCategoryPress('Camiones')}
            />
          )}
          {category !== 'Camionetas' && (
            <ButtonCategoryComponent
              iconCategory={ImagesPath.iconCamionetaFigma}
              title="Camionetas"
              onPressFunction={() => handleCategoryPress('Camionetas')}
            />
          )}
          {category !== 'Autos' && (
            <ButtonCategoryComponent
              iconCategory={ImagesPath.iconAutoFigma}
              title="Autos"
              onPressFunction={() => handleCategoryPress('Autos')}
            />
          )}
          {category !== 'Motos' && (
            <ButtonCategoryComponent
              iconCategory={ImagesPath.iconMotoFigma}
              title="Motos"
              onPressFunction={() => handleCategoryPress('Motos')}
            />
          )}
          {category !== 'Piezas' && (
            <ButtonCategoryComponent
              iconCategory={ImagesPath.iconPiezaFigma}
              title="Piezas"
              onPressFunction={() => handleCategoryPress('Piezas')}
            />
          )}
        </View>
      </View>
      <View style={styles.body}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
        >
          {(() => {
            switch (category) {
              case 'Camiones':
                return (
                  <>
                    <PFilterCategoryComponent
                      title="Camiones"
                      recommended
                      imagePublication={ImagesPath.imageAutoVolkswagenPolo}
                    />
                    <PFilterCategoryComponent
                      title="Camiones"
                      recommended
                      imagePublication={ImagesPath.imageAutoFiatToro}
                    />
                    <PFilterCategoryComponent
                      title="Camiones"
                      imagePublication={ImagesPath.imageAutoJeepRenegade}
                    />
                    <PFilterCategoryComponent title="Camiones" />
                    <PFilterCategoryComponent title="Camiones" />
                  </>
                )
              case 'Camionetas':
                return (
                  <>
                    <PFilterCategoryComponent
                      title="Camionetas"
                      recommended
                      imagePublication={ImagesPath.imageAutoVolkswagenPolo}
                    />
                    <PFilterCategoryComponent
                      title="Camionetas"
                      recommended
                      imagePublication={ImagesPath.imageAutoFiatToro}
                    />
                    <PFilterCategoryComponent
                      title="Camionetas"
                      imagePublication={ImagesPath.imageAutoJeepRenegade}
                    />
                    <PFilterCategoryComponent title="Camionetas" />
                    <PFilterCategoryComponent title="Camionetas" />
                    <PFilterCategoryComponent title="Camionetas" />
                    <PFilterCategoryComponent title="Camionetas" />
                  </>
                )
              case 'Autos':
                return (
                  <>
                    <PFilterCategoryComponent
                      imagePublication={ImagesPath.imageAutoVolkswagenPolo}
                      title="Volkswagen Polo 0km"
                      description="Lorem Ipsum is simply dummy text of the printing and typesetting"
                      price="24.500.000"
                      recommended
                      onPressFunction={() =>
                        router.push('/(publications)/publication1')
                      }
                    />
                    <PFilterCategoryComponent
                      imagePublication={ImagesPath.imageAutoFiatToro}
                      title="Fiat Toro 0Km"
                      description="Lorem Ipsum is simply dummy text of the printing and typesetting"
                      price="30.500.000"
                      recommended
                      onPressFunction={() =>
                        router.push('/(publications)/publication1')
                      }
                    />
                    <PFilterCategoryComponent
                      imagePublication={ImagesPath.imageAutoJeepRenegade}
                      title="Jeep Renegade 0km"
                      description="Lorem Ipsum is simply dummy text of the printing and typesetting"
                      price="45.800.000"
                      onPressFunction={() =>
                        router.push('/(publications)/publication1')
                      }
                    />
                    <PFilterCategoryComponent title="Autos" />
                    <PFilterCategoryComponent title="Autos" />
                    <PFilterCategoryComponent title="Autos" />
                    <PFilterCategoryComponent title="Autos" />
                  </>
                )
              case 'Motos':
                return (
                  <>
                    <PFilterCategoryComponent
                      title="Motos"
                      recommended
                      imagePublication={ImagesPath.imageAutoVolkswagenPolo}
                    />
                    <PFilterCategoryComponent
                      title="Motos"
                      recommended
                      imagePublication={ImagesPath.imageAutoFiatToro}
                    />
                    <PFilterCategoryComponent
                      title="Motos"
                      imagePublication={ImagesPath.imageAutoJeepRenegade}
                    />
                    <PFilterCategoryComponent title="Motos" />
                    <PFilterCategoryComponent title="Motos" />
                    <PFilterCategoryComponent title="Motos" />
                    <PFilterCategoryComponent title="Motos" />
                  </>
                )
              case 'Piezas':
                return (
                  <>
                    <PFilterCategoryComponent
                      title="Piezas"
                      recommended
                      imagePublication={ImagesPath.imageAutoVolkswagenPolo}
                    />
                    <PFilterCategoryComponent
                      title="Piezas"
                      recommended
                      imagePublication={ImagesPath.imageAutoFiatToro}
                    />
                    <PFilterCategoryComponent
                      title="Piezas"
                      imagePublication={ImagesPath.imageAutoJeepRenegade}
                    />
                    <PFilterCategoryComponent title="Piezas" />
                    <PFilterCategoryComponent title="Piezas" />
                    <PFilterCategoryComponent title="Piezas" />
                    <PFilterCategoryComponent title="Piezas" />
                  </>
                )
              default:
                return <Text>No hay publicaciones</Text>
            }
          })()}

          <View style={styles.buttomVolverContainer}>
            <TouchableOpacity
              style={styles.buttomVolver}
              onPress={() => router.push('/(tabs)/home')}
            >
              <Text style={styles.buttomVolverText}>Volver</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      {/* <View style={styles.footer}></View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    //height: moderateScale(580),
    width: '90%',
    //backgroundColor: 'red',
    marginBottom: moderateScale(10),
  },
  footer: {
    //height: moderateScale(10),
    width: '100%',
    //backgroundColor: 'blue',
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
    //gap: moderateScale(4),
    marginTop: moderateScale(5),
    marginBottom: verticalScale(5),
    //backgroundColor: 'orange',
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
  scrollView: {
    flex: 1,
    width: '100%',
    //backgroundColor: 'red',
  },
  scrollContent: {
    //backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    gap: moderateScale(5),
  },
  buttomVolverContainer: {
    width: moderateScale(130),
    //backgroundColor: 'yellow',
  },
  buttomVolver: {
    backgroundColor: '#A230C7',
    width: '100%',
    paddingVertical: verticalScale(12),
    paddingHorizontal: verticalScale(10),
    borderRadius: moderateScale(20),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: moderateScale(10),
  },
  buttomVolverText: {
    color: 'white',
    fontSize: moderateScale(13),
    fontWeight: 'bold',
  },
})

export default filterCategory
