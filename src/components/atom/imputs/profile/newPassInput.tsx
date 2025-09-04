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

const NewPassInput = ({ value, onValidChange, onChangeText }: InputProps) => {
  const { colors, theme } = useTheme();
  const [password, setPassword] = useState(value || '');
  const [repeatPassword, setRepeatPassword] = useState('');
  const isPasswordValid = password.length >= 6;
  const isRepeatValid = repeatPassword.length >= 6;
  const isValid =
    isPasswordValid && isRepeatValid && password === repeatPassword;

  let iconSourcePassword =
    theme === 'dark' ? IconsPath.inputDark : IconsPath.input;
  if (password.length > 0 && !isPasswordValid) {
    iconSourcePassword = IconsPath.denied;
  } else if (isPasswordValid && password.length > 0) {
    iconSourcePassword = IconsPath.confirm;
  }

  let iconSourceRepeat =
    theme === 'dark' ? IconsPath.inputDark : IconsPath.input;
  if (repeatPassword.length > 0 && !isRepeatValid) {
    iconSourceRepeat = IconsPath.denied;
  } else if (isRepeatValid && password.length > 0) {
    if (!isValid) {
      iconSourceRepeat = IconsPath.denied;
    } else {
      iconSourceRepeat = IconsPath.confirm;
    }
  }

  React.useEffect(() => {
    if (onValidChange) onValidChange(isValid);
  }, [isValid, onValidChange]);

  // Notifica el cambio al padre si existe la prop
  const handlePasswordChange = (text: string) => {
    setPassword(text);
    if (onChangeText) onChangeText(text);
  };

  const handleRepeatChange = (text: string) => {
    setRepeatPassword(text);
    // Si quieres notificar también el cambio del repeat, puedes hacerlo aquí
    // if (onChangeText) onChangeText(text);
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
        Cambiar contraseña
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
          marginBottom: moderateScale(10),
        }}
      >
        <TextInput
          style={{
            color: colors.textPrimary,
            fontWeight: globalFontWeightSemiBold,
            fontSize: globalFontSizeReg,
          }}
          onChangeText={handlePasswordChange}
          value={password}
          placeholder='Nueva contraseña'
          placeholderTextColor={colors.textInput}
          secureTextEntry
        />
        <Image
          source={iconSourcePassword}
          style={{
            width: globalIconsSma,
            height: globalIconsSma,
          }}
        />
      </View>
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
          onChangeText={handleRepeatChange}
          value={repeatPassword}
          placeholder='Repetir contraseña'
          placeholderTextColor={colors.textInput}
          secureTextEntry
        />
        <Image
          source={iconSourceRepeat}
          style={{
            width: globalIconsSma,
            height: globalIconsSma,
          }}
        />
      </View>
    </View>
  );
};

export default NewPassInput;
