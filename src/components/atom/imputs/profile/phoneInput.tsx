import IconsPath from '@/src/constants/iconsPath';
import {
  globalBorderRadius,
  globalFontSizeMid,
  globalFontSizeReg,
  globalFontWeightMedium,
  globalFontWeightSemiBold,
  globalIconsSma,
  globalInputHeight,
  globalInputWidth,
} from '@/src/constants/styles/globalStyles';
import { useTheme } from '@/src/context/ThemeContext';
import React, { useState } from 'react';
import { Image, Text, TextInput, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

type InputProps = {
  value?: string; // Agregamos value como opcional
  onValidChange?: (isValid: boolean) => void;
  onChangeText?: (text: string) => void;
};

const PhoneInput = ({ value, onValidChange, onChangeText }: InputProps) => {
  const { colors, theme } = useTheme();
  const [phone, setPhone] = useState(value || '');
  let iconSource = theme === 'dark' ? IconsPath.inputDark : IconsPath.input;
  const isValid = phone.length >= 6;

  if (phone.length > 0 && phone.length < 6) {
    iconSource = IconsPath.denied;
  } else if (isValid) {
    iconSource = IconsPath.confirm;
  }

  React.useEffect(() => {
    if (onValidChange) onValidChange(isValid);
  }, [isValid, onValidChange]);

  // Solo permite números y notifica el cambio
  const handleChange = (text: string) => {
    const numericText = text.replace(/[^0-9]/g, '');
    setPhone(numericText);
    if (onChangeText) onChangeText(numericText); // <--- notifica el cambio
  };

  return (
    <View>
      <Text
        style={{
          color: colors.textPrimary,
          fontWeight: globalFontWeightMedium,
          fontSize: globalFontSizeMid,
          marginBottom: moderateScale(10),
        }}
      >
        Cambiar número de teléfono
      </Text>
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
          onChangeText={handleChange}
          value={phone}
          placeholder='Nuevo teléfono'
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
    </View>
  );
};

export default PhoneInput;
