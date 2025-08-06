import { lightColor } from '@/src/constants/colors';
import IconsPath from '@/src/constants/iconsPath';
import {
  globalFontSizeMid,
  globalFontWeightBold,
  globalIconsSma,
} from '@/src/constants/styles/globalStyles';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';

type HeaderProps = {
  title: string;
  onBackPress?: () => void;
};

const HeaderGeneric = ({ title, onBackPress }: HeaderProps) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: verticalScale(55),
        backgroundColor: lightColor.primary,
        paddingHorizontal: moderateScale(20),
      }}
    >
      <TouchableOpacity onPress={onBackPress}>
        <Image
          source={IconsPath.iconBack}
          style={{
            width: globalIconsSma,
            height: globalIconsSma,
          }}
        />
      </TouchableOpacity>
      <Text
        style={{
          color: lightColor.textPrimary,
          fontSize: globalFontSizeMid,
          fontWeight: globalFontWeightBold,
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
