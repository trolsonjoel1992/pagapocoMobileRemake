import { lightColor } from '@/src/constants/colors';
import IconsPath from '@/src/constants/iconsPath';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';

type HeaderProps = {
  title: string;
};

const HeaderGeneric = ({ title }: HeaderProps) => {
  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: verticalScale(60),
        backgroundColor: lightColor.primary,
        paddingHorizontal: moderateScale(20),
      }}
    >
      <TouchableOpacity onPress={handleGoBack}>
        <Image
          source={IconsPath.iconBack}
          style={{
            width: moderateScale(30),
            height: moderateScale(30),
          }}
        />
      </TouchableOpacity>
      <Text
        style={{
          color: lightColor.textPrimary,
          fontSize: moderateScale(20),
          fontWeight: 'bold',
          flex: 1,
          textAlign: 'center',
          marginRight: moderateScale(30),
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export default HeaderGeneric;
