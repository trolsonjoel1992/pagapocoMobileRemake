import ImagesPath from '@/src/constants/ImagesPath'
import { router } from 'expo-router'
import React from 'react'
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { moderateScale } from 'react-native-size-matters'

type SearchProps = {
  showBackButton?: boolean
  onBackPress?: () => void
  placeholder?: string
}

const SearchBarMainComponent = ({
  showBackButton = false,
  onBackPress,
  placeholder = 'Buscar',
}: SearchProps) => {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.containerInputAndSearchIcon}>
        {showBackButton && (
          <TouchableOpacity
            style={styles.backButton} // Estilo con área táctil amplia
            onPress={onBackPress} // Funcionalidad opcional
            activeOpacity={0.6} // Efecto visual al presionar
          >
            <Image
              source={ImagesPath.imageArrowBack}
              style={styles.logoArrowBackStyle}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
        {/* <TouchableOpacity
          style={styles.backButton} // Estilo con área táctil amplia
          //onPress={onBackPress} // Funcionalidad opcional
          activeOpacity={0.6} // Efecto visual al presionar
        >
          <Image
            source={ImagesPath.imageArrowBack}
            style={styles.logoArrowBackStyle}
            resizeMode="contain"
          />
        </TouchableOpacity> */}
        <TextInput
          style={[
            styles.inputSearch,
            { width: showBackButton ? '65%' : '75%' },
          ]}
          placeholder={placeholder}
          placeholderTextColor="#9A9292"
        />
        <TouchableOpacity>
          <Image
            source={ImagesPath.iconSearchBar}
            style={styles.iconSearch}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => router.push('/(notifications)/notification')}
      >
        <Image
          source={ImagesPath.iconNotificationFigma}
          style={styles.iconNotificaion}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  searchContainer: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  containerInputAndSearchIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ECE6F0',
    borderRadius: 24,
    paddingVertical: 10,
    justifyContent: 'space-between',
  },
  iconNotificaion: {
    width: 32,
    height: 32,
  },
  iconSearch: {
    width: 32,
    height: 32,
    marginRight: 10,
  },
  inputSearch: {
    width: '65%',
    fontSize: 20,
    color: '#A0A0A0',
    marginLeft: 10,
    marginBottom: -2,
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  backButton: {
    width: 24,
    height: 24,
    marginRight: 10,
    paddingHorizontal: 10,
  },
  logoArrowBackStyle: {
    width: moderateScale(24),
    height: moderateScale(24),
  },
})

export default SearchBarMainComponent
