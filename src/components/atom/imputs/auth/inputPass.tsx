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

type InputPassProps = {
  description: string;
  value: string;
  onValidChange?: (isValid: boolean) => void;
  onChangeText: (text: string) => void;
};

const InputPass = ({
  description,
  onValidChange,
  value,
  onChangeText,
}: InputPassProps) => {
  const { colors, theme } = useTheme();
  let iconSource = theme === 'dark' ? IconsPath.inputDark : IconsPath.input;
  const isValid = value.length >= 6;

  if (value.length > 0 && value.length < 6) {
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
        secureTextEntry
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

export default InputPass;
