import ModalContainer from '@/src/components/molecule/modal/modalContainer';
import IconsPath from '@/src/constants/iconsPath';
import {
  globalBorderRadius,
  globalButtonElevation,
  globalButtonHeight,
  globalButtonWidthReg,
  globalFontSizeReg,
  globalFontWeightBold,
  globalIconsSma,
} from '@/src/constants/styles/globalStyles';
import { useAuth } from '@/src/context/AuthContext';
import { useTheme } from '@/src/context/ThemeContext';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Image, Modal, Text, TouchableOpacity, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

type ButtonWhatsappProps = {
  enabled: boolean;
  onPress?: () => void;
};
const ButtonWhatsapp = ({ enabled, onPress }: ButtonWhatsappProps) => {
  const { colors, theme } = useTheme();
  const { user } = useAuth();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState<'login' | 'warning' | null>(null);

  let whatsappIcon;
  let bckgrdColor;
  let txtColor;
  if (theme === 'dark') {
    whatsappIcon = enabled ? IconsPath.whatsappD : IconsPath.whatsappDisD;
    bckgrdColor = enabled ? colors.primary : colors.secondary;
    txtColor = enabled ? colors.textSecondary : colors.textInput;
  } else {
    whatsappIcon = enabled ? IconsPath.whatsappL : IconsPath.whatsappDisL;
    bckgrdColor = enabled ? colors.primary : colors.secondary;
    txtColor = enabled ? colors.textSecondary : colors.textInput;
  }

  const handlePress = () => {
    if (!user) {
      setModalType('login');
      setModalVisible(true);
      return;
    }
    setModalType('warning');
    setModalVisible(true);
  };

  const handleWarningAccept = () => {
    setModalVisible(false);
    router.push('/(home)/whatsapp');
  };

  const handleLoginAccept = () => {
    setModalVisible(false);
    router.push('/(auth)/fullLogin');
  };

  return (
    <>
      <TouchableOpacity
        onPress={handlePress}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: moderateScale(12.5),
          elevation: globalButtonElevation,
          backgroundColor: bckgrdColor,
          borderRadius: globalBorderRadius,
          height: globalButtonHeight,
          width: globalButtonWidthReg,
        }}
      >
        <Image
          source={whatsappIcon}
          style={{ width: globalIconsSma, height: globalIconsSma }}
        />
        <Text
          style={{
            color: txtColor,
            fontWeight: globalFontWeightBold,
            fontSize: globalFontSizeReg,
          }}
        >
          Whatsapp
        </Text>
      </TouchableOpacity>
      <Modal
        visible={modalVisible}
        transparent
        animationType='slide'
        onRequestClose={() => setModalVisible(false)}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.5)',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {modalType === 'login' ? (
            <ModalContainer
              modalImage={'modalWarning'}
              message={'Para usar esta función, debes iniciar sesión.'}
              buttonCancel={true}
              buttonAction={'Ingresar'}
              onPressCancel={() => setModalVisible(false)}
              onPressButtonAction={handleLoginAccept}
            />
          ) : (
            <ModalContainer
              modalImage={'modalWarning'}
              message={'No compartas información sensible con desconocidos.'}
              buttonCancel={false}
              buttonAction={'Entendido'}
              onPressButtonAction={handleWarningAccept}
            />
          )}
        </View>
      </Modal>
    </>
  );
};

export default ButtonWhatsapp;
