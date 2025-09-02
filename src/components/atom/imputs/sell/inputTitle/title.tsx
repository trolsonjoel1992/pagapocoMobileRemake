import IconsPath from '@/src/constants/iconsPath';
import ImagesPath from '@/src/constants/imagesPath';
import {
  globalBorderRadius,
  globalFontSizeReg,
  globalFontWeightSemiBold,
  globalIconsSma,
  globalInputHeight,
  globalInputWidthXL,
} from '@/src/constants/styles/globalStyles';
import { useTheme } from '@/src/context/ThemeContext';
import React from 'react';
import { Image, TextInput, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

type Props = {
  value: string;
  onValidChange?: (isValid: boolean) => void;
  onChangeText: (text: string) => void;
};

const Title = ({ value, onValidChange, onChangeText }: Props) => {
  const { colors, theme } = useTheme();
  const titleRegex = /^[a-zA-Z0-9\s.]+$/;
  let iconSource = theme === 'dark' ? IconsPath.inputDark : IconsPath.input;
  const isValid = value.length > 0 && titleRegex.test(value);

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
        width: globalInputWidthXL,
        height: globalInputHeight,
        borderRadius: globalBorderRadius,
        paddingHorizontal: moderateScale(15),
      }}
    >
      <Image
        source={theme === 'dark' ? ImagesPath.titleD : ImagesPath.title}
        style={{
          width: globalIconsSma,
          height: globalIconsSma,
        }}
      />
      <TextInput
        style={{
          color: colors.textPrimary,
          fontWeight: globalFontWeightSemiBold,
          fontSize: globalFontSizeReg,
          flex: 1,
          marginHorizontal: moderateScale(10),
        }}
        onChangeText={onChangeText}
        value={value}
        placeholder='Ingresá el título'
        placeholderTextColor={colors.textInput}
        autoCapitalize='sentences'
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

export default Title;
