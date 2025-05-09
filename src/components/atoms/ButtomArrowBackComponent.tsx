import ImagesPath from '@/src/constants/ImagesPath';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';

const ButtomArrowBackComponent = () => {
  return (
    <TouchableOpacity>

        <Image 
            source={ImagesPath.imageArrowBack}
            style={styles.logoArrowBackStyle}
            resizeMode="contain"
        />

    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    buttomContainer: {
        padding: moderateScale(10),
        /* width: "100%",
        paddingVertical: verticalScale(10),
        paddingHorizontal: verticalScale(10),
        borderRadius: moderateScale(4),
        alignItems: "center",
        flexDirection: "row",
        elevation: 5 */
    },
    logoArrowBackStyle: {
        width: moderateScale(30),
        height: verticalScale(30),
    },
});

export default ButtomArrowBackComponent;