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

const Price = ({ value, onValidChange, onChangeText }: Props) => {
  const { colors, theme } = useTheme();
  const priceRegex = /^\d+(\.\d{0,2})?$/;
  let iconSource = theme === 'dark' ? IconsPath.inputDark : IconsPath.input;

  const numericValue = value.replace(/[\$\.]/g, '');
  const isValid =
    numericValue.length > 0 &&
    priceRegex.test(numericValue) &&
    parseFloat(numericValue) > 0;

  if (numericValue.length > 0 && !isValid) {
    iconSource = IconsPath.denied;
  } else if (isValid) {
    iconSource = IconsPath.confirm;
  }

  React.useEffect(() => {
    if (onValidChange) onValidChange(isValid);
  }, [isValid, onValidChange]);

  const formatNumberWithDots = (num: string): string => {
    const cleanNum = num.replace(/\D/g, '');
    const digits = cleanNum.split('').reverse();
    const formatted = digits
      .reduce((acc: string[], digit: string, i: number) => {
        if (i > 0 && i % 3 === 0) {
          acc.push('.');
        }
        acc.push(digit);
        return acc;
      }, [])
      .reverse()
      .join('');

    return formatted;
  };

  const handleChangeText = (text: string) => {
    const cleanText = text.replace(/[\$\.\s]/g, '');

    if (cleanText === '' || priceRegex.test(cleanText)) {
      const formattedNumber = formatNumberWithDots(cleanText);
      const formattedValue = cleanText ? `$${formattedNumber}` : '';
      onChangeText(formattedValue);
    }
  };

  return (
    <View
      style={{
        alignItems: 'center',
        flexDirection: 'row',
        width: globalInputWidthXL,
        height: globalInputHeight,
        justifyContent: 'space-between',
        borderRadius: globalBorderRadius,
        paddingHorizontal: moderateScale(15),
        backgroundColor: colors.backgroundBCI,
      }}
    >
      <Image
        source={theme === 'dark' ? ImagesPath.priceD : ImagesPath.price}
        style={{
          width: globalIconsSma,
          height: globalIconsSma,
        }}
      />
      <TextInput
        style={{
          flex: 1,
          color: colors.textPrimary,
          fontSize: globalFontSizeReg,
          marginHorizontal: moderateScale(10),
          fontWeight: globalFontWeightSemiBold,
        }}
        value={value}
        maxLength={11}
        keyboardType='numeric'
        onChangeText={handleChangeText}
        placeholder='Pon un precio acorde'
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
  );
};

export default Price;
