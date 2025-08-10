import IconsPath from '@/src/constants/iconsPath';
import {
  globalBorderRadius,
  globalFontSizeReg,
  globalFontWeightSemiBold,
  globalIconsSma,
  globalInputHeight,
  globalInputWidth,
} from '@/src/constants/styles/globalStyles';
import { useTheme } from '@/src/context/ThemeContext';
import { router } from 'expo-router';
import React from 'react';
import { Image, TextInput, TouchableOpacity, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

type SearchBarProps = {
  showBack?: boolean;
};

const SearchBar = ({ showBack = true }: SearchBarProps) => {
  const { colors, theme } = useTheme();

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
        backgroundColor: colors.backgroundBCI,
      }}
    >
      {showBack ? (
        <TouchableOpacity onPress={() => router.back()}>
          <Image
            source={
              theme === 'dark' ? IconsPath.darkIconBack : IconsPath.iconBack
            }
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
          color: colors.textPrimary,
          fontWeight: globalFontWeightSemiBold,
          fontSize: globalFontSizeReg,
        }}
        placeholder='Buscar'
        placeholderTextColor={colors.textInput}
      />

      <TouchableOpacity style={{ marginLeft: 'auto' }}>
        <Image
          source={
            theme === 'dark' ? IconsPath.darkIconGlass : IconsPath.iconGlass
          }
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
