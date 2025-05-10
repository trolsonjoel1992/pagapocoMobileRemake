import ImagesPath from '@/src/constants/ImagesPath';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';

const ButtomGoogleComponent = ({ titulo } : any ) => {
  return (
    <TouchableOpacity style={styles.buttomContainer}>
        
        <Image
            source={ImagesPath.iconGoogle}
            style={styles.iconGoogleStyle}
            resizeMode="contain"
        />

        <Text style={styles.buttomText}>{ titulo }</Text>

    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    buttomContainer: {
        backgroundColor: "#FFFFFF",
        width: "100%",
        paddingVertical: verticalScale(10),
        paddingHorizontal: verticalScale(10),
        borderRadius: moderateScale(4),
        alignItems: "center",
        flexDirection: "row",
        elevation: 5,
    },
    buttomText: {
        color: "black",
        fontSize: moderateScale(13),
        paddingHorizontal: moderateScale(60),
        fontWeight: "bold",
    },
    iconGoogleStyle: {
        width: moderateScale(20),
        height: moderateScale(20),
        //marginRight: moderateScale(10),
    }
});

export default ButtomGoogleComponent;