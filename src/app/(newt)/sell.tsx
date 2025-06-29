import HeaderMainComponent from '@/src/components/atoms/HeaderMainComponent'
import IconsPath from '@/src/constants/IconsPath'
import { router } from 'expo-router'
import React, { useState } from 'react'
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { moderateScale } from 'react-native-size-matters'

const Cardsale = () => {
  const [selectedCard, setSelectedCard] = useState<'premium' | 'free' | null>(
    null
  )

  return (
    <SafeAreaView style={styles.general}>
      <HeaderMainComponent
        titulo="Plan de venta"
        onBackPress={() => router.back()}
      />
      <Text
        style={{
          marginTop: moderateScale(1),
          fontSize: moderateScale(24),
          fontWeight: 'bold',
        }}
      >
        Elegí un plan de venta
      </Text>

      <View style={styles.container}>
        <TouchableOpacity
          style={
            selectedCard === null
              ? styles.card
              : selectedCard === 'premium'
              ? styles.card1
              : styles.card2
          }
          onPress={() => setSelectedCard('premium')}
        >
          <View
            style={
              selectedCard === null
                ? styles.block
                : selectedCard === 'premium'
                ? styles.block1
                : styles.block2
            }
          >
            <Image source={IconsPath.showStar} />
            <Text
              style={
                selectedCard === null
                  ? styles.titleText
                  : selectedCard === 'premium'
                  ? styles.titleText1
                  : styles.titleText2
              }
            >
              Premiun
            </Text>
          </View>
          <View style={styles.content}>
            <View style={styles.promo}>
              <Image source={IconsPath.CheckCircle} />
              <Text>Exposición VIP</Text>
            </View>
            <View style={styles.promo}>
              <Image source={IconsPath.CheckCircle} />
              <Text>Hasta 8 imagenes</Text>
            </View>
            <View style={styles.promo}>
              <Image source={IconsPath.CheckCircle} />
              <Text>duración de 90 días</Text>
            </View>
            <View style={styles.promo}>
              <Image source={IconsPath.CheckCircle} />
              <Text>Republicación automática</Text>
            </View>
          </View>
          <Text style={{ fontSize: moderateScale(20), fontWeight: '600' }}>
            $3000
          </Text>
          <Text style={{ fontWeight: '500' }}>cargo por publicación</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={
            selectedCard === null
              ? styles.card
              : selectedCard === 'free'
              ? styles.card1
              : styles.card2
          }
          onPress={() => setSelectedCard('free')}
        >
          <View
            style={
              selectedCard === null
                ? styles.block
                : selectedCard === 'free'
                ? styles.block1
                : styles.block2
            }
          >
            <Image source={IconsPath.showStarH} />
            <Text
              style={
                selectedCard === null
                  ? styles.titleText
                  : selectedCard === 'free'
                  ? styles.titleText1
                  : styles.titleText2
              }
            >
              Fremiun
            </Text>
          </View>
          <View style={styles.content}>
            <View style={styles.promo}>
              <Image source={IconsPath.WarningCircle} />
              <Text>Exposición limitada</Text>
            </View>
            <View style={styles.promo}>
              <Image source={IconsPath.WarningCircle} />
              <Text>Sólo 4 imagenes</Text>
            </View>
            <View style={styles.promo}>
              <Image source={IconsPath.WarningCircle} />
              <Text>Duracion de 30 días</Text>
            </View>
            <View style={styles.promo}>
              <Image source={IconsPath.Xcircle} />
              <Text style={{ textDecorationLine: 'line-through' }}>
                Republicación automática
              </Text>
            </View>
          </View>
          <Text style={{ fontSize: moderateScale(20), fontWeight: '600' }}>
            Gratis
          </Text>
          <Text style={{ fontWeight: '500' }}>cargo por publicación</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/(tabs)/myPublications')}
      >
        <Text style={styles.buttonText}>Volver</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Cardsale
const styles = StyleSheet.create({
  general: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    marginTop: moderateScale(10),
    width: '75%',
    alignItems: 'flex-start',
  },
  contentText: {
    fontSize: moderateScale(16),
  },
  promo: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: moderateScale(5),
  },
  titleText: {
    color: '#000',
    fontSize: moderateScale(26),
    fontWeight: 'bold',
  },
  card: {
    width: moderateScale(300),
    alignItems: 'center',
    marginTop: moderateScale(20),
    height: moderateScale(230),
    borderRadius: moderateScale(20),
    backgroundColor: '#ece6f0',
    borderWidth: 1,
    borderColor: '#000',
    overflow: 'hidden',
  },
  block: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#ece6f0',
    marginTop: moderateScale(-1),
    width: moderateScale(300),
    height: moderateScale(80),
    borderRadius: moderateScale(20),
    gap: moderateScale(30),
    borderWidth: 3,
    borderColor: '#000',
  },

  titleText1: {
    color: '#a230c7',
    fontSize: moderateScale(26),
    fontWeight: '900',
  },
  card1: {
    width: moderateScale(300),
    alignItems: 'center',
    marginTop: moderateScale(20),
    height: moderateScale(230),
    borderRadius: moderateScale(20),
    backgroundColor: '#ece6f0',
    borderWidth: 3,
    borderColor: '#a230c7',
    overflow: 'hidden',
  },
  block1: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#ece6f0',
    marginTop: moderateScale(-3),
    width: moderateScale(300),
    height: moderateScale(80),
    borderRadius: moderateScale(20),
    gap: moderateScale(30),
    borderWidth: 3,
    borderColor: '#a230c7',
  },

  titleText2: {
    color: '#9A9292',
    fontSize: moderateScale(26),
    fontWeight: 'bold',
  },
  card2: {
    width: moderateScale(300),
    alignItems: 'center',
    marginTop: moderateScale(20),
    height: moderateScale(230),
    borderRadius: moderateScale(20),
    backgroundColor: '#ece6f0',
    borderWidth: 1,
    borderColor: '#9A9292',
    overflow: 'hidden',
  },
  block2: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#ece6f0',
    marginTop: moderateScale(-1),
    width: moderateScale(300),
    height: moderateScale(80),
    borderRadius: moderateScale(20),
    gap: moderateScale(30),
    borderWidth: 3,
    borderColor: '#9A9292',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: moderateScale(170),
    height: moderateScale(55),
    backgroundColor: '#A230C7',
    borderRadius: moderateScale(20),
    marginTop: moderateScale(10),
  },
  buttonText: {
    color: '#fff',
    fontSize: moderateScale(20),
    fontWeight: 'bold',
  },
})
