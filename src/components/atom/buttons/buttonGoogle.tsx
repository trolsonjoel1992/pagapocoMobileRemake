import { lightColor } from '@/src/constants/colors';
import IconsCPath from '@/src/constants/iconsPath';
import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';

const ButtonGoogle = () => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: lightColor.backgroundBCI,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: moderateScale(300),
        height: verticalScale(55),
        borderRadius: moderateScale(20),
        elevation: moderateScale(5),
      }}
    >
      <Image
        source={IconsCPath.buttonGoogle}
        style={{
          width: moderateScale(30),
          height: moderateScale(30),
          marginLeft: moderateScale(20),
        }}
      />
      <Text
        style={{
          color: lightColor.textInput,
          fontSize: moderateScale(24),
          fontWeight: 'bold',
          elevation: moderateScale(5),
          marginRight: moderateScale(30),
        }}
      >
        Iniciar con Google
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonGoogle;
