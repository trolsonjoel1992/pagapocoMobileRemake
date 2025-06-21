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
        placeholderTextColor="#9A9292"
      />
      <TouchableOpacity>
        <Image source={ImagesPath.iconSearchBar} style={styles.searchIcon} />
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  searchContainer: {
    width: moderateScale(340),
    height: moderateScale(50),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ECE6F0',
    borderRadius: moderateScale(20),
    paddingHorizontal: moderateScale(10),
    paddingVertical: verticalScale(5),
    marginTop: verticalScale(30),
    marginBottom: verticalScale(0),
    marginHorizontal: moderateScale(0),
  },
  searchIcon: {
    width: moderateScale(32),
    height: moderateScale(32),
  },
  searchPlaceholder: {
    flex: 1,
    fontSize: moderateScale(20),
    color: '#A0A0A0',
    marginLeft: moderateScale(40),
    marginBottom: moderateScale(-2),
  },
})

export default SearchBarComponent
