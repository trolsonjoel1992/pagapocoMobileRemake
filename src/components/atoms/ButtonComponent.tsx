import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';

const BottomComponent = ( { titulo } : any) => {
  return (
    <TouchableOpacity style={styles.bottomContainer}>
        <Text style={styles.buttomText}>{ titulo }</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    bottomContainer: {
        backgroundColor: "#A230C7",
        width: "100%",
        paddingVertical: verticalScale(10),
        paddingHorizontal: verticalScale(10),
        borderRadius: moderateScale(20),
        alignItems: "center",
    },
    buttomText: {
        color: "white",
        fontSize: moderateScale(13),
        fontWeight: "bold",
    }
});

export default BottomComponent