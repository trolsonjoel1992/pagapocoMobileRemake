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

type InputUserProps = {
  onValidChange?: (isValid: boolean) => void;
  onChangeText?: (text: string) => void;
};

const UserInput = ({ onValidChange, onChangeText }: InputUserProps) => {
  const [user, setUser] = useState('');
  const { colors, theme } = useTheme();
  let iconSource = theme === 'dark' ? IconsPath.inputDark : IconsPath.input;
  const isValid = user.length > 3;

  if (user.length > 0 && user.length <= 3) {
    iconSource = IconsPath.denied;
  } else if (isValid) {
    iconSource = IconsPath.confirm;
  }

  React.useEffect(() => {
    if (onValidChange) onValidChange(isValid);
  }, [isValid, onValidChange]);

  // Notifica el cambio al padre si existe la prop
  const handleChange = (text: string) => {
    setUser(text);
    if (onChangeText) onChangeText(text);
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
        Cambiar nombre de usuario
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
          value={user}
          placeholder='Nuevo usuario'
          placeholderTextColor={colors.textInput}
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

export default UserInput;
