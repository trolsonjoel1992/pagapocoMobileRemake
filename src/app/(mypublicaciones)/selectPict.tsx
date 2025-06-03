import HeaderMainComponent from '@/src/components/atoms/HeaderMainComponent'
import IconsPath from '@/src/constants/IconsPath'
import { router } from 'expo-router'
import { useState } from 'react'
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { moderateScale, verticalScale } from 'react-native-size-matters'

const SelectPict = () => {
  const [isAllSelected, setIsAllSelected] = useState(false)
  const [showNewSquares, setShowNewSquares] = useState(false)

  const toggleSquares = () => {
    setShowNewSquares(!showNewSquares)
  }

  return (
    <View style={styles.mainContainer}>
      <HeaderMainComponent titulo="Fotos" onBackPress={() => router.back()} />

      <View style={styles.fixedTopContainer}>
        <TouchableOpacity onPress={toggleSquares}>
          <Text style={styles.title}>
            Seleccioná las fotos que vas a editar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setIsAllSelected(!isAllSelected)}
          style={styles.checkboxContainer}
        >
          <Image
            style={styles.check}
            source={
              isAllSelected ? IconsPath.checkSelected : IconsPath.checkSelect
            }
          />
          <Text style={styles.checkboxText}>
            {isAllSelected ? 'Quitar selección' : 'Seleccionar todo'}
          </Text>
        </TouchableOpacity>
      </View>

      {showNewSquares ? (
        <ScrollView
          style={styles.scrollableArea}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.newSquaresContainer}>
            {[...Array(8)].map((_, i) => (
              <View key={`new-${i}`} style={styles.newSquare} />
            ))}
          </View>
        </ScrollView>
      ) : (
        <View style={styles.squaresContainer}>
          {[...Array(4)].map((_, i) => (
            <View key={`original-${i}`} style={styles.square} />
          ))}
        </View>
      )}
      <View style={styles.fixedButtonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SelectPict

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  fixedTopContainer: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: moderateScale(16),
  },
  scrollableArea: {
    flex: 1,
    marginBottom: verticalScale(80),
  },
  scrollContent: {
    paddingBottom: verticalScale(20),
  },
  title: {
    fontSize: moderateScale(24),
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: verticalScale(10),
  },
  checkboxContainer: {
    flexDirection: 'row',
    width: '92%',
    marginTop: verticalScale(20),
    marginBottom: verticalScale(15),
  },
  check: {
    width: moderateScale(24),
    height: moderateScale(24),
    marginRight: moderateScale(10),
  },
  checkboxText: {
    fontSize: moderateScale(16),
  },
  squaresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: moderateScale(350),
    marginVertical: verticalScale(10),
    alignSelf: 'center',
    marginBottom: verticalScale(80), // Espacio para el botón
  },
  square: {
    width: moderateScale(165),
    height: moderateScale(165),
    backgroundColor: '#f1e9f9',
    borderRadius: moderateScale(20),
    marginBottom: verticalScale(15),
  },
  newSquaresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingHorizontal: moderateScale(10),
    width: '100%',
    paddingBottom: verticalScale(20),
  },
  newSquare: {
    width: moderateScale(130),
    height: moderateScale(130),
    backgroundColor: '#f1e9f9',
    borderRadius: moderateScale(20),
    marginBottom: verticalScale(15),
    marginHorizontal: moderateScale(10),
  },
  fixedButtonContainer: {
    position: 'absolute',

    bottom: verticalScale(25),
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: moderateScale(170),
    height: verticalScale(55),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(20),
    backgroundColor: '#A230C7',
  },
  buttonText: {
    fontSize: moderateScale(16),
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
})
