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
import React from 'react';
import { Image, TextInput, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

type InputEmailProps = {
  description: string;
  value: string;
  onValidChange?: (isValid: boolean) => void;
  onChangeText: (text: string) => void;
};

const InputEmail = ({
  description,
  value,
  onValidChange,
  onChangeText,
}: InputEmailProps) => {
  const { colors, theme } = useTheme();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let iconSource = theme === 'dark' ? IconsPath.inputDark : IconsPath.input;
  const isValid = value.length > 0 && emailRegex.test(value);

  if (value.length > 0 && !isValid) {
    iconSource = IconsPath.denied;
  } else if (isValid) {
    iconSource = IconsPath.confirm;
  }

  React.useEffect(() => {
    if (onValidChange) onValidChange(isValid);
  }, [isValid, onValidChange]);

  return (
    <View
      style={{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: colors.backgroundBCI,
        width: globalInputWidth,
        height: globalInputHeight,
        borderRadius: globalBorderRadius,
        paddingHorizontal: moderateScale(15),
      }}
    >
      <TextInput
        style={{
          color: colors.textPrimary,
          fontWeight: globalFontWeightSemiBold,
          fontSize: globalFontSizeReg,
        }}
        onChangeText={onChangeText}
        value={value}
        placeholder={description}
        placeholderTextColor={colors.textInput}
        keyboardType='email-address'
        autoCapitalize='none'
      />
      <Image
        source={iconSource}
        style={{
          width: globalIconsSma,
          height: globalIconsSma,
        }}
      />
    </View>
  );
};

export default InputEmail;
