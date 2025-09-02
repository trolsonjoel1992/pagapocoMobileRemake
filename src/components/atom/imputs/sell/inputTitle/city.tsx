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

const City = ({ value, onValidChange, onChangeText }: Props) => {
  const { colors, theme } = useTheme();
  const cityRegex = /^[a-zA-ZÀ-ÿ\s\-.,']+$/;
  let iconSource = theme === 'dark' ? IconsPath.inputDark : IconsPath.input;
  const isValid = value.length >= 3 && cityRegex.test(value);
  if (value.length > 0 && !isValid) {
    iconSource = IconsPath.denied;
  } else if (isValid) {
    iconSource = IconsPath.confirm;
  }

  React.useEffect(() => {
    if (onValidChange) onValidChange(isValid);
  }, [isValid, onValidChange]);

  const handleChangeText = (text: string) => {
    const formattedText = text
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');

    onChangeText(formattedText);
  };

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
        source={theme === 'dark' ? ImagesPath.cityD : ImagesPath.city}
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
        onChangeText={handleChangeText}
        value={value}
        placeholder='Ciudad de tu venta'
        placeholderTextColor={colors.textInput}
        autoCapitalize='words'
        maxLength={30}
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

export default City;
