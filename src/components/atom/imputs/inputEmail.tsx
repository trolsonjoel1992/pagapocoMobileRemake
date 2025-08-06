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
import React, { useState } from 'react';
import { Image, TextInput, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

type InputEmailProps = {
  description: string;
  onValidChange?: (isValid: boolean) => void;
};

const InputEmail = ({ description, onValidChange }: InputEmailProps) => {
  const [email, setEmail] = useState('');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let iconSource = IconsPath.input;
  const isValid = email.length > 0 && emailRegex.test(email);

  if (email.length > 0 && !isValid) {
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
        backgroundColor: lightColor.backgroundBCI,
        width: globalInputWidth,
        height: globalInputHeight,
        borderRadius: globalBorderRadius,
        paddingHorizontal: moderateScale(15),
      }}
    >
      <TextInput
        style={{
          color: lightColor.textPrimary,
          fontWeight: globalFontWeightSemiBold,
          fontSize: globalFontSizeReg,
        }}
        onChangeText={setEmail}
        value={email}
        placeholder={description}
        placeholderTextColor={lightColor.textInput}
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
