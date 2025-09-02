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

type EngineDisplacementInputProps = {
  value: string;
  onChangeText: (text: string) => void;
  onValidChange?: (isValid: boolean) => void;
};

const EngineDisplacementInput = ({
  value,
  onChangeText,
  onValidChange,
}: EngineDisplacementInputProps) => {
  const { colors, theme } = useTheme();
  // Valida que sea un número positivo y no vacío
  const isValid = /^\d+(\.\d+)?$/.test(value) && Number(value) > 0;

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
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: colors.backgroundBCI,
        width: globalInputWidth,
        height: globalInputHeight,
        borderRadius: globalBorderRadius,
        paddingHorizontal: moderateScale(15),
        marginBottom: moderateScale(10),
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
        placeholder='Ingresar'
        placeholderTextColor={colors.textInput}
        keyboardType='numeric'
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

export default EngineDisplacementInput;
