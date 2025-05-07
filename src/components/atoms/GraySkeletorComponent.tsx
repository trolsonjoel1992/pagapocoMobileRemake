import React from 'react';
import { StyleSheet, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const GraySkeletorComponent = () => {
  return (
    <View style={styles.container}>

      <View style={styles.textPlaceholder}></View>
    
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "space-between",
    },
    textPlaceholder: {
        width: moderateScale(150),
        height: moderateScale(30),
        backgroundColor: '#d0d0d0',
    }
});

export default GraySkeletorComponent;