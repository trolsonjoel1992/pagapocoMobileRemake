import ButtonCancel from '@/src/components/atom/buttons/buttonCancel';
import ButtonReg from '@/src/components/atom/buttons/buttonReg';
import ImagesPath from '@/src/constants/imagesPath';
import {
  globalBorderRadius,
  globalButtonElevation,
  globalFontSizeMid,
  globalFontWeightBold,
} from '@/src/constants/styles/globalStyles';
import { useTheme } from '@/src/context/ThemeContext';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

type ModalImageType = 'modalCheck' | 'modalQuestion' | 'modalWarning';
type ModalContainerProps = {
  modalImage: ModalImageType;
  message: string;
  buttonCancel: boolean;
  buttonAction: string;
  onPressCancel?: () => void;
  onPressButtonAction?: () => void;
};

const ModalContainer = ({
  modalImage,
  message,
  buttonCancel,
  buttonAction,
  onPressCancel,
  onPressButtonAction,
}: ModalContainerProps) => {
  const { colors } = useTheme();
  const imageDimensions = moderateScale(100);

  return (
    <View
      style={{
        backgroundColor: colors.background,
        width: '85%',
        height: '55%',
        padding: moderateScale(20),
        borderRadius: globalBorderRadius,
        elevation: globalButtonElevation,
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: '45%',
        }}
      >
        <Image
          source={ImagesPath[modalImage]}
          style={{ width: imageDimensions, height: imageDimensions }}
        />
      </View>
      <Text
        style={{
          color: colors.textPrimary,
          fontSize: globalFontSizeMid,
          fontWeight: globalFontWeightBold,
          textAlign: 'center',
          marginBottom: moderateScale(30),
        }}
      >
        {message}
      </Text>
      {buttonCancel ? <ButtonCancel onPress={onPressCancel} /> : null}
      <ButtonReg action={buttonAction} onPress={onPressButtonAction} />
    </View>
  );
};

export default ModalContainer;
