import InputEmail from '@/src/components/atom/imputs/auth/inputEmail';
import {
  globalFontSizeMid,
  globalFontWeightMedium,
} from '@/src/constants/styles/globalStyles';
import { useTheme } from '@/src/context/ThemeContext';
import React from 'react';
import { Text, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

type InputProps = {
  onValidChange?: (isValid: boolean) => void;
  onChangeText?: (text: string) => void;
};

const EmailInput = ({ onValidChange, onChangeText }: InputProps) => {
  const { colors } = useTheme();

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
        Cambiar correo electrónico
      </Text>
      <InputEmail
        description='Nuevo correo'
        onValidChange={onValidChange}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default EmailInput;
