import { lightColor } from '@/src/constants/colors';
import {
  globalBorderRadius,
  globalFontSizeReg,
  globalFontWeightSemiBold,
  globalIconsSma,
  globalInputHeight,
  globalInputWidth,
} from '@/src/constants/globalStyles';
import IconsPath from '@/src/constants/iconsPath';
import { router } from 'expo-router';
import React from 'react';
import { Image, TextInput, TouchableOpacity, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

type SearchBarProps = {
  showBack?: boolean;
};

const SearchBar = ({ showBack = true }: SearchBarProps) => {
  return (
    <View
      style={{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: moderateScale(15),
        width: globalInputWidth,
        height: globalInputHeight,
        borderRadius: globalBorderRadius,
        backgroundColor: lightColor.backgroundBCI,
      }}
    >
      {showBack ? (
        <TouchableOpacity onPress={() => router.back()}>
          <Image
            source={IconsPath.iconBack}
            style={{
              width: globalIconsSma,
              height: globalIconsSma,
            }}
          />
        </TouchableOpacity>
      ) : (
        <View
          style={{
            width: globalIconsSma,
            height: globalIconsSma,
          }}
        />
      )}
      <TextInput
        style={{
          flex: 1,
          marginHorizontal: moderateScale(5),
          color: lightColor.textPrimary,
          fontWeight: globalFontWeightSemiBold,
          fontSize: globalFontSizeReg,
        }}
        placeholder='Buscar'
        placeholderTextColor={lightColor.textInput}
      />

      <TouchableOpacity style={{ marginLeft: 'auto' }}>
        <Image
          source={IconsPath.iconGlass}
          style={{
            width: globalIconsSma,
            height: globalIconsSma,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
