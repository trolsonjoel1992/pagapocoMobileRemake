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
import React, { useEffect } from 'react';
import { Image, TextInput, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

type DescriptionInputProps = {
  value: string;
  onChangeText: (text: string) => void;
  onValidChange?: (isValid: boolean) => void;
};

const DescriptionInput = ({
  value,
  onChangeText,
  onValidChange,
}: DescriptionInputProps) => {
  const { colors, theme } = useTheme();
  const isValid = value.trim().length > 0;

  let iconSource = theme === 'dark' ? IconsPath.inputDark : IconsPath.input;
  if (value.length > 0 && !isValid) {
    iconSource = IconsPath.denied;
  } else if (isValid) {
    iconSource = IconsPath.confirm;
  }

  useEffect(() => {
    if (onValidChange) onValidChange(isValid);
  }, [isValid, onValidChange]);

  return (
    <View
      style={{
        alignItems: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: colors.backgroundBCI,
        width: globalInputWidth,
        minHeight: globalInputHeight * 1.5,
        borderRadius: globalBorderRadius,
        paddingHorizontal: moderateScale(15),
        marginBottom: moderateScale(10),
        paddingVertical: moderateScale(10),
      }}
    >
      <TextInput
        style={{
          color: colors.textPrimary,
          fontWeight: globalFontWeightSemiBold,
          fontSize: globalFontSizeReg,
          flex: 1,
          textAlignVertical: 'top',
        }}
        onChangeText={onChangeText}
        value={value}
        placeholder='Ingresar'
        placeholderTextColor={colors.textInput}
        autoCapitalize='sentences'
        multiline
        numberOfLines={4}
        maxLength={500}
      />
      <Image
        source={iconSource}
        style={{
          width: globalIconsSma,
          height: globalIconsSma,
          marginLeft: moderateScale(10),
          marginTop: moderateScale(5),
        }}
      />
    </View>
  );
};

export default DescriptionInput;
