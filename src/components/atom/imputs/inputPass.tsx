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

type InputPassProps = {
  description: string;
  onValidChange?: (isValid: boolean) => void;
};

const InputPass = ({ description, onValidChange }: InputPassProps) => {
  const [password, setPassword] = useState('');
  let iconSource = IconsPath.input;
  const isValid = password.length >= 6;

  if (password.length > 0 && password.length < 6) {
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
        onChangeText={setPassword}
        value={password}
        placeholder={description}
        placeholderTextColor={lightColor.textInput}
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
