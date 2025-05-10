import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';

const ButtonComponent = ( { titulo } : any ) => {
  return (
    <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttomText}>{ titulo }</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: "purple",
        width: "100%",
        paddingVertical: verticalScale(10),
        paddingHorizontal: verticalScale(10),
        borderRadius: moderateScale(4),
        alignItems: "center",
    },
    buttomText: {
        color: "white",
        fontSize: moderateScale(13),
        //fontWeight: "bold",
    }
});

export default ButtonComponent