import ImagesPath from '@/src/constants/ImagesPath'
import React from 'react'
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { moderateScale, verticalScale } from 'react-native-size-matters'

const SearchBarComponent = () => {
  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchPlaceholder}
        placeholder="Busca tu publicación"
        placeholderTextColor="#A0A0A0"
      />
      <TouchableOpacity>
        <Image
          source={ImagesPath.iconSearchBar} // Asegúrate de que esta ruta sea válida
          style={styles.searchIcon}
        />
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ECE6F0',
    borderRadius: moderateScale(20),
    paddingHorizontal: moderateScale(10),
    paddingVertical: verticalScale(5),
    marginTop: verticalScale(10),
    marginBottom: verticalScale(0),
    marginHorizontal: moderateScale(30),
  },
  searchIcon: {
    width: moderateScale(32),
    height: moderateScale(32),
  },
  searchPlaceholder: {
    flex: 1,
    fontSize: moderateScale(16),
    color: '#A0A0A0',
    marginLeft: 40,
  },
})

export default SearchBarComponent
